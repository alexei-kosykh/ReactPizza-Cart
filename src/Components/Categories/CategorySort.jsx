import React, { useState, useEffect, useRef } from "react";

import { SortPopup } from "./SortPopup.jsx";
import { LabelSort } from "./LabelSort.jsx";

export const CategorySort = () => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [activeLabel, setActiveLabel] = useState("популярности");
  const sortRef = useRef();

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const outsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", outsideClick);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <LabelSort activeLabel={activeLabel} onClickPopup={toggleVisiblePopup} />
      <SortPopup
        items={["популярности", "цене", "алфавиту"]}
        visiblePopup={visiblePopup}
        setVisiblePopup={setVisiblePopup}
        setActiveLabel={setActiveLabel}
      />
    </div>
  );
};
