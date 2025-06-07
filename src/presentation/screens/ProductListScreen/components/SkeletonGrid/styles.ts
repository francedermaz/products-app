import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
export const CARD_WIDTH = (width - 48) / 2;

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    padding: 16,
    justifyContent: "space-between",
  },
  card: {
    marginBottom: 16,
    position: "relative",
  },
  texts: {
    marginTop: 12,
    gap: 4,
  },
});
