import React, { useState, useEffect } from "react";
import { ProductCard } from "../../Pages/ProductCard";
import { useGetProducts } from "../../Hooks/useGetProducts";

function ProductList() {
  const { loader, Products } = useGetProducts();

  return (
    <>
      {/* Loader */}
      {loader && (
        <div
          style={{ height: "21.875rem" }}
          className="flex flex-space-center align-item-center container bold color-primary text-normal"
        >
          Loading.....
        </div>
      )}

      {/* products */}
      <div class="product-container m-1">
        {Products &&
          Products.map((item) => (
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
    </>
  );
}

export { ProductList };
