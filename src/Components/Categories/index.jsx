import React from "react";

import { CategoryFilter } from "./CategoryFilter";
import { CategorySort } from "./CategorySort";

export const Categories = () => {
  return (
    <div className="content__top">
      <CategoryFilter
        items={["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"]}
      />
      <CategorySort />
    </div>
  );
};
