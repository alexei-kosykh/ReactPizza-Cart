import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { Categories, PizzaBlock } from "../components";
import { setPizzas } from "../redux/actions/pizzas";

export const Home = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(({ pizzas }) => {
    return {
      items: pizzas.items,
    };
  });
  useEffect(() => {
    axios
      .get("http://localhost:3000/db.json")
      .then(({ data }) => dispatch(setPizzas(data.pizzas)));
  }, []);
  return (
    <div className="container">
      <Categories />
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};
