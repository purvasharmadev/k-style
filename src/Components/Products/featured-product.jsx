import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "../Card";

function FeaturedProduct() {
  // useState for products
  const [featuredProducts, setFeaturedProducts] = useState([]);

  // useState for loader
  const [loader, setLoader] = useState(true);

  // Api call
  async function getProducts() {
    try {
      await axios.get("/api/products").then((res) => {
        setFeaturedProducts(res.data.products);
        setLoader(false);
      });
    } catch (error) {
      setFeaturedProducts("error is under review");
    }
  }

  //   useEffect for getting products on page render
  useEffect(() => {
    setTimeout(() => getProducts(), 2000);
    setLoader(true);
  }, []);

  return (
    <div className="featured-product-container">
      <h2 className="m-head">Featured Products</h2>

      {/* loader */}
      {loader && <h2>Loading.....</h2>}

      {/* products */}
      <div class="product-container m-1">
        {featuredProducts &&
          featuredProducts
            .filter((item) => item.featured)
            .map((item) => (
              <ProductCard
                key={item.id}
                img={item.img}
                categoryName={item.categoryName}
                title={item.title}
                price={item.price}
                oldPrice={item.oldPrice}
              />
            ))}
      </div>
    </div>
  );
}

export { FeaturedProduct };
