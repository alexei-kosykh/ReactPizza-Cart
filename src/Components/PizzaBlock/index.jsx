import { useState } from "react";
import classNames from "classnames";

import { Button } from "../Button";
import { plusSvg } from "../../assets/img/svgImages";

const arrTypes = ["тонкое", "традиционное"];
const arrSizes = [26, 30, 40];

export const PizzaBlock = ({
  id,
  name,
  imageUrl,
  price,
  types,
  sizes,
  onClickAddPizza,
  itemsCount,
}) => {
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(arrSizes.indexOf(sizes[0]));

  const onSelectType = (index) => {
    setActiveType(index);
  };
  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  const onAddPizza = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      size: arrSizes[activeSize],
      type: arrTypes[activeType],
    };
    onClickAddPizza(obj);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {arrTypes.map((type, index) => (
            <li
              key={index}
              onClick={() => onSelectType(index)}
              className={classNames({
                active: activeType === index,
                disabled: !types.includes(index),
              })}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {arrSizes.map((size, key) => (
            <li
              key={key}
              onClick={() => onSelectSize(key)}
              className={classNames({
                active: activeSize === key,
                disabled: !sizes.includes(size),
              })}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} р.</div>
        <Button onClick={onAddPizza} className="button--add" outline>
          {plusSvg}
          <span>Добавить</span>
          {itemsCount && <i>{itemsCount}</i>}
        </Button>
      </div>
    </div>
  );
};

PizzaBlock.defaultProps = {
  name: "-Безымянная-",
  imageUrl:
    "https://images.dominos.by/media/dominos/osg/api/2021/10/14/izi_frizi_small.png",
  sizes: [],
  price: 0,
  types: [],
};
