import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { CartItem, Button } from "../Components";
import {
  clearAllCart,
  removeCartItem,
  plusCartItem,
  minusCartItem,
} from "../redux/actions/cart";

import empryCartImg from "../assets/img/empty-cart.png";
import { cartSvg, urnSvg, arrowLeftSvg } from "../assets/img/svgImages";

export const Cart = () => {
  const dispatch = useDispatch();

  const { items, totalPrice, totalCount } = useSelector(({ cart }) => cart);

  const addedPizzas = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const onClearAllCart = () => {
    dispatch(clearAllCart());
  };

  const onRemoveItem = (id) => {
    dispatch(removeCartItem(id));
  };

  const onPlusItem = (id) => {
    dispatch(plusCartItem(id));
  };

  const onMinusItem = (id) => {
    dispatch(minusCartItem(id));
  };

  const onPayItem = () => {
    console.log("Оплатить: ", items);
    console.log("Общая стоимость: ", totalPrice);
    console.log("Количество: ", totalCount);
  };

  return (
    <div>
      <div className="container container--cart">
        {totalCount ? (
          <div className="cart">
            <div className="cart__top">
              <h2 className="content__title">
                {cartSvg}
                Корзина
              </h2>
              <div className="cart__clear">
                {urnSvg}
                <span onClick={onClearAllCart}>Очистить корзину</span>
              </div>
            </div>
            <div className="content__items">
              {addedPizzas.map((obj) => (
                <CartItem
                  id={obj.id}
                  key={obj.id}
                  name={obj.name}
                  type={obj.type}
                  size={obj.size}
                  imageUrl={obj.imageUrl}
                  totalPrice={items[obj.id].totalPriceByType}
                  totalCount={items[obj.id].totalCountByType}
                  onClickRemove={onRemoveItem}
                  onClickPlus={onPlusItem}
                  onClickMinus={onMinusItem}
                />
              ))}
            </div>
            <div className="cart__bottom">
              <div className="cart__bottom-details">
                <span>
                  Всего пицц: <b>{totalCount} шт.</b>
                </span>
                <span>
                  Сумма заказа: <b>{totalPrice} р.</b>
                </span>
              </div>
              <div className="cart__bottom-buttons">
                <Link
                  to="/"
                  className="button button--outline button--add go-back-btn"
                >
                  {arrowLeftSvg}
                  <span>Вернуться назад</span>
                </Link>
                <Button onClick={onPayItem} className="pay-btn">
                  <span>Оплатить сейчас</span>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="cart cart--empty">
            <h2>
              <i>😱</i> Ваша корзина пустая <i>😱</i>
            </h2>
            <p>
              Необходимо добавить хотя бы один товар 🙏
              <br />
              Для заказа пиццы, вам нужно перейди на главную страницу.
            </p>
            <img src={empryCartImg} alt="Empty cart" />
            <Link to="/" className="button button--black">
              <span>Вернуться назад</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
