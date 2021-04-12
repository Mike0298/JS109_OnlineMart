import {
  SET_ITEM,
  ITEM_DESELECTED,
  IMAGE_LOADED,
  IMAGE_LOADING,
} from "../types";

export const setItem = (item) => (dispatch) => {
  dispatch({ type: ITEM_DESELECTED });
  dispatch({ type: IMAGE_LOADING });
  let data = {};
  data.item = item;
  dispatch({
    type: SET_ITEM,
    payload: data,
  });
  setTimeout(() => dispatch({ type: IMAGE_LOADED }), 3000);
};

export const deselectItem = () => (dispatch) => {
  dispatch({ type: ITEM_DESELECTED });
};
