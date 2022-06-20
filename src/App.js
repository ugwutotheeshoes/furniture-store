import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
      <Navbar />
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
        <Route path="/products" element={<Products />}>
          <Route path="/products:id" element={<SingleProduct />} />
        </Route>
      </Routes>
      <Footer />
      <MiniNavbar />
    </div>
  );
}

export default App;
