import React from "react";
import { ScrollView, View } from "react-native";
import Tag from "../Tag";
import { Category } from "../../../domain/models/Product";

type Props = {
  categories: Category[];
  selected: string | null;
  onSelect: (cat: Category | null) => void;
};

export default function TagList({ categories, selected, onSelect }: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ paddingBottom: 12 }}
    >
      <Tag
        label="All"
        selected={selected === null}
        onPress={() => onSelect(null)}
      />
      {categories.map((cat) => (
        <Tag
          key={cat.slug}
          label={cat.name}
          selected={selected === cat.slug}
          onPress={() => onSelect(cat)}
        />
      ))}
    </ScrollView>
  );
}
