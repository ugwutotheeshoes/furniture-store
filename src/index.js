import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./context/ProductContext";
import { FilterProvider } from "./context/FilterContext";
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    // "dev-xfv3i6ny.us.auth0.com"
    clientId={process.env.REACT_APP_CLIENT_ID}
    // "NLsSTQ5aWsxn5qlalMvPuwwaZBiXTfgZ"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
