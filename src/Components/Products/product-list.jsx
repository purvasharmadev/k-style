import React from "react";

//Context
import { useProducts } from "../../Context/context";
import { useGetProducts } from "../../Hooks/useGetProducts";

// Components
import { Loader } from "../Loader/loader";
import { ErrorMsg } from "../Error/error-msg";

// Pages
import { ProductCard } from "../../Pages/ProductCard";

function ProductList() {
  const { Products, loader, errorMsg } = useGetProducts();


  // getting useReducer states i.e filterState from reducer
  const {
    filterState: {
      sort,
      rating,
      TSHIRT,
      HOODIES,
      IdolFashion,
      POCA,
      Album,
      LightSticks,
      search_query,
    },
  } = useProducts();

  // Function to apply selected filters
  function filterProduct() {
    // making copy of the product-list for manipulating
    let transformProducts = Products;

    // Sorting Condition
    if (sort) {
      transformProducts =
        sort === "LOW_TO_HIGH"
          ? transformProducts.sort((a, b) => a.price - b.price)
          : transformProducts.sort((a, b) => b.price - a.price);
    }

    // Conditions for individual category

    if (TSHIRT) {
      transformProducts = Products.filter(
        (item) => item.categoryName === "T-Shirt"
      );
    }

    if (HOODIES) {
      transformProducts = Products.filter(
        (item) => item.categoryName === "Hoodies"
      );
    }

    if (POCA) {
      transformProducts = Products.filter(
        (item) => item.categoryName === "POCA"
      );
    }

    if (LightSticks) {
      transformProducts = Products.filter(
        (item) => item.categoryName === "LightSticks"
      );
    }
    if (Album) {
      transformProducts = Products.filter(
        (item) => item.categoryName === "Album"
      );
    }
    if (IdolFashion) {
      transformProducts = Products.filter(
        (item) => item.categoryName === "Idol-Fashion"
      );
    }
    // Search

    if (search_query) {
      transformProducts = Products.filter(
        (item) => item.title.toLowerCase().includes(search_query)
      );
    }

    // Rating
    switch (rating) {
      case "4_AND_ABOVE":
        return (transformProducts = transformProducts.filter(
          (item) => item.rating >= 4
        ));
      case "3_AND_ABOVE":
        return (transformProducts = transformProducts.filter(
          (item) => item.rating >= 3
        ));
      case "2_AND_ABOVE":
        return (transformProducts = transformProducts.filter(
          (item) => item.rating >= 2
        ));
      case "1_AND_ABOVE":
        return (transformProducts = transformProducts.filter(
          (item) => item.rating >= 1
        ));

      default:
        return transformProducts;
    }
  }

  // calling the function and storing the returned list in a variable to map over.
  let newProducts = filterProduct();
  console.log("newProducts :", newProducts);

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
      {newProducts.length !== 0 ? 

      <div class="product-container m-1">
         { newProducts &&
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
          )) }
      </div>:
      <ErrorMsg msg="No Products found!" link="/" />
}

      {/* Error */}
      {errorMsg && <ErrorMsg msg="Something is Wrong!! Please Try Again!" link='/' />}
    </>
  );
}

export { ProductList };
