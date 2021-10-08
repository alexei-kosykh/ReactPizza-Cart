export const setSortBy = (keyType, type, order) => ({
  type: "SET_SORT_BY",
  keyType: keyType,
  name: type,
  order: order,
});

export const setCategory = (index) => ({
  type: "SET_CATEGORY",
  payload: index,
});
