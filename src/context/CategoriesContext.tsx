import React, { createContext, useContext, useEffect, useState } from "react";
import { Category } from "../domain/models/Product";
import { ProductRepositoryImpl } from "../data/repositories/ProductRepositoryImpl";

type CategoriesContextType = {
  categories: Category[];
  selected: string | null;
  handleSelect: (cat: Category | null) => void;
};

const CategoriesContext = createContext<CategoriesContextType | undefined>(undefined);

export const CategoriesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    ProductRepositoryImpl.getCategories().then(setCategories).catch(console.error);
  }, []);

  const handleSelect = (cat: Category | null) => {
    setSelected((prev) => (prev === cat?.slug ? null : cat?.slug ?? null));
  };

  return (
    <CategoriesContext.Provider value={{ categories, selected, handleSelect }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategoriesContext = () => {
  const context = useContext(CategoriesContext);
  if (!context) throw new Error("useCategoriesContext must be used within a CategoriesProvider");
  return context;
};
