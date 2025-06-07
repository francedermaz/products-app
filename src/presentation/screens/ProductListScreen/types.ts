import { Product } from "../../../domain/models/Product";
import { SortOption } from "../../../domain/models/SortOption";
import { ProductListScreenNavigationProp } from "../../navigation/types";

export type ProductListScreenProps = {
  navigation: ProductListScreenNavigationProp;
};

export type FilterBottomSheetProps = {
  selectedOption: SortOption;
  onChange: (opt: SortOption) => void;
};

export type ProductCardProps = {
  product: Product;
  onPress: () => void;
};
