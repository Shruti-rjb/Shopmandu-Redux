import { ADD_TO_CART , DELETE_FROM_CART} from "../constants";

export const addToCart = (itemId, count) => {
  return {
    type: ADD_TO_CART,
    payload : {
    id : itemId,
    qty: count
    }
  }
}


export const deleteCart = (itemId)=>{
  return{
    type : DELETE_FROM_CART,
    payload : {
      id: itemId
    }
    }
}


