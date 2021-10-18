import { Button } from "../";

import {
  cartPlusSvg,
  cartMinusSvg,
  cartRemoveSvg,
} from "../../assets/img/svgImages";

export const CartItem = ({
  id,
  name,
  type,
  size,
  imageUrl,
  totalPrice,
  totalCount,
  onClickRemove,
  onClickPlus,
  onClickMinus,
}) => {
  const removeItem = () => {
    onClickRemove(id);
  };
  const plusItem = () => {
    onClickPlus(id);
  };
  const minusItem = () => {
    onClickMinus(id);
  };
  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
        <p>
          {type} тесто, {size} см.
        </p>
      </div>
      <div className="cart__item-count">
        <Button
          onClick={minusItem}
          className="button--circle cart__item-count-minus"
          outline
        >
          {cartPlusSvg}
        </Button>
        <b>{totalCount}</b>
        <Button
          onClick={plusItem}
          className="button--circle cart__item-count-plus"
          outline
        >
          {cartMinusSvg}
        </Button>
      </div>
      <div className="cart__item-price">
        <b>{totalPrice} р.</b>
      </div>
      <div className="cart__item-remove">
        <Button onClick={removeItem} className="button--circle" outline>
          {cartRemoveSvg}
        </Button>
      </div>
    </div>
  );
};
