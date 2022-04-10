import { useProduct } from "../service/product_api";
import { catList } from "./categoryreducer";

export function priceReducer(state, action) {
  switch (action.type) {
    case "SORT_PRICE":
      return { ...state, sortBy: action.payload };
    case "SORT_CATEGORY":
      return { ...state, categorizeByCategory: action.payload };
  }
}

export function itemList(sortBy, data) {
  switch (sortBy) {
    case "HIGH_TO_LOW":
      return [...data].sort((a, b) => a["price"] - b["price"]);
    case "LOW_TO_HIGH":
      return [...data].sort((a, b) => b["price"] - a["price"]);
    default:
      return [data];
  }
}
export function categoryList(categorizeByCategory, data) {
  switch (categorizeByCategory) {
    case "men":
      return [...data].filter(
        (currDataCategory) => currDataCategory.categoryName === "men"
      );
    case "women":
      return [...data].filter(
        (currDataCategory) => currDataCategory.categoryName === "women"
      );
    case "kids":
      return [...data].filter(
        (currDataCategory) => currDataCategory.categoryName === "kids"
      );
    case "miscellaneous":
      return [...data].filter(
        (currDataCategory) => currDataCategory.categoryName === "miscellaneous"
      );
    default:
      return [data];
  }
}
