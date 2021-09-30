import { combineReducers } from "redux";
import { filters } from "./filters";
import { pizzas } from "./pizzas";

export const rootReducer = combineReducers({
  filters: filters,
  pizzas: pizzas,
  // if without names properties then will filtersReducer as default name
});
