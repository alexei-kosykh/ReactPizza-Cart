const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART": {
      const newItems = {
        ...state.items,
        [action.payload.id]: state.items[action.payload.id]
          ? [...state.items[action.payload.id], action.payload]
          : [action.payload],
      };

      return {
        ...state,
        items: newItems,
        totalCount: [].concat.apply([], Object.values(newItems)).length,
      };
    }
    // case "SET_TOTAL_PRICE":
    //   return { ...state, totalPrice: action.payload };
    // case "SET_TOTAL_COUNT":
    //   return { ...state, totalCount: action.payload };

    default:
      return state;
  }
};
