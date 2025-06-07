import { useEffect, useState } from "react";
import { ProductRepositoryImpl } from "../../../../data/repositories/ProductRepositoryImpl";
import { Category } from "../../../../domain/models/Product";

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    ProductRepositoryImpl.getCategories()
      .then(setCategories)
      .catch(console.error);
  }, []);

  const handleSelect = (cat: Category | null) => {
    setSelected((prev) => (prev === cat?.slug ? null : cat?.slug ?? null));
  };

  return { categories, selected, handleSelect };
};
