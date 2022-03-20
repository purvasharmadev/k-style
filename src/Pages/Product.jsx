import React from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ProductList } from "../Components/Products/product-list";
import { ProductFilter } from "./Filter";

function Product() {
  return (
    <>
      <Nav />

      {/* Product Content */}
      <div class="flex mt-top smallScreenContainer">
        {/* Filter column */}
        <aside className="p-1">
          <ProductFilter />
        </aside>

        {/* Product Column */}
        <main className="p-1">
          <h2 className="color-primary">
            Products{" "}
            <span className="highlight-text">( Showing 20 products )</span>
          </h2>
          <ProductList />
        </main>
      </div>

      <Footer />
    </>
  );
}

export { Product };
