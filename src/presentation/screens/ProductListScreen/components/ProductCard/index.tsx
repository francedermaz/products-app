import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Product } from "../../../../../domain/models/Product";
import { styles } from "./styles";

type Props = {
  product: Product;
  onPress: () => void;
};

export default function ProductCard({ product, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </TouchableOpacity>
  );
}
