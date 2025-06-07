import React from "react";
import { FlatList, View } from "react-native";
import Skeleton from "../../../../components/Skeleton";
import { styles } from "./styles";

const data = Array.from({ length: 6 });

export default function SkeletonGrid() {
  return (
    <FlatList
      data={data}
      keyExtractor={(_, index) => index.toString()}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      scrollEnabled={false}
      renderItem={() => (
        <View style={styles.card}>
          <Skeleton width="100%" height={120} borderRadius={12} />
          <View style={styles.texts}>
            <Skeleton width="80%" height={14} />
            <Skeleton width="40%" height={12} style={{ marginTop: 8 }} />
          </View>
        </View>
      )}
    />
  );
}
