import { CartActionTypes } from './cartTypes';
import { addItem, increaseItem, decreaseItem } from './cartUtils';

const INITIAL_STATE = {
  cartItems: [],
  itemAddedToCart: false,
  cartSubTotalAmount: 0,
  cartTotalAmount: 0,
  discount: 3.9
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.SET_ITEM_ADDED_TO_CART:
        return {
            ...state,
            itemAddedToCart: action.payload
        }
    case CartActionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payload)
      };
    case CartActionTypes.DECREASE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: decreaseItem(state.cartItems, action.payload)
      };
    case CartActionTypes.INCREASE_ITEM_IN_CART:
      return {
        ...state,
        cartItems: increaseItem(state.cartItems, action.payload)
      };  
    case CartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.productID !== action.payload
        )
      };
    case CartActionTypes.CALCULATE_CART_SUBTOTAL_AMOUNT:
      return {
        ...state,
        cartSubTotalAmount: state.cartItems.reduce(
            (accumalatedQuantity, cartItem) =>
              accumalatedQuantity + cartItem.numberOfItemInCart * cartItem.sellingPrice,
            0
          )
      };
    case CartActionTypes.CALCULATE_CART_TOTAL_AMOUNT:
      return {
        ...state,
        cartTotalAmount: state.cartItems.reduce(
            (accumalatedQuantity, cartItem) =>
              (accumalatedQuantity + cartItem.numberOfItemInCart * cartItem.sellingPrice) - state.discount ,
            0
          )
      };        
    default:
      return state;
  }
};

export default cartReducer;