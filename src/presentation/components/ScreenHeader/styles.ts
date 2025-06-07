import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    backgroundColor: "#f5f5f5",
    marginTop: 50,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontWeight: "bold",
    color: "#333",
  },
  titleLeft: {
    fontSize: 22,
  },
  titleCentered: {
    fontSize: 20,
    textAlign: "center",
  },
  titleCenterWrapper: {
    flex: 1,
    alignItems: "center",
  },
  titleLeftWrapper: {
    flex: 1,
    alignItems: "flex-start",
  },
});
