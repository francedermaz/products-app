import { useEffect, useRef, useState } from "react";
import { Product } from "../../../../domain/models/Product";
import { ProductRepositoryImpl } from "../../../../data/repositories/ProductRepositoryImpl";
import { notifyLowStock } from "../../../../notifications/lowStockNotifier";
import { showError } from "../../../../utils/errors";
import { useNavigation } from "@react-navigation/native";
import { ProductDetailScreenProps } from "../../../navigation/types";

export const useProductDetail = (productId: number) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const navigation = useNavigation<ProductDetailScreenProps["navigation"]>();

  const notifiedRef = useRef(false);

  useEffect(() => {
    if (product && product.stock < 10 && !notifiedRef.current) {
      notifyLowStock(product.title, product.stock);
      notifiedRef.current = true;
    }
  }, [product]);

  const handleError = (error: Error) => {
    setError(error);
    showError("Hubo un problema al cargar el producto.");
    navigation.navigate("Home");
  };

  useEffect(() => {
    setLoading(true);
    ProductRepositoryImpl.getById(productId)
      .then(setProduct)
      .catch((err) => {
        handleError(err);
      })
      .finally(() => setLoading(false));
  }, [productId]);

  return { product, loading, error };
};
