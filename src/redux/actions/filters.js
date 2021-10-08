export const setSortBy = (keyType) => ({
  type: "SET_SORT_BY",
  payload: keyType,
});

export const setCategory = (index) => ({
  type: "SET_CATEGORY",
  payload: index,
});
