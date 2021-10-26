import { memo } from "react";

export const CategoryFilter = memo(
  ({ items, onClickCategory, activeCategory }) => {
    return (
      <div className="categories">
        <ul>
          <li
            className={activeCategory === null ? "active" : ""}
            onClick={() => onClickCategory(null)}
          >
            Все
          </li>
          {items &&
            items.map((item, key) => (
              <li
                className={activeCategory === key ? "active" : ""}
                onClick={() => onClickCategory(key)}
                key={`${item}_${key}`}
              >
                {item}
                {console.log(key)}
              </li>
            ))}
        </ul>
      </div>
    );
  }
);

CategoryFilter.defaultProps = { items: [], activeCategory: null };
