import { Product } from "../../domain/models/Product";
import { ProductApiResponse } from "../dtos/ProductApiResponse";

export const mapApiToProduct = (api: ProductApiResponse): Product => ({
  id: api.id,
  title: api.title,
  description: api.description,
  price: api.price,
  rating: api.rating,
  brand: api.brand,
  category: api.category,
  thumbnail: api.thumbnail,
  stock: api.stock,
});
