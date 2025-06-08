import React, { forwardRef, useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { DSBottomSheetModal } from "../../../../components/DSBottomSheetModal";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { SortOption } from "../../../../../domain/models/SortOption";
import { FlatList } from "react-native-gesture-handler";
import { FilterBottomSheetProps } from "../../types";
import { useTranslation } from "react-i18next";
import i18n from "../../../../../locales/i18n";

const options: { label: string; value: SortOption }[] = [
  {
    label: i18n.t("ProductListScreen.FilterBottomSheet.priceLowToHigh"),
    value: SortOption.PriceAsc,
  },
  {
    label: i18n.t("ProductListScreen.FilterBottomSheet.priceHighToLow"),
    value: SortOption.PriceDesc,
  },
  {
    label: i18n.t("ProductListScreen.FilterBottomSheet.ratingLowToHigh"),
    value: SortOption.RatingAsc,
  },
  {
    label: i18n.t("ProductListScreen.FilterBottomSheet.ratingHighToLow"),
    value: SortOption.RatingDesc,
  },
];

export const FilterBottomSheet = forwardRef<
  BottomSheetModal,
  FilterBottomSheetProps
>(({ selectedOption, onChange }, ref) => {
  const { t } = useTranslation();

  const renderSortItem = useCallback(
    ({ item }: { item: (typeof options)[number] }) => (
      <View>
        <TouchableOpacity
          onPress={() => onChange(item.value)}
          style={styles.option}
        >
          <Text
            style={[
              styles.label,
              selectedOption === item.value && styles.selected,
            ]}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      </View>
    ),
    [onChange, selectedOption]
  );

  return (
    <DSBottomSheetModal
      ref={ref}
      style={styles.contentContainer}
      snapPoints={["35%"]}
    >
      <Text style={styles.title}>
        {t("ProductListScreen.FilterBottomSheet.sortBy")}
      </Text>

      <FlatList
        data={options}
        keyExtractor={(item) => item.value}
        renderItem={renderSortItem}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </DSBottomSheetModal>
  );
});
