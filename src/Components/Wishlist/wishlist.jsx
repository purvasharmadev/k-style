import React from 'react'
import { Nav } from "../../Pages/Nav";
import { Footer } from "../../Pages/Footer";

import { useList } from "../../Context/wishlist-context";

function Wishlist() {
  const { ListItems, WishListCount, setWishListCount } = useList();
  return (
    <div className="card m-auto p-1 color-warning">
      <h1>from Wishlist : {WishListCount}</h1>
      <>
        <h3>ITEMS FROM WishList</h3>
        <div>
          {ListItems &&
            ListItems.map((item) => <h3 key="{item.}"> {item.color}</h3>)}
        </div>
      </>
    </div>
  );
}

export {Wishlist};
