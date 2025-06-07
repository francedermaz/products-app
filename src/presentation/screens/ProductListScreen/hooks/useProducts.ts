import { useEffect, useState } from "react";
import { Product } from "../../../../domain/models/Product";
import { ProductRepositoryImpl } from "../../../../data/repositories/ProductRepositoryImpl";
import { SortOption } from "../../../../domain/models/SortOption";
import { sortProducts } from "../../../../utils/sortProducts";

export const useProducts = (
  selectedCategory: string | null,
  sort: SortOption
) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchProducts = selectedCategory
      ? ProductRepositoryImpl.getByCategory(selectedCategory)
      : ProductRepositoryImpl.getAll();

    fetchProducts
      .then((data) => {
        const sorted = sortProducts(data, sort);
        setProducts(sorted);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [selectedCategory, sort]);

  return { products, loading, error };
};
