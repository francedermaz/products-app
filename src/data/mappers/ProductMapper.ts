import { Product } from "../../domain/models/Product";

export const mapApiToProduct = (api: any): Product => ({
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
