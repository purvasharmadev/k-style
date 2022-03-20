import React, { useState, useEffect } from "react";
import { useGetProducts } from "../../Hooks/useGetProducts";
import { ProductCard } from "../../Pages/ProductCard";

function FeaturedProduct() {
  const { loader, Products } = useGetProducts();

  return (
    <div className="featured-product-container">
      <h2 className="m-head">Featured Products</h2>

        {/* Loader */}
        {loader && <div style={{height:"21.875rem"}} className="flex flex-space-center align-item-center container bold color-primary text-normal">Loading.....</div>}

      {/* products */}
      <div class="product-container m-1">
        {Products &&
          Products
            .filter((item) => item.featured)
            .map((item) => (
              <ProductCard
                key={item.id}
                img={item.img}
                categoryName={item.categoryName}
                title={item.title}
                price={item.price}
                oldPrice={item.oldPrice}
                newArrival={item.newArrival}
              />
            ))}
      </div>
    </div>
  );
}

export { FeaturedProduct };
