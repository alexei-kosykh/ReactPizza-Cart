import { ButtonCart } from "./ButtonCart";
import { HeaderLogo } from "./HeaderLogo";

import logoSvg from "../../assets/img/logo-pizza.png";

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <HeaderLogo
          logoSvg={logoSvg}
          title="Pizza-Pizza"
          subTitle="лучше один раз попробовать"
        />
        <ButtonCart />
      </div>
    </div>
  );
};
