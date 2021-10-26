const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arrItems) =>
  +arrItems.reduce((sum, obj) => obj.price + sum, 0).toFixed(2);

const getTotalCount = (arrItems) => arrItems.length;

const getAllSumByCount = (arr) => {
  return Object.keys(arr).reduce((sum, key) => arr[key].items.length + sum, 0);
};
const getAllSumByPrice = (arr) => {
  return +Object.keys(arr)
    .reduce((sum, key) => arr[key].totalPriceByType + sum, 0)
    .toFixed(2);
};

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

      const totalCount = getAllSumByCount(newItems);
      const totalPrice = getAllSumByPrice(newItems);

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case "CLEAR_ALL_CART": {
      return { items: {}, totalCount: 0, totalPrice: 0 };
    }

    case "PLUS_CART_ITEM": {
      const newItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const allItems = {
        ...state.items,
        [action.payload]: {
          items: newItems,
          totalPriceByType: getTotalPrice(newItems),
          totalCountByType: getTotalCount(newItems),
        },
      };

      const totalCount = getAllSumByCount(allItems);
      const totalPrice = getAllSumByPrice(allItems);

      return {
        ...state,
        items: allItems,
        totalCount,
        totalPrice,
      };
    }

    case "MINUS_CART_ITEM": {
      const oldItems = state.items[action.payload].items;
      const newItems = oldItems.length > 1 ? oldItems.slice(1) : oldItems;
      const allItems = {
        ...state.items,
        [action.payload]: {
          items: newItems,
          totalPriceByType: getTotalPrice(newItems),
          totalCountByType: getTotalCount(newItems),
        },
      };

      const totalCount = getAllSumByCount(allItems);
      const totalPrice = getAllSumByPrice(allItems);

      return {
        ...state,
        items: allItems,
        totalCount,
        totalPrice,
      };
    }

    case "REMOVE_CART_ITEM": {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].totalPriceByType;
      const currentTotalCount = newItems[action.payload].totalCountByType;

      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - +currentTotalPrice.toFixed(2),
        totalCount: state.totalCount - +currentTotalCount.toFixed(2),
      };
    }

    default:
      return state;
  }
};
