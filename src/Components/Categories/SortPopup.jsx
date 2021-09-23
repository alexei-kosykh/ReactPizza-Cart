import React from "react";

export const SortPopup = ({ visiblePopup }) => {
  return (
    visiblePopup && (
      <div className="sort__popup">
        <ul>
          <li className="active">популярности</li>
          <li>цене</li>
          <li>алфавиту</li>
        </ul>
      </div>
    )
  );
};
