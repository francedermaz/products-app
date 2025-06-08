import { useCallback, useEffect, useState } from "react";
import { Product } from "../../../../domain/models/Product";
import { ProductRepositoryImpl } from "../../../../data/repositories/ProductRepositoryImpl";
import { SortOption } from "../../../../domain/models/SortOption";
import { sortProducts } from "../../../../utils/sortProducts";
import { showError } from "../../../../utils/errors";
import { useTranslation } from "react-i18next";

export const useProducts = (
  selectedCategory: string | null,
  sort: SortOption
) => {
  const { t } = useTranslation();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const fetch = useCallback(async () => {
    try {
      const data = selectedCategory
        ? await ProductRepositoryImpl.getByCategory(selectedCategory)
        : await ProductRepositoryImpl.getAll();

      const sorted = sortProducts(data, sort);
      setProducts(sorted);
    } catch (e) {
      showError(t("ProductListScreen.error"));
    }
  }, [selectedCategory, sort]);

  const refetch = async () => {
    setRefreshing(true);
    await fetch();
    setRefreshing(false);
  };

  useEffect(() => {
    setLoading(true);
    fetch().finally(() => setLoading(false));
  }, [fetch]);

  return {
    products,
    loading,
    refreshing,
    refetch,
  };
};
