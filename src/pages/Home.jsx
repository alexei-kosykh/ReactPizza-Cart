import { useSelector } from "react-redux";

import { Categories, PizzaBlock } from "../components";

export const Home = () => {
  const { items } = useSelector(({ pizzas }) => {
    return {
      items: pizzas.items,
    };
  });

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
