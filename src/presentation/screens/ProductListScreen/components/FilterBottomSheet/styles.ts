import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  contentContainer: {
    padding: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
    color: "#333",
  },
  option: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  selected: {
    fontWeight: "bold",
    color: "#007AFF",
  },
  label: {
    fontSize: 16,
    color: "#333",
  },
});
