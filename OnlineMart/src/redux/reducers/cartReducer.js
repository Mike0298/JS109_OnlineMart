import {
  CLEAR_CART,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FROM_CART,
} from "../types";

import { addItem, removeItem } from "../utils/cart.util";

const initialState = {
  cartItems: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case ADD_ITEM:
      console.log("Im in cartReducer");
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
}
