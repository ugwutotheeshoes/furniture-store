import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/ProductReducer";
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

const InitialState = {
  isMinibarOpen: true,
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialState);

  const openMiniBar = () => {
    dispatch({ type: MINIBAR_OPEN });
  };
  const closeMiniBar = () => {
    dispatch({ type: MINIBAR_CLOSE });
  };

  //   useEffect(() => {
  //     openMiniBar();
  //   }, []);

  return (
    <ProductsContext.Provider value={{ ...state, openMiniBar, closeMiniBar }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
