import { useEffect, useState } from "react";
import { Product } from "../../../../domain/models/Product";
import { ProductRepositoryImpl } from "../../../../data/repositories/ProductRepositoryImpl";

export function useProducts(selectedCategory: string | null) {
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
      .then(setProducts)
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [selectedCategory]);

  return { products, loading, error };
}
