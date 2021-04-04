import {
  CLEAR_CART,
  CLEAR_ITEM_FROM_CART,
  ADD_ITEM,
  REMOVE_ITEM,
} from "../types";

export const clearCart = () => (dispatch) => {
  dispatch({ type: CLEAR_CART });
};

export const clearItemFromCart = (item) => (dispatch) => {
  dispatch({
    type: CLEAR_ITEM_FROM_CART,
    payload: item,
  });
};

export const addItem = (item) => (dispatch) => {
  dispatch({
    type: ADD_ITEM,
    payload: item,
  });
};

export const removeItem = (item) => (dispatch) => {
  dispatch({
    type: REMOVE_ITEM,
    payload: item,
  });
};
