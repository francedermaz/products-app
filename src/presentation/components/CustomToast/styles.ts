import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: colors.toastBackground,
    borderLeftColor: colors.primaryRed,
    borderLeftWidth: 4,
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 10,
    shadowColor: colors.shadow,
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  texts: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primaryRed,
  },
  message: {
    fontSize: 14,
    color: colors.textMuted,
    marginTop: 2,
  },
});
