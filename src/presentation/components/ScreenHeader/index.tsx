import React, { useCallback } from "react";
import { View, Text, TouchableOpacity, ViewStyle } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";

type ScreenHeaderProps = {
  title: string;
  right?: React.ReactNode;
  style?: ViewStyle;
  children?: React.ReactNode;
  showBack?: boolean;
};

export const ScreenHeader = ({
  title,
  right,
  style,
  children,
  showBack = false,
}: ScreenHeaderProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleBack = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate("Home");
    }
  }, [navigation]);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.row}>
        {showBack && (
          <TouchableOpacity onPress={handleBack}>
            <Feather name="arrow-left" size={24} color="#333" />
          </TouchableOpacity>
        )}

        <View
          style={showBack ? styles.titleCenterWrapper : styles.titleLeftWrapper}
        >
          <Text
            style={[
              styles.title,
              showBack ? styles.titleCentered : styles.titleLeft,
            ]}
          >
            {title}
          </Text>
        </View>

        <View>{right}</View>
      </View>

      {children}
    </View>
  );
};
