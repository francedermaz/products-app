import React from "react";
import { FlatList, View } from "react-native";
import { Product } from "../../../domain/models/Product";
import { ProductRepositoryImpl } from "../../../data/repositories/ProductRepositoryImpl";
import ProductCard from "./components/ProductCard";
import SkeletonGrid from "./components/SkeletonGrid";
import { useCategories } from "./hooks/useCategories";
import { styles } from "./styles";
import { ProductListScreenNavigationProp } from "../../navigation/types";
import TagList from "../../components/TagList";
import { useProducts } from "./hooks/useProducts";

type Props = {
  navigation: ProductListScreenNavigationProp;
};

export default function ProductListScreen({ navigation }: Props) {
  const { categories, selected, handleSelect } = useCategories();
  const { products, loading } = useProducts(selected);

  return (
    <View style={styles.screen}>
      <TagList
        categories={categories}
        selected={selected}
        onSelect={handleSelect}
      />

      {loading ? (
        <View style={styles.skeleton}>
          <SkeletonGrid />
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(p) => p.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <ProductCard product={item} onPress={() => undefined} />
          )}
        />
      )}
    </View>
  );
}
