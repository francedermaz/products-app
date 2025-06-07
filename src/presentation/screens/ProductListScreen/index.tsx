import React, { useCallback, useRef, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import ProductCard from "./components/ProductCard";
import SkeletonGrid from "./components/SkeletonGrid";
import { useCategories } from "./hooks/useCategories";
import { styles } from "./styles";
import { ProductListScreenNavigationProp } from "../../navigation/types";
import { useProducts } from "./hooks/useProducts";
import ScreenHeader from "../../components/ScreenHeader";
import TagList from "../../components/TagList";
import { MaterialIcons } from "@expo/vector-icons";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { FilterBottomSheet } from "./components/FilterBottomSheet";
import { SortOption } from "../../../domain/models/SortOption";

type Props = {
  navigation: ProductListScreenNavigationProp;
};

export default function ProductListScreen({ navigation }: Props) {
  const [sort, setSort] = useState<SortOption>(SortOption.PriceAsc);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const { categories, selected, handleSelect } = useCategories();
  const { products, loading } = useProducts(selected, sort);

  const handleChange = useCallback((opt: SortOption) => {
    setSort(opt);
    bottomSheetRef.current?.close();
  }, []);

  const handleOpenSheet = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  return (
    <View style={styles.screen}>
      <ScreenHeader
        title="Products"
        right={
          <TouchableOpacity onPress={handleOpenSheet}>
            <MaterialIcons name="sort" size={20} color="#333" />
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

      <FilterBottomSheet
        ref={bottomSheetRef}
        selectedOption={sort}
        onChange={handleChange}
      />
    </View>
  );
}
