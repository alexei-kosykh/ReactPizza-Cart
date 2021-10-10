import { combineReducers } from "redux";
import { filters } from "./filters";
import { pizzas } from "./pizzas";
import { cart } from "./cart";

export const rootReducer = combineReducers({
  filters: filters,
  pizzas: pizzas,
  cart: cart,
  // if without names properties then will filtersReducer as default name
});
