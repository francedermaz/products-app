import React from "react";
import { ScrollView, View } from "react-native";
import Tag from "../Tag";

type Props = {
  categories: string[];
  selected: string | null;
  onSelect: (cat: string | null) => void;
};

export default function TagList({ categories, selected, onSelect }: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ paddingHorizontal: 16, paddingBottom: 8 }}
    >
      <Tag
        label="All"
        selected={selected === null}
        onPress={() => onSelect(null)}
      />
      {categories.map((cat) => (
        <Tag
          key={cat}
          label={cat}
          selected={selected === cat}
          onPress={() => onSelect(cat)}
        />
      ))}
    </ScrollView>
  );
}
