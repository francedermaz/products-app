import React, { useCallback, useRef, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { ProductCard } from "./components/ProductCard";
import { SkeletonGrid } from "./components/SkeletonGrid";
import { styles } from "./styles";
import { useProducts } from "./hooks/useProducts";
import { ScreenHeader } from "../../components/ScreenHeader";
import { TagList } from "../../components/TagList";
import { MaterialIcons } from "@expo/vector-icons";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { FilterBottomSheet } from "./components/FilterBottomSheet";
import { SortOption } from "../../../domain/models/SortOption";
import { useCategoriesContext } from "../../../context/CategoriesContext";
import { ProductListScreenProps } from "../../navigation/types";
import { Category, Product } from "../../../domain/models/Product";
import { RefreshControl } from "react-native-gesture-handler";
import { colors } from "../../../theme/colors";
import { useTranslation } from "react-i18next";

export const ProductListScreen = ({
  navigation,
  route,
}: ProductListScreenProps) => {
  const { t } = useTranslation();

  const [sort, setSort] = useState<SortOption>(SortOption.PriceAsc);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const initialSlug = route.params?.slug;

  const [currentSelectedCategory, setCurrentSelectedCategory] = useState<
    string | null
  >(initialSlug || null);

  const { categories } = useCategoriesContext();
  const { products, loading, refreshing, refetch } = useProducts(
    currentSelectedCategory,
    sort
  );

  const handleChange = useCallback((opt: SortOption) => {
    setSort(opt);
    bottomSheetRef.current?.close();
  }, []);

  const handleOpenSheet = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const handleTagSelect = useCallback((cat: Category | null) => {
    setCurrentSelectedCategory((prev) =>
      prev === cat?.slug ? null : cat?.slug ?? null
    );
  }, []);

  const handleRenderItem = useCallback(
    ({ item }: { item: Product }) => (
      <ProductCard
        product={item}
        onPress={() => navigation.navigate("ProductDetail", { id: item.id })}
      />
    ),
    [navigation]
  );

  return (
    <ScreenHeader
      title={t("common.products")}
      right={
        <TouchableOpacity onPress={handleOpenSheet}>
          <MaterialIcons name="sort" size={20} color={colors.textPrimary} />
        </TouchableOpacity>
      }
    >
      <View style={styles.screen}>
        <TagList
          categories={categories}
          selected={currentSelectedCategory}
          onSelect={handleTagSelect}
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
            showsVerticalScrollIndicator={false}
            renderItem={handleRenderItem}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={refetch}
                colors={[colors.refreshColor]}
                tintColor={colors.refreshColor}
              />
            }
          />
        )}

        <FilterBottomSheet
          ref={bottomSheetRef}
          selectedOption={sort}
          onChange={handleChange}
        />
      </View>
    </ScreenHeader>
  );
};
