import React from "react";

// Context
import { useList } from "../../Context/wishlist-context";
// Pages
import { ProductCard } from "../../Pages/ProductCard";
// Images
import emptywishlist from "../../Styles/Images/emptywishlist.svg"

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
          <div className="h-50">
          <img src={emptywishlist} className="img-responsive" alt="empt" srcset="" />
          <h2 className="form-heading p-1">wishlist is empty!!</h2>
          </div>
        
        )}
    </div>

    </>
  );
}

export { Wishlist };
