import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: { slug?: string };
  ProductDetail: { id: number };
};

export type ProductListScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

export type ProductDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "ProductDetail"
>;
