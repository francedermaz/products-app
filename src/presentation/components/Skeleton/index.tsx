import React, { useEffect, useRef } from "react";
import {
  Animated,
  StyleProp,
  ViewStyle,
  DimensionValue,
} from "react-native";
import { styles } from "./styles";

type Props = {
  width: DimensionValue;
  height: DimensionValue;
  borderRadius?: number;
  style?: StyleProp<ViewStyle>;
};

export default function Skeleton({
  width,
  height,
  borderRadius = 8,
  style,
}: Props) {
  const opacity = useRef(new Animated.Value(0.6)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.6,
          duration: 700,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [opacity]);

  return (
    <Animated.View
      style={[styles.skeleton, { width, height, borderRadius, opacity }, style]}
    />
  );
}
