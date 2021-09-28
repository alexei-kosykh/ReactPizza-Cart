import { useEffect, useState } from "react";
import axios from "axios";

import { Categories, PizzaBlock } from "../components";

export const Home = () => {
  const [pizzaItems, setPizzaItems] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/db.json")
      .then(({ data }) => setPizzaItems(data.pizzas));
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
