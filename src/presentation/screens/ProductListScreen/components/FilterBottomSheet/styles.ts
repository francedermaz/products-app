import { StyleSheet } from "react-native";
import { colors } from "../../../../../theme/colors";

export const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: colors.textOnDark,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
    color: colors.textPrimary,
  },
  option: {
    paddingVertical: 12,
  },
  selected: {
    fontWeight: "bold",
    color: colors.primaryBlue,
  },
  label: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  separator: {
    height: 1,
    backgroundColor: colors.gray100,
  },
});
