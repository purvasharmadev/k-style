import React, { useState, useEffect } from "react";
import { ProductCard } from "../../Pages/ProductCard";
import { useGetProducts } from "../../Hooks/useGetProducts";
import { Loader } from "../Loader/loader";
import {ErrorMsg} from "../Error/error-msg"

function ProductList() {
  const { loader, Products, errorMsg } = useGetProducts();

  return (
    <>
      {/* Loader */}
      {loader && <Loader/>}



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
            {/* Error */}
            {errorMsg && <ErrorMsg msg="Something is Wrong!! Please Try Again!"/>}
    </>
  );
}

export { ProductList };
