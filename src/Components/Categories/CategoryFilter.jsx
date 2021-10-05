import { useState, memo } from "react";

export const CategoryFilter = memo(({ items, onClickItem }) => {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => setActiveItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((item, key) => (
            <li
              className={activeItem === key ? "active" : ""}
              onClick={() => onSelectItem(key)}
              key={`${item}_${key}`}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});
