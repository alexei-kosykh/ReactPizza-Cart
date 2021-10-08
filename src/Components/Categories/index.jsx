import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { CategoryFilter } from "./CategoryFilter";
import { CategorySort } from "./CategorySort";
import { setCategory, setSortBy } from "../../redux/actions/filters";

import { arrCategoryFilter, arrCategorySort } from "./ItemsCategory";

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
