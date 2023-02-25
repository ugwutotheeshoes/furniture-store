import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducer/ProductReducer";
import { ProductsUrl as url } from "../utils/constants";
import axios from "axios";
import {
  MINIBAR_OPEN,
  MINIBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  // GET_SINGLE_PRODUCT_BEGIN,
  // GET_SINGLE_PRODUCT_SUCCESS,
  // GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const InitialState = {
  isMinibarOpen: true,
  product_loading: false,
  product_error: false,
  products: [],
  featured_products: [],
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

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(url);
      const products = response.data;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, openMiniBar, closeMiniBar }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
