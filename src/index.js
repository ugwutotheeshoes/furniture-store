import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./context/ProductContext";
import { FilterProvider } from "./context/FilterContext";
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-xfv3i6ny.us.auth0.com"
    // {process.env.AUTH_DOMAIN}
    clientId="NLsSTQ5aWsxn5qlalMvPuwwaZBiXTfgZ"
    // {process.env.CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );
