import React, { forwardRef, useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { DSBottomSheetModal } from "../../../../components/DSBottomSheetModal";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { SortOption } from "../../../../../domain/models/SortOption";
import { FlatList } from "react-native-gesture-handler";

type Props = {
  selectedOption: SortOption;
  onChange: (opt: SortOption) => void;
};

const options: { label: string; value: SortOption }[] = [
  { label: "Price: Low to High", value: SortOption.PriceAsc },
  { label: "Price: High to Low", value: SortOption.PriceDesc },
  { label: "Rating: Low to High", value: SortOption.RatingAsc },
  { label: "Rating: High to Low", value: SortOption.RatingDesc },
];

export const FilterBottomSheet = forwardRef<BottomSheetModal, Props>(
  ({ selectedOption, onChange }, ref) => {
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
        <Text style={styles.title}>Sort By</Text>

        <FlatList
          data={options}
          keyExtractor={(item) => item.value}
          renderItem={renderSortItem}
          scrollEnabled={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </DSBottomSheetModal>
    );
  }
);
