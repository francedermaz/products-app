import React, { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { ProductRepositoryImpl } from "../../../data/repositories/ProductRepositoryImpl";
import { Product } from "../../../domain/models/Product";
import { styles } from "./styles";
import { DetailRouteProp } from "./types";
import ScreenHeader from "../../components/ScreenHeader";

export default function ProductDetailScreen() {
  const route = useRoute<DetailRouteProp>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    ProductRepositoryImpl.getById(route.params.id)
      .then(setProduct)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [route.params.id]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#333" />
      </View>
    );
  }

  if (error || !product) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>
          Product not found or failed to load.
        </Text>
      </View>
    );
  }

  return (
    <ScreenHeader title={product.title} showBack>
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
