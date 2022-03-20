import React, { useState, useEffect } from "react";
import { useGetProducts } from "../../Hooks/useGetProducts";
import { ProductCard } from "../../Pages/ProductCard";
import { Loader } from "../Loader/loader";
import { ErrorMsg } from "../Error/error-msg";

function FeaturedProduct() {
  const { loader, Products, errorMsg } = useGetProducts();

  return (
    <div className="featured-product-container">
      <h2 className="m-head">Featured Products</h2>
      {loader && <Loader />}

      {/* products */}
      <div class="product-container m-1">
        {Products &&
          Products.filter((item) => item.featured).map((item) => (
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

      {/* Error */}
      {errorMsg && <ErrorMsg msg="Something Went Wrong" />}
    </div>
  );
}

export { FeaturedProduct };
