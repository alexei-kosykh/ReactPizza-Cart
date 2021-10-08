export const SortPopup = ({
  items,
  visiblePopup,
  setVisiblePopup,
  setActiveLabel,
  activeSort,
  onClickSortBy,
}) => {
  const onSelectItem = (obj) => {
    onClickSortBy(obj.keyType);
    setActiveLabel(items.find((item) => item.keyType === obj.keyType).name);
    setVisiblePopup(false);
  };

  return (
    visiblePopup && (
      <div className="sort__popup">
        <ul>
          {items &&
            items.map((obj, key) => (
              <li
                className={activeSort === obj.keyType ? "active" : ""}
                onClick={() => onSelectItem(obj)}
                key={`${obj.keyType}_${key}`}
              >
                {obj.name}
              </li>
            ))}
        </ul>
      </div>
    )
  );
};
