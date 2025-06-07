import { useEffect, useRef, useState } from "react";
import { Product } from "../../../../domain/models/Product";
import { ProductRepositoryImpl } from "../../../../data/repositories/ProductRepositoryImpl";
import { notifyLowStock } from "../../../../notifications/lowStockNotifier";

export const useProductDetail = (productId: number) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const notifiedRef = useRef(false);

  useEffect(() => {
    if (product && product.stock < 10 && !notifiedRef.current) {
      notifyLowStock(product.title, product.stock);
      notifiedRef.current = true;
    }
  }, [product]);

  useEffect(() => {
    setLoading(true);
    ProductRepositoryImpl.getById(productId)
      .then(setProduct)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [productId]);

  return { product, loading, error };
};
