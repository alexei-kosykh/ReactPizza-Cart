import { useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { useDispatch } from "react-redux";
import { setPizzas } from "./redux/actions/pizzas";

import "./scss/app.scss";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:3000/db.json")
      .then(({ data }) => dispatch(setPizzas(data.pizzas)));
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
