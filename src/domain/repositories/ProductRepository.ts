import { Product } from "../models/Product";

export interface ProductRepository {
  getAll(): Promise<Product[]>;
  getByCategory(category: string): Promise<Product[]>;
  getCategories(): Promise<string[]>;
  getById(id: number): Promise<Product>;
}
