import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.textOnDark,
    marginTop: 16,
  },
  image: {
    width: "100%",
    height: 260,
    resizeMode: "contain",
    marginBottom: 20,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
    color: colors.textPrimary,
  },
  description: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: "row",
    marginBottom: 8,
  },
  label: {
    fontWeight: "700",
    color: colors.textPrimary,
    width: 55,
  },
  value: {
    color: colors.textMuted,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  priceContainer: {
    alignItems: "flex-end",
    marginTop: 8,
    marginRight: 16,
    marginBottom: 8,
  },
  priceText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.gray900,
  },
});
