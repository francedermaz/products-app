import Constants from "expo-constants";

const BASE_URL = Constants.expoConfig?.extra?.apiUrl;

export const ProductApi = {
  getAll: () => fetch(`${BASE_URL}/products`).then((res) => res.json()),
  getByCategory: (cat: string) =>
    fetch(`${BASE_URL}/products/category/${cat}`).then((res) => res.json()),
  getCategories: () =>
    fetch(`${BASE_URL}/products/categories`).then((res) => res.json()),
  getById: (id: number) =>
    fetch(`${BASE_URL}/products/${id}`).then((res) => res.json()),
};
