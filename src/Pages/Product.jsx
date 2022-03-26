import React from "react";

// Page
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ProductFilter } from "./Filter";

// Component
import { ProductList } from "../Components/Products/product-list";

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
          <ProductList />
        </main>
      </div>

      <Footer />
    </>
  );
}

export { Product };
