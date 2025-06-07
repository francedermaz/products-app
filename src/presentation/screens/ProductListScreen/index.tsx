import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Product } from "../../../domain/models/Product";
import { ProductRepositoryImpl } from "../../../data/repositories/ProductRepositoryImpl";
import ProductCard from "./components/ProductCard";
import { styles } from "./styles";
import { ProductListScreenNavigationProp } from "../../navigation/types";
import SkeletonGrid from "./components/SkeletonGrid";

type Props = {
  navigation: ProductListScreenNavigationProp;
};

export default function ProductListScreen({ navigation }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ProductRepositoryImpl.getAll()
      .then(setProducts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <SkeletonGrid />;
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(p) => p.id.toString()}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <ProductCard
          product={item}
          onPress={() => undefined}
        />
      )}
    />
  );
}
