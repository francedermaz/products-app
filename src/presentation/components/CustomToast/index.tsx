import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { BaseToastProps } from "react-native-toast-message";
import { styles } from "./styles";
import { colors } from "../../../theme/colors";

export const toastConfig = {
  error: ({ text1, text2 }: BaseToastProps) => (
    <View style={styles.container}>
      <MaterialIcons name="error-outline" size={24} color={colors.primaryRed} />
      <View style={styles.texts}>
        <Text style={styles.title}>{text1}</Text>
        {text2 ? <Text style={styles.message}>{text2}</Text> : null}
      </View>
    </View>
  ),
};
