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
        cart: [...state.cart,item]
      };


      case INCREMENT:
        //const countiItem = state.productLists.find((product)=> product.id === action.payload.id)
       // console.log(countiItem,"hekjjo")
       return {
          ...state,
          count : state.count + action.payload.number
        
          
       }
     

      case DECREMENT:
        
      return {
        ...state,
        count : state.count - action.payload.number
      
        
      };


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
