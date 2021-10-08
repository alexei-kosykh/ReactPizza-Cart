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
  { name: "популярности", type: "rating" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "name" },
];

export const Categories = ({ category, sortBy }) => {
  const dispatch = useDispatch();

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
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
