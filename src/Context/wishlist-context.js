import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// creating a wishlist context, to use it acorss the webapp
const WishListContext = createContext();

function WishListProvider({ children }) {
  // API Configs
  const api = "/api/user/wishlist/";

  // useState intialise with array to get list of products inside wishlist
  const [ListItems, setListItems] = useState([]);

  // Function to handle items addition to wishlist
  async function addToWishlist(item) {
    try {
      if (ListItems.findIndex((p) => p.id === item.id) === -1) {
        const res = await axios.post(
          api,
          { product: item },
          {
            headers: {
              "content-type": "text/json",
              authorization: localStorage.getItem("token"),
            },
          }
        );
        setListItems(res.data.wishlist);
      }
    } catch (error) {
      console.error("error is: ", error.response.data.errors);
    }
  }

  // Function to handle items removal from the wishlist
  async function removeFromWishlist(item) {
    try {
      const res = await axios.delete(`api/user/wishlist/${item._id}`, {
        headers: {
          "content-type": "text/json",
          authorization: localStorage.getItem("token"),
        },
      });
      setListItems(res.data.wishlist);
    } catch (error) {
      console.error("error is :", error.response.data.errors);
    }
  }

  useEffect(() => {
    if (ListItems.length > 0) {
      return ListItems;
    }
  }, [ListItems]);

  // reutnring the WishlistContext Provider i.e to make "values" accesible to all its children
  return (
    <WishListContext.Provider
      value={{
        ListItems,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
}

//defining WishlistContext as custom hook to use it with just one line of code.
const useList = () => useContext(WishListContext);
export { useList, WishListProvider };
