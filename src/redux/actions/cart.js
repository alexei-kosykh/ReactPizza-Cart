export const addPizzaToCart = (pizzaObj) => ({
  type: "ADD_PIZZA_CART",
  payload: pizzaObj,
});

export const clearAllCart = () => ({
  type: "CLEAR_ALL_CART",
});
