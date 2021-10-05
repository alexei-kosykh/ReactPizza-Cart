import { useState, useEffect, useRef, memo } from "react";

import { SortPopup } from "./SortPopup.jsx";
import { LabelSort } from "./LabelSort.jsx";

export const CategorySort = memo(({ items }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [activeLabel, setActiveLabel] = useState(items[0].name);
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
      <LabelSort
        visiblePopup={visiblePopup}
        activeLabel={activeLabel}
        onClickPopup={toggleVisiblePopup}
      />
      <SortPopup
        items={items}
        visiblePopup={visiblePopup}
        setVisiblePopup={setVisiblePopup}
        setActiveLabel={setActiveLabel}
      />
    </div>
  );
});
