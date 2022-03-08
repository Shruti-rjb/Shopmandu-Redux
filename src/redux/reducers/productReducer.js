import { PRODUCT_LIST_FETCHING, PRODUCT_LIST_SUCCESS, ADD_TO_CART ,DELETE_FROM_CART, INCREMENT,DECREMENT} from "../constants";

const initialState = {
  productLists: [],
  isLoading: false,
  cart : [],
  count : 0
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
        const item = state.productLists.find((product)=> product.id === action.payload.id)
      //  console.log(item,"data")
      return {
        ...state,
        cart: [...state.cart,{...item, qty: action.payload.qty}]
      };
      // const item = state.cart.find(
      //   (product) => product.id === action.payload.id
      // );
      // const cartProduct = state.productLists.filter(
      //   (product) => product.id === action.payload.id
      // );
      // return {
      //   ...state,
      //   cart: item
      //     ? state.cart.map((cartItem) => 
      //     cartItem.id === action.payload.id
      //       ? {
      //           ...cartItem,
      //           qty: cartItem.qty + action.payload.qty
      //         }
      //       : cartItem
      //     )
      //     : [...state.cart, { ...cartProduct, qty: action.payload.qty }],
      // };
     
      case DELETE_FROM_CART:
     
      return {
        ...state,
        cart: state.cart.filter((item)=> item.id!==action.payload.id)
      };

    default:
      return state;
  }
};

export default productReducer;
