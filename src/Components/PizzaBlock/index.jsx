import { useState } from "react";
import classNames from "classnames";
import ContentLoader from "react-content-loader";

export const PizzaBlock = ({ name, imageUrl, price, types, sizes }) => {
  const arrTypes = ["тонкое", "традиционное"];
  const arrSizes = [26, 30, 40];
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);

  const onSelectType = (index) => {
    setActiveType(index);
  };
  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  // return (
  //   <div className="pizza-block">
  //     <ContentLoader
  //       speed={2}
  //       width={280}
  //       height={460}
  //       viewBox="0 0 280 460"
  //       backgroundColor="#f3f3f3"
  //       foregroundColor="#ecebeb"
  //     >
  //       <circle cx="140" cy="120" r="120" />
  //       <rect x="0" y="255" rx="6" ry="6" width="280" height="39" />
  //       <rect x="0" y="310" rx="6" ry="6" width="280" height="84" />
  //       <rect x="0" y="412" rx="6" ry="6" width="95" height="35" />
  //       <rect x="146" y="407" rx="24" ry="24" width="133" height="46" />
  //     </ContentLoader>
  //   </div>
  // );

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
        <div className="pizza-block__price">от {price} Р</div>
        <div className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
};

PizzaBlock.defaultProps = {
  name: "-Безымянная-",
  imageUrl:
    "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",
  sizes: [],
  price: 0,
  types: [],
};
