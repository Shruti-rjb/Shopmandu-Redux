import { DECREMENT } from "../constants";

export const decrement = (itemId, number) => {
  return {
    type: DECREMENT,
    payload: {
      id: itemId,
      number: 1,
    },
  };
};
