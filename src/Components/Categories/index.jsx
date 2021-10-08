import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { CategoryFilter } from "./CategoryFilter";
import { CategorySort } from "./CategorySort";
import { setCategory, setSortBy } from "../../redux/actions/filters";

const arrCategoryFilter = [
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Острые",
  "Закрытые",
];
const arrCategorySort = [
  {
    name: "популярности вниз",
    type: "rating",
    keyType: "rathing-desc",
    order: "desc",
  },
  {
    name: "популярности вверх",
    type: "rating",
    keyType: "rathing-asc",
    order: "asc",
  },
  {
    name: "цене вниз",
    type: "price",
    keyType: "price-desc",
    order: "desc",
  },
  { name: "цене вверх", type: "price", keyType: "price-asc", order: "asc" },
  {
    name: "алфавиту (А-Я)",
    keyType: "alphabet-asc",
    type: "name",
    order: "asc",
  },
  {
    name: "алфавиту (Я-А)",
    keyType: "alphabet-desc",
    type: "name",
    order: "desc",
  },
];

export const Categories = ({ category, sortBy }) => {
  const dispatch = useDispatch();

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = useCallback((keyType, type, order) => {
    dispatch(setSortBy(keyType, type, order));
  }, []);

  return (
    <div className="content__top">
      <CategoryFilter
        activeCategory={category}
        onClickCategory={onSelectCategory}
        items={arrCategoryFilter}
      />
      <CategorySort
        items={arrCategorySort}
        activeSort={sortBy}
        onClickSort={onSelectSortType}
      />
    </div>
  );
};
