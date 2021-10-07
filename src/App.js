import { useEffect } from "react";
import { Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { useDispatch } from "react-redux";
import { fetchPizzas } from "./redux/actions/pizzas";

import "./scss/app.scss";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(dispatch(fetchPizzas()));
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
