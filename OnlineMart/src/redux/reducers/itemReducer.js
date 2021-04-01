import { SET_ITEM, ITEM_DESELECTED } from "../types";

const initialState = {
  itemSelected: false,
  item: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ITEM:
      return {
        itemSelected: true,
        ...action.payload,
      };
    case ITEM_DESELECTED:
      return {
        ...state,
        itemSelected: false,
      };
    default:
      return state;
  }
}
