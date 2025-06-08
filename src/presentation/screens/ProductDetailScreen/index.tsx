import React from "react";
import { View, Text, Image, ActivityIndicator, ScrollView } from "react-native";
import { styles } from "./styles";
import { ScreenHeader } from "../../components/ScreenHeader";
import { useProductDetail } from "./hooks/useProductDetail";
import { useCategoriesContext } from "../../../context/CategoriesContext";
import { ProductDetailScreenProps } from "../../navigation/types";
import { colors } from "../../../theme/colors";
import { useTranslation } from "react-i18next";

export const ProductDetailScreen = ({ route }: ProductDetailScreenProps) => {
  const { t } = useTranslation();
  const { product, loading, error } = useProductDetail(route.params.id);
  const { categories } = useCategoriesContext();

  const categoryName =
    categories.find((cat) => cat.slug === product?.category)?.name ??
    product?.category;

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={colors.textPrimary} />
      </View>
    );
  }

  if (error) {
    return;
  }

  return (
    <ScreenHeader title={categoryName ?? ""} showBack>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{ uri: product?.thumbnail }} style={styles.image} />

        <Text style={styles.title}>{product?.title}</Text>
        <Text style={styles.description}>{product?.description}</Text>

        {product?.brand && (
          <View style={styles.detailRow}>
            <Text style={styles.label}>{t("ProductDetailScreen.brand")}:</Text>
            <Text style={styles.value}>{product.brand}</Text>
          </View>
        )}

        <View style={styles.detailRow}>
          <Text style={styles.label}>{t("ProductDetailScreen.stock")}:</Text>
          <Text style={styles.value}>{product?.stock}</Text>
        </View>

        {product?.rating && (
          <View style={styles.detailRow}>
            <Text style={styles.label}>{t("ProductDetailScreen.rating")}:</Text>
            <Text style={styles.value}>{product.rating.toFixed(1)}</Text>
          </View>
        )}

        {product?.price && (
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>${product.price.toFixed(2)}</Text>
          </View>
        )}
      </ScrollView>
    </ScreenHeader>
  );
};
