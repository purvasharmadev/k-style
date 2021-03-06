import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";

import ScrollToTop from "./Helper/scrollToTop";
// Importing context
import { ProductProvider } from "./Context/context";
import { WishListProvider } from "./Context/wishlist-context";
import { CartProvider } from "./Context/cart-context";
import { AuthProvider } from "./Context/auth-context";
import { OrderProvider } from "./Context/order-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    {/* Router */}
    <BrowserRouter>
      {/* AuthProvider */}
      <AuthProvider>
        {/* Product Provider */}
        <ProductProvider>
          {/* Cart Provider */}
          <CartProvider>
            {/* Wishlist Provider */}
            <WishListProvider>
              {/* Order Provider */}
              <OrderProvider>
                <ScrollToTop>
                <App />
                </ScrollToTop>
              </OrderProvider>
            </WishListProvider>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
