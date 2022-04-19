import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import styled from "styled-components";
import {
  About,
  Cart,
  Checkout,
  Error,
  Homepage,
  PrivateRoute,
  Products,
  SingleProduct,
} from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products:id" children={<SingleProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
