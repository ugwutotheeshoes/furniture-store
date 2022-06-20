import {
  MINIBAR_OPEN,
  MINIBAR_CLOSE,
  // GET_PRODUCTS_BEGIN,
  // GET_PRODUCTS_SUCCESS,
  // GET_PRODUCTS_ERROR,
  // GET_SINGLE_PRODUCT_BEGIN,
  // GET_SINGLE_PRODUCT_SUCCESS,
  // GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const product_reducer = (state, action) => {
  if (action.type === MINIBAR_OPEN) {
    return { ...state, isMinibarOpen: true };
  }
  if (action.type === MINIBAR_CLOSE) {
    return { ...state, isMinibarOpen: false };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default product_reducer;
