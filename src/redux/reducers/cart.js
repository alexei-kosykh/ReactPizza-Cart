const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arrItems) =>
  arrItems.reduce((sum, obj) => obj.price + sum, 0);

const getTotalCount = (arrItems) => arrItems.length;

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART": {
      const currentItems = state.items[action.payload.id]
        ? [...state.items[action.payload.id].items, action.payload]
        : [action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentItems,
          totalPriceByType: getTotalPrice(currentItems),
          totalCountByType: getTotalCount(currentItems),
        },
      };

      const arrOfItems = Object.values(newItems).map((obj) => obj.items);

      const newArray = [].concat.apply([], arrOfItems);

      const totalPrice = getTotalPrice(newArray);
      const totalCount = getTotalCount(newArray);

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
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
