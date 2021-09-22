import React from "react";

import { SortPopup } from "./SortPopup.jsx";
import { LabelSort } from "./LabelSort.jsx";

export const CategorySort = () => {
  return (
    <div className="sort">
      <LabelSort />
      <SortPopup />
    </div>
  );
};
