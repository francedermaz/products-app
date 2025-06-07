import { ProductRepository } from "../../domain/repositories/ProductRepository";
import { mapApiToProduct } from "../mappers/ProductMapper";
import { ProductApi } from "../datasources/ProductApi";

export const ProductRepositoryImpl: ProductRepository = {
  getAll: async () => {
    const data = await ProductApi.getAll();
    return data.products.map(mapApiToProduct);
  },
  getByCategory: async (cat: string) => {
    const data = await ProductApi.getByCategory(cat);
    return data.products.map(mapApiToProduct);
  },
  getCategories: async () => ProductApi.getCategories(),
  getById: async (id: number) => mapApiToProduct(await ProductApi.getById(id)),
};
