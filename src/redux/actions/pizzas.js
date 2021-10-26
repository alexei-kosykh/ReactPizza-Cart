import axios from "axios";

import { arrCategoryFilter } from "../../Components/Categories/ItemsCategory";

export const setLoaded = (payload) => ({ type: "SET_LOADED", payload });

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  const [type, order] = sortBy.split("-");
  const categoryIndex =
    category === "Все" ? null : arrCategoryFilter.indexOf(category) - 1;
  axios
    .get(
      `/pizzas?${
        categoryIndex === null ? `` : `category=${categoryIndex}`
      }&_sort=${type}&_order=${order}`
    )
    .then(({ data }) => dispatch(setPizzas(data)));
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
