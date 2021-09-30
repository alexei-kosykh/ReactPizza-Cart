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
    setActiveLabel(items[index].name);
    setVisiblePopup(false);
  };

  return (
    visiblePopup && (
      <div className="sort__popup">
        <ul>
          {items &&
            items.map((obj, key) => (
              <li
                className={activeItem === key ? "active" : ""}
                onClick={() => onSelectItem(key)}
                key={`${obj.type}_${key}`}
              >
                {obj.name}
              </li>
            ))}
        </ul>
      </div>
    )
  );
};
