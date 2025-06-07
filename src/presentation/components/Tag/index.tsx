import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

type TagProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

export const Tag = ({ label, selected, onPress }: TagProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.tag, selected && styles.selectedTag]}
    >
      <Text style={[styles.tagText, selected && styles.selectedText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
