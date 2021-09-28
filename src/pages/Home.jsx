import { useEffect, useState } from "react";
import { Categories, PizzaBlock } from "../components";

export const Home = () => {
  const [pizzaItems, setPizzaItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then((resp) => resp.json())
      .then((json) => {
        setPizzaItems(json.pizzas);
        console.log(json.pizzas);
      });
  }, []);
  return (
    <div className="container">
      <Categories />
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzaItems.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
};
