import { useState } from "react";

export const CategoryFilter = ({ items }) => {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div className="categories">
      <ul>
        {items.map((item, key) => (
          <li
            className={activeItem === key ? "active" : ""}
            onClick={() => setActiveItem(key)}
            key={`${item}_${key}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
