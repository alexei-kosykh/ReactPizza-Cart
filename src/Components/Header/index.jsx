import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../";

import logoSvg from "../../assets/img/logo-pizza.png";
import { delimyterSvg } from "../../assets/img/svgImages";

export const Header = () => {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logoSvg} alt="Pizza logo" />
            <div>
              <h1>Pizza-Pizza</h1>
              <p>лучше один раз попробовать</p>
            </div>
          </div>
        </Link>
        <Link to="/cart">
          <Button className={"button--cart"}>
            <span>{totalPrice} р</span>
            <div className="button__delimyter"></div>
            {delimyterSvg}
            <span>{totalCount}</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};
