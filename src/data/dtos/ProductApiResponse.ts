export type ProductApiResponse = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  category: string;
  thumbnail: string;
  stock: number;
};

export type CategoryApiResponse = {
  name: string;
  slug: string;
  url: string;
};
