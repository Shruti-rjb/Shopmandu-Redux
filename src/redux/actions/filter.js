import { FILTER_PRODUCTS } from "../constants";

export const filterItems = ( minPrice, maxPrice, category) => {
  
  return {
    type: FILTER_PRODUCTS,
    payload: {
      minPrice,
      maxPrice,
      category,
    },
  };
};