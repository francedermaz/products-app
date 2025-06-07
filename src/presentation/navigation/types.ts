import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  ProductDetail: { id: number };
};

export type ProductListScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export type ProductDetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ProductDetail"
>;
