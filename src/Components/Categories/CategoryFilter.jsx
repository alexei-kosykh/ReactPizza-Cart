import { memo } from "react";

export const CategoryFilter = memo(
  ({ items, onClickCategory, setCategory }) => {
    return (
      <div className="categories">
        <ul>
          {items &&
            items.map((item, key) => (
              <li
                className={setCategory === item ? "active" : ""}
                onClick={() => onClickCategory(item)}
                key={`${item}_${key}`}
              >
                {item}
              </li>
            ))}
        </ul>
      </div>
    );
  }
);

CategoryFilter.defaultProps = { items: [], activeCategory: null };
