import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../../../../theme/colors";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 48) / 2;

export const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    backgroundColor: colors.textOnDark,
    borderRadius: 12,
    marginBottom: 16,
    padding: 12,
    shadowColor: colors.shadow,
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  info: {
    justifyContent: "center",
    gap: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.textPrimary,
    marginTop: 10,
  },
  price: {
    fontSize: 13,
    color: colors.textPrimary,
    fontWeight: "500",
    marginTop: 6,
  },
});
