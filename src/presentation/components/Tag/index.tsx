import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

export default function Tag({ label, selected, onPress }: Props) {
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
