import {
  MINIBAR_OPEN,
  MINIBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const product_reducer = (state, action) => {
  if (action.type === MINIBAR_OPEN) {
    return { ...state, isMinibarOpen: true };
  }
  if (action.type === MINIBAR_CLOSE) {
    return { ...state, isMinibarOpen: false };
  }
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, product_loading: true };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featured_products = action.payload.filter(
      (product) => product.featured === true
    );
    return {
      ...state,
      product_loading: false,
      products: action.payload,
      featured_products,
    };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, product_loading: false, product_error: true };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default product_reducer;
