import React from "react";

//Context
import { useProducts } from "../../Context/context";
import { useGetProducts } from "../../Hooks/useGetProducts";
import { filterProduct } from "../../Hooks/filter";

// Components
import { Loader } from "../Loader/loader";
import { ErrorMsg } from "../Error/error-msg";

// Pages
import { ProductCard } from "../../Pages/ProductCard";

function ProductList() {
  const { loader, errorMsg } = useGetProducts();

  // calling the filter function and storing the returned list in a variable to map over.
  let newProducts = filterProduct();

  return (
    <>
      <h2 className="color-primary">
        Products{" "}
        <span className="highlight-text">
          ( Showing {newProducts.length} products )
        </span>
      </h2>

      {/* Loader */}
      {loader && <Loader />}

      {/* products */}
      {newProducts.length !== 0 ? (
        <div class="product-container m-1">
          {newProducts &&
            newProducts.map((item) => (
              <ProductCard
                key={item.id}
                img={item.img}
                categoryName={item.categoryName}
                title={item.title}
                price={item.price}
                oldPrice={item.oldPrice}
                newArrival={item.newArrival}
                rating={item.rating}
              />
            ))}
        </div>
      ) : (
        <ErrorMsg msg="No Products found!" link="/" />
      )}

      {/* Error */}
      {errorMsg && (
        <ErrorMsg msg="Something is Wrong!! Please Try Again!" link="/" />
      )}
    </>
  );
}

export { ProductList };
