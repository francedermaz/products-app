import { useEffect, useState } from "react";
import { ProductRepositoryImpl } from "../../../../data/repositories/ProductRepositoryImpl";

export function useCategories() {
  const [categories, setCategories] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    ProductRepositoryImpl.getCategories()
      .then(setCategories)
      .catch(console.error);
  }, []);

  const handleSelect = (cat: string | null) => {
    setSelected((prev) => (prev === cat ? null : cat));
  };

  console.log(categories);

  return { categories, selected, handleSelect };
}
