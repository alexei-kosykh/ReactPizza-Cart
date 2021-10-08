export const SortPopup = ({
  items,
  visiblePopup,
  setVisiblePopup,
  setActiveLabel,
  activeSort,
  onClickSortBy,
}) => {
  const onSelectItem = (obj) => {
    onClickSortBy(obj.type);
    setActiveLabel(items.find((item) => item.type === obj.type).name);
    setVisiblePopup(false);
  };

  return (
    visiblePopup && (
      <div className="sort__popup">
        <ul>
          {items &&
            items.map((obj, key) => (
              <li
                className={activeSort === obj.type ? "active" : ""}
                onClick={() => onSelectItem(obj)}
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
