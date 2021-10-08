export const arrCategoryFilter = [
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Острые",
  "Закрытые",
];
export const arrCategorySort = [
  {
    name: "популярности ⬇",
    type: "rating",
    keyType: "rating-desc",
    order: "desc",
  },
  {
    name: "популярности ⬆",
    type: "rating",
    keyType: "rating-asc",
    order: "asc",
  },
  {
    name: "цене ⬇",
    type: "price",
    keyType: "price-desc",
    order: "desc",
  },
  { name: "цене ⬆", type: "price", keyType: "price-asc", order: "asc" },
  {
    name: "алфавиту (А-Я)",
    keyType: "alphabet-asc",
    type: "name",
    order: "asc",
  },
  {
    name: "алфавиту (Я-А)",
    keyType: "alphabet-desc",
    type: "name",
    order: "desc",
  },
];
