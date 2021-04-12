import {
  SET_ITEM,
  ITEM_DESELECTED,
  IMAGE_LOADED,
  IMAGE_LOADING,
} from "../types";

const initialState = {
  itemSelected: false,
  item: {},
  image_loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ITEM:
      return {
        ...state,
        itemSelected: true,
        ...action.payload,
      };
    case ITEM_DESELECTED:
      return {
        ...state,
        item: {},
        itemSelected: false,
      };
    case IMAGE_LOADED:
      return {
        ...state,
        image_loading: false,
      };
    case IMAGE_LOADING:
      return {
        ...state,
        image_loading: true,
      };
    default:
      return state;
  }
}
