import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const styles = StyleSheet.create({
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: colors.skeletonBackground,
    borderRadius: 16,
    marginRight: 8,
  },
  selectedTag: {
    backgroundColor: colors.selectedRed,
  },
  tagText: {
    fontSize: 14,
    color: colors.textPrimary,
  },
  selectedText: {
    color: colors.textOnDark,
  },
});
