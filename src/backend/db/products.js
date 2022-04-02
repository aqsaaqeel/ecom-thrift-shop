import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "green jacket",
    rating : "5",
    price: "5000",
    categoryName: "winter",
  },
  {
    _id: uuid(),
    name: "Black shirt",
    rating : "4",
    price: "3000",
    categoryName: "winter",
  },
  {
    _id: uuid(),
    name: "Yellow cap",
    rating : "4",
    price: "1000",
    categoryName: "summer",
  },
];
