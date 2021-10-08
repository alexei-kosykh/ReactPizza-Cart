import axios from "axios";

export const setLoaded = (payload) => ({ type: "SET_LOADED", payload });

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  const [type, order] = sortBy.keyType.split("-");
  axios
    .get(
      `http://localhost:3001/pizzas?${
        category === null ? `` : `category=${category}`
      }&_sort=${type}&_order=${order}`
    )
    .then(({ data }) => dispatch(setPizzas(data)));
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
