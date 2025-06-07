import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import ProductCard from "./components/ProductCard";
import SkeletonGrid from "./components/SkeletonGrid";
import { useCategories } from "./hooks/useCategories";
import { styles } from "./styles";
import { ProductListScreenNavigationProp } from "../../navigation/types";
import { useProducts } from "./hooks/useProducts";
import ScreenHeader from "../../components/ScreenHeader";
import TagList from "../../components/TagList";
import { Feather } from "@expo/vector-icons";

type Props = {
  navigation: ProductListScreenNavigationProp;
};

export default function ProductListScreen({ navigation }: Props) {
  const { categories, selected, handleSelect } = useCategories();
  const { products, loading } = useProducts(selected);

  return (
    <View style={styles.screen}>
      <ScreenHeader
        title="Productos"
        right={
          <TouchableOpacity onPress={() => console.log("Filtrar")}>
            <Feather name="filter" size={20} color="#333" />
          </TouchableOpacity>
        }
      >
        <TagList
          categories={categories}
          selected={selected}
          onSelect={handleSelect}
        />
      </ScreenHeader>

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
