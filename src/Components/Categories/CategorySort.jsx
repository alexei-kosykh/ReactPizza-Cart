import React, { useState, useEffect } from "react";

import { SortPopup } from "./SortPopup.jsx";
import { LabelSort } from "./LabelSort.jsx";

export const CategorySort = () => {
  const [visiblePopup, setVisiblePopup] = useState(false);

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const outsideClick = (e) => {
    console.log(e);
  };

  useEffect(() => {
    document.body.addEventListener("click", outsideClick);
  }, []);

  return (
    <div className="sort">
      <LabelSort onClickPopup={toggleVisiblePopup} />
      <SortPopup visiblePopup={visiblePopup} />
    </div>
  );
};
