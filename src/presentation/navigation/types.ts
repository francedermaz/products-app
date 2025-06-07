import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: { slug?: string } | undefined;
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
