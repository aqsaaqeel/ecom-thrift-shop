import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "men",
    description:
      "Men's clothing",
  },
  {
    _id: uuid(),
    categoryName: "women",
    description:
      "Women's clothing",
  },
  {
    _id: uuid(),
    categoryName: "kids",
    description:
      "Kid's clothing",
  },
  {
    _id: uuid(),
    categoryName: "miscellaneous",
    description:
      "Micellaneous clothing",
  },
];
