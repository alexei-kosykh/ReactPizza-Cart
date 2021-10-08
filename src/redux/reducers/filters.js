const initialState = {
  category: null,
  sortBy: { type: "rating", order: "desc" },
};

export const filters = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SORT_BY":
      return { ...state, sortBy: { type: action.payload } };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };

    default:
      return state;
  }
};
