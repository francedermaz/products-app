import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
export const CARD_WIDTH = (width - 48) / 2; // 16px padding left + right + 16px gap

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
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
  },
  texts: {
    marginTop: 12,
    gap: 4,
  },
});
