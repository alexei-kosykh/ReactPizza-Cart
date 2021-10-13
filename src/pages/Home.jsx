import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";
import { Categories, PizzaBlock, PizzaLoadingBlock } from "../components";

export const Home = () => {
  const dispatch = useDispatch();

  const { items } = useSelector(({ pizzas }) => {
    return {
      items: pizzas.items,
    };
  });

  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy, dispatch]);

  const addToCart = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  return (
    <div className="container">
      <Categories category={category} sortBy={sortBy} />
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock onClickAddPizza={addToCart} key={obj.id} {...obj} />
            ))
          : Array(12)
              .fill()
              .map((x, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
};
