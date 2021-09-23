import React, { useState } from "react";

export const SortPopup = ({
  items,
  visiblePopup,
  setVisiblePopup,
  setActiveLabel,
}) => {
  const [activeItem, setActiveItem] = useState(0);

  const onSelectItem = (index) => {
    setActiveItem(index);
    setActiveLabel(items[index]);
    setVisiblePopup(false);
  };

  return (
    visiblePopup && (
      <div className="sort__popup">
        <ul>
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
    )
  );
};
