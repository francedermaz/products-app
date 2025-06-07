import { useEffect, useState } from "react";
import { Product } from "../../../../domain/models/Product";
import { ProductRepositoryImpl } from "../../../../data/repositories/ProductRepositoryImpl";

export const useProductDetail = (productId: number) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    ProductRepositoryImpl.getById(productId)
      .then(setProduct)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [productId]);

  return { product, loading, error };
}
