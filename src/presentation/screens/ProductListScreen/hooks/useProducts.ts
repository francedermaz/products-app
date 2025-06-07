import { useEffect, useState } from "react";
import { Product } from "../../../../domain/models/Product";
import { ProductRepositoryImpl } from "../../../../data/repositories/ProductRepositoryImpl";
import { SortOption } from "../../../../domain/models/SortOption";
import { sortProducts } from "../../../../utils/sortProducts";
import { showError } from "../../../../utils/errors";

export const useProducts = (
  selectedCategory: string | null,
  sort: SortOption
) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);

    const fetchProducts = selectedCategory
      ? ProductRepositoryImpl.getByCategory(selectedCategory)
      : ProductRepositoryImpl.getAll();

    fetchProducts
      .then((data) => {
        const sorted = sortProducts(data, sort);
        setProducts(sorted);
      })
      .catch(() => showError("Hubo un problema al cargar los productos."))
      .finally(() => setLoading(false));
  }, [selectedCategory, sort]);

  return { products, loading };
};
