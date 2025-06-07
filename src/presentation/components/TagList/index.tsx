import React from "react";
import { ScrollView } from "react-native";
import { Tag } from "../Tag";
import { Category } from "../../../domain/models/Product";

type TagListProps = {
  categories: Category[];
  selected: string | null;
  onSelect: (cat: Category | null) => void;
};

export const TagList = ({ categories, selected, onSelect }: TagListProps) => {
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
