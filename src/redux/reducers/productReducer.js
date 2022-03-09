import {
  PRODUCT_LIST_FETCHING,
  PRODUCT_LIST_SUCCESS,
  ADD_TO_CART,
  DELETE_FROM_CART,
  FILTER_PRODUCTS,
 
} from "../constants";

const initialState = {
  productLists: [],
  isLoading: false,
  cart: [],
  count: 0,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productLists: action.payload,
      };
    case ADD_TO_CART:
      const item = state.productLists.find(
        (product) => product.id === action.payload.id
      );
      //  console.log(item,"data")
      return {
        ...state,
        cart: [
          ...state.cart, 
          {
           ...item,
        qty: action.payload.qty }],
      };
    
    case DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

      case FILTER_PRODUCTS:
    //  console.log(state.productLists,"cbdhs")
      const searchedItems = state.productLists.filter
      ((item) => {
      console.log(parseInt(item.price.slice(1,item.price.length)) * 120,"price")
      console.log(action.payload.minPrice,"minprice")
      console.log(action.payload.maxPrice,"maxprice")
      console.log(action.payload.category,"category")
      console.log(item.category[1],"cat 1e")

        return (
       parseInt(item.price.slice(1,item.price.length)) * 120 >=
        action.payload.minPrice &&
        parseInt(item.price.slice(1,item.price.length)) * 120 <=
        action.payload.maxPrice &&
        item.category[1] === action.payload.category
    );
    
  });
 console.log(searchedItems,"sdfdgfdg")
  return {
    
    ...state,
    productLists : searchedItems,
  };


    default:
      return state;
  }


  
};

export default productReducer;
