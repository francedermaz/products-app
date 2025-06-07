import { RouteProp } from "@react-navigation/native";
import {
  ProductDetailScreenNavigationProp,
  RootStackParamList,
} from "../../navigation/types";

export type DetailRouteProp = RouteProp<RootStackParamList, "ProductDetail">;

export type ProductDetailScreenProps = {
  navigation: ProductDetailScreenNavigationProp;
};
