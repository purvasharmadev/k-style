import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";

// Importing context
import { ProductProvider } from "./Context/context"
import { WishListProvider } from "./Context/wishlist-context";

// Importing CartContext
import {CartProvider} from "./Context/cart-context"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    
    {/* Router */}
    <BrowserRouter>

    {/* Product Provider */}
    <ProductProvider>
      {/* Cart Provider */}
      <CartProvider>
        {/* Wishlist Provider */}
        <WishListProvider>
        <App />
        </WishListProvider>
      </CartProvider>
    </ProductProvider>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
