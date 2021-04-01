import { SET_ITEM, ITEM_DESELECTED } from "../types";

export const setItem = (item) => (dispatch) => {
  dispatch({ type: ITEM_DESELECTED });
  let data = {};
  data.item = item;
  dispatch({
    type: SET_ITEM,
    payload: data,
  });
};

export const deselectItem = () => (dispatch) => {
  dispatch({ type: ITEM_DESELECTED });
};
