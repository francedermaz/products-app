import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../../../theme/colors";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 48) / 2;

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  card: {
    width: CARD_WIDTH,
    marginBottom: 16,
    backgroundColor: colors.textOnDark,
    borderRadius: 12,
    padding: 12,
  },
  texts: {
    marginTop: 12,
    gap: 4,
  },
});
