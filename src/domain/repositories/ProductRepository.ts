import { Product, Category } from "../models/Product";

export interface ProductRepository {
  getAll(): Promise<Product[]>;
  getByCategory(category: string): Promise<Product[]>;
  getCategories(): Promise<Category[]>;
  getById(id: number): Promise<Product>;
}
