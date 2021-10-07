import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchPizzas } from "../redux/actions/pizzas";
import { Categories, PizzaBlock } from "../components";

export const Home = () => {
  const dispatch = useDispatch();

  const { items } = useSelector(({ pizzas }) => {
    return {
      items: pizzas.items,
    };
  });

  useEffect(() => {
    dispatch(fetchPizzas());
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
