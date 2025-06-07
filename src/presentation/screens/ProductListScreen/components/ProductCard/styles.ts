import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  info: {
    marginLeft: 12,
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
    color: "#333",
  },
  price: {
    fontSize: 14,
    color: "#777",
  },
});
