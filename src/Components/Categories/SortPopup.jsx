export const SortPopup = ({
  items,
  visiblePopup,
  setVisiblePopup,
  setActiveLabel,
  activeSort,
  onClickSortBy,
}) => {
  const onSelectItem = (type) => {
    onClickSortBy(type);
    setActiveLabel(items.find((obj) => obj.type === type).name);
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
                onClick={() => onSelectItem(obj.type)}
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
