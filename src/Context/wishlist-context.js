import { createContext, useContext, useState } from "react";

// To Test Wishlist Component
let cars = [
  {
    id: "3",
    color: "green",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7
  },
  {
    id: "4",
    color: "yellow",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 5
  }
];
// creating a wishlist context, to use it acorss the webapp
const WishListContext = createContext();

function WishListProvider({ children }) {
    
  // useState intialise with array to get list of products inside cart
  const [ListItems, setListItems] = useState(cars);

  // useState intialise with zero to count the number of items in cart
  const [WishListCount, setWishListCount] = useState(0);

  // Function to handle items addition to carts
  function addToWishlist() {
    setWishListCount((items) => items + 1);
    // console.log(setCartItems((items) => items));
  }

  // Function to handle items removal from the carts
  function removeFromWishList() {
    setCartItems((items) => items - 1);
  }

  // reutnring the CartContext Provider i.e to make "values" accesible to all its children
  return (
    <WishListContext.Provider
      value={{
        ListItems,
        WishListCount,
        setWishListCount,
        addToWishlist,
        removeFromWishList
      }}
    >
      {children}
    </WishListContext.Provider>
  );
}

//defining cartContext as custom hook to use it with just one line of code.
const useList = () => useContext(WishListContext);
export { useList, WishListProvider };
