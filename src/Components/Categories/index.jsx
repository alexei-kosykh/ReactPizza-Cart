import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { CategoryFilter } from "./CategoryFilter";
import { CategorySort } from "./CategorySort";
import { setCategory } from "../../redux/actions/filters";

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

export const Categories = () => {
  const dispatch = useDispatch();

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="content__top">
      <CategoryFilter
        onClickItem={onSelectCategory}
        items={arrCategoryFilter}
      />
      <CategorySort items={arrCategorySort} />
    </div>
  );
};
