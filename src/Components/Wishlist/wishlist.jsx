import React from "react";
import { Nav } from "../../Pages/Nav";
import { Footer } from "../../Pages/Footer";

import { useList } from "../../Context/wishlist-context";

// Pages
import { ProductCard } from "../../Pages/ProductCard";

function Wishlist() {
  const { ListItems } = useList();
  return (
    <>

      <h2 className="p-1 mt-top text-center">
        My Wishlist <span className="highlight-text">({ListItems.length})</span>
      </h2>

      {/* products */}
      <div className="product-container m-1">
        {ListItems.length > 0 ? (
          ListItems.map((item) => (
            <ProductCard
              key={item.id}
              img={item.img}
              categoryName={item.categoryName}
              title={item.title}
              price={item.price}
              oldPrice={item.oldPrice}
              newArrival={item.newArrival}
              rating={item.rating}
              item={item}
            />
          ))
        ) : (
          <div className="input-container">
            <h2 className="form-heading p-1">Wishlist is empty!!</h2>
          </div>
        )}
      </div>
    </>
  );
}

export { Wishlist };
