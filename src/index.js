import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";

// Importing context
import { ProductProvider } from "./Context/context"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    
    {/* Router */}
    <BrowserRouter>

    {/* Product Provider */}
    <ProductProvider>
      <App />
    </ProductProvider>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
