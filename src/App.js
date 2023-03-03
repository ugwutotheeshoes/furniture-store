import React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar, MiniNavbar } from "./components";

import {
  About,
  Cart,
  Checkout,
  Error,
  Homepage,
  Products,
  SingleProduct,
} from "./pages";

function App() {
  return (
    // <Router>
    <div className="App">
      {/* <Router> */}
      <Navbar />
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="error" element={<Error />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
      <MiniNavbar />
      {/* </Router> */}
    </div>
  );
}

export default App;
