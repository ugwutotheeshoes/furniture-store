import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Navbar, MiniNavbar } from "./components";

import {
  About,
  Cart,
  Checkout,
  Error,
  Homepage,
  ProductsPage,
  SingleProduct,
  PrivateRoute,
  AuthWrapper,
  Deals,
} from "./pages";

function App() {
  return (
    <div className="App">
      <AuthWrapper>
        <Router>
          <Navbar />
          {/* <Sidebar /> */}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
            <Route path="error" element={<Error />} />
            <Route path="deals" element={<Deals />} />
            <Route path="products" element={<ProductsPage />} />
            <Route
              path="checkout"
              element={
                <PrivateRoute>
                  <Checkout />
                </PrivateRoute>
              }
            />
            <Route path="products/:id" element={<SingleProduct />} />
          </Routes>
          <Footer />
          <MiniNavbar />
        </Router>
      </AuthWrapper>
    </div>
  );
}

export default App;
