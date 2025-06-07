import React from "react";
import { View, Text, Image, ActivityIndicator, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { styles } from "./styles";
import { DetailRouteProp } from "./types";
import ScreenHeader from "../../components/ScreenHeader";
import { useProductDetail } from "./hooks/useProductDetail";
import { useCategoriesContext } from "../../../context/CategoriesContext";

export const ProductDetailScreen = () => {
  const route = useRoute<DetailRouteProp>();
  const { product, loading, error } = useProductDetail(route.params.id);
  const { categories } = useCategoriesContext();

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#333" />
      </View>
    );
  }

  if (error || !product) {
    return <Text>Product not found</Text>;
  }

  const categoryName =
    categories.find((cat) => cat.slug === product.category)?.name ??
    product.category;

  return (
    <ScreenHeader title={categoryName} showBack>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{ uri: product.thumbnail }} style={styles.image} />

        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>

        <View style={styles.detailRow}>
          <Text style={styles.label}>Brand:</Text>
          <Text style={styles.value}>{product.brand}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>Stock:</Text>
          <Text style={styles.value}>{product.stock}</Text>
        </View>
      </ScrollView>
    </ScreenHeader>
  );
}
