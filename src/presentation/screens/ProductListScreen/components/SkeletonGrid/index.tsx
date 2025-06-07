import React from "react";
import { View } from "react-native";
import Skeleton from "../../../../components/Skeleton";
import { styles, CARD_WIDTH } from "./styles";

export default function SkeletonGrid() {
  return (
    <View style={styles.container}>
      {[...Array(6)].map((_, i) => (
        <View key={i} style={[styles.card, { width: CARD_WIDTH }]}>
          <Skeleton width="100%" height={120} borderRadius={8} />
          <View style={styles.texts}>
            <Skeleton width="80%" height={14} />
            <Skeleton width="40%" height={12} style={{ marginTop: 8 }} />
          </View>
        </View>
      ))}
    </View>
  );
}
