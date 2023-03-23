import React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar, MiniNavbar } from "./components";

import {
  About,
  Cart,
  // Checkout,
  Error,
  Homepage,
  ProductsPage,
  SingleProduct,
  // AuthWrapper,
} from "./pages";

function App() {
  return (
    // <Router>
    <div className="App">
      {/* <Router> */}
      {/* <AuthWrapper> */}
      <Navbar />
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="error" element={<Error />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
      <MiniNavbar />
      {/* </Router> */}
      {/* </AuthWrapper> */}
    </div>
  );
}

export default App;
