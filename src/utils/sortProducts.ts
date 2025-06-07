import { Product } from "../domain/models/Product";
import { SortOption } from "../domain/models/SortOption";

export function sortProducts(products: Product[], sort: SortOption): Product[] {
  return [...products].sort((a, b) => {
    switch (sort) {
      case SortOption.PriceAsc:
        return a.price - b.price;
      case SortOption.PriceDesc:
        return b.price - a.price;
      case SortOption.RatingAsc:
        return a.rating - b.rating;
      case SortOption.RatingDesc:
        return b.rating - a.rating;
      default:
        return 0;
    }
  });
}
