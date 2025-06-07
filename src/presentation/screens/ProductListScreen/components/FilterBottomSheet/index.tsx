import React, { forwardRef } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { DSBottomSheetModal } from "../../../../components/DSBottomSheetModal";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { SortOption } from "../../../../../domain/models/SortOption";

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
    return (
      <DSBottomSheetModal ref={ref} style={styles.contentContainer}>
        <Text style={styles.title}>Sort By</Text>
        {options.map(({ label, value }) => (
          <TouchableOpacity
            key={value}
            onPress={() => onChange(value)}
            style={styles.option}
          >
            <Text
              style={[
                styles.label,
                selectedOption === value && styles.selected,
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </DSBottomSheetModal>
    );
  }
);
