const initialState = {
  category: null,
  sortBy: { keyType: "rating-desc" },
};

export const filters = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SORT_BY":
      return {
        ...state,
        sortBy: {
          keyType: action.payload,
        },
      };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };

    default:
      return state;
  }
};
