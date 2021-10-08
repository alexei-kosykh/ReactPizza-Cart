const initialState = {
  category: null,
  sortBy: { keyType: "rating-desc", type: "rating", order: "desc" },
};

export const filters = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SORT_BY":
      return {
        ...state,
        sortBy: {
          keyType: action.keyType,
          type: action.name,
          order: action.order,
        },
      };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };

    default:
      return state;
  }
};
