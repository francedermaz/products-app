import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    backgroundColor: colors.gray50,
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
    color: colors.textPrimary,
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
