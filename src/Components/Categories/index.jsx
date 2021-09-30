import React from "react";

import { CategoryFilter } from "./CategoryFilter";
import { CategorySort } from "./CategorySort";

export const Categories = () => {
  const arrCategoryFilter = [
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const arrCategorySort = [
    { name: "популярности", type: "popular" },
    { name: "цене", type: "price" },
    { name: "алфавиту", type: "alphabet" },
  ];
  return (
    <div className="content__top">
      <CategoryFilter items={arrCategoryFilter} />
      <CategorySort items={arrCategorySort} />
    </div>
  );
};
