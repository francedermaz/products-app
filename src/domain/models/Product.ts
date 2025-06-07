export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  category: string;
  thumbnail: string;
  stock: number;
}

export interface Category {
  name: string;
  slug: string;
}
