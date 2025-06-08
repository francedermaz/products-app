import { useEffect, useState } from "react";
import { Product } from "../../../../domain/models/Product";
import { ProductRepositoryImpl } from "../../../../data/repositories/ProductRepositoryImpl";
import { showError } from "../../../../utils/errors";
import { useNavigation } from "@react-navigation/native";
import { ProductDetailScreenProps } from "../../../navigation/types";
import { useTranslation } from "react-i18next";

export const useProductDetail = (productId: number) => {
  const { t } = useTranslation();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const navigation = useNavigation<ProductDetailScreenProps["navigation"]>();

  const handleError = (error: Error) => {
    setError(error);
    showError(t("ProductDetailScreen.error"));
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
