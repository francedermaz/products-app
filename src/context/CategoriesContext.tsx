import React, { createContext, useContext, useEffect, useState } from "react";
import { Category } from "../domain/models/Product";
import { ProductRepositoryImpl } from "../data/repositories/ProductRepositoryImpl";
import { showError } from "../utils/errors";
import { useTranslation } from "react-i18next";

type CategoriesContextType = {
  categories: Category[];
  selected: string | null;
  handleSelect: (cat: Category | null) => void;
  setSelected: (slug: string | null) => void;
};

const CategoriesContext = createContext<CategoriesContextType | undefined>(
  undefined
);

export const CategoriesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { t } = useTranslation();

  const [categories, setCategories] = useState<Category[]>([]);
  const [selected, _setSelected] = useState<string | null>(null);

  useEffect(() => {
    ProductRepositoryImpl.getCategories()
      .then(setCategories)
      .catch(() => showError(t("Categories.error")));
  }, []);

  const handleSelect = (cat: Category | null) => {
    _setSelected((prev) => (prev === cat?.slug ? null : cat?.slug ?? null));
  };

  const setSelected = (slug: string | null) => {
    _setSelected(slug);
  };

  return (
    <CategoriesContext.Provider
      value={{ categories, selected, handleSelect, setSelected }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategoriesContext = () => {
  const context = useContext(CategoriesContext);
  if (!context)
    throw new Error(
      "useCategoriesContext must be used within a CategoriesProvider"
    );
  return context;
};
