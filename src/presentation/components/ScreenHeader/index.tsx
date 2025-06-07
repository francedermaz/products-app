import React from "react";
import { View, Text, TouchableOpacity, ViewStyle } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
  right?: React.ReactNode;
  style?: ViewStyle;
  children?: React.ReactNode;
};

export default function ScreenHeader({ title, right, style, children }: Props) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.row}>
        <Text style={styles.title}>{title}</Text>
        {right && <View>{right}</View>}
      </View>
      {children}
    </View>
  );
}
