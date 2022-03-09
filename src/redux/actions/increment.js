import { INCREMENT } from "../constants";

export const increment = (itemId, number) => {
  return {
    type: INCREMENT,
    payload: {
      id: itemId,
      number: 1,
    },
  };
};
