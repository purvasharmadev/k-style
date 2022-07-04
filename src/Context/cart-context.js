import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNotify } from "../Hooks/useNotify";
// creating a cart context, to use it acorss the webapp
const CartContext = createContext();

// Provider Function
function CartProvider({ children }) {
  const [productCart, setProductCart] = useState([]);
  const [sucess, setSucess] = useState(false);

  // API Configs
  const api = "/api/user/cart/";

  // Function to post the item to cart
  async function addToCart(item) {
    try {
      if (productCart.findIndex((p) => p.id === item.id) === -1) {
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
        if (res.status === 201) {
          setProductCart(res.data.cart);
          useNotify("Item added to cart!",
           "cart-add-success",
           "success",
          );
        }

        setSucess(true);
      }
    } catch (error) {
      console.error("error is: ", error.response.data.errors[0]);
      useNotify("Something went wrong ! unable to add item",
       "cart-add-error",
       "error",
      );
    }
  }

  // Function to remove item from cart

  async function removeFromCart(item) {
    try {
      const res = await axios.delete(`api/user/cart/${item._id}`, {
        headers: {
          "content-type": "text/json",
          authorization: localStorage.getItem("token"),
        },
      });
      if (res.status === 200) {
        setProductCart(res.data.cart);
        useNotify("Item removed from Cart!",
         "Cart-item-remove",
         "error",
        );
      }
    } catch (error) {
      console.error("error is :", error.response.data.errors[0]);
      useNotify("Something went wrong! unable to remove item!",
       "cart-remove-error",
       "error",
      );
    }
  }

  // Function to increase or decrease quantity of single product
  async function addOrSubItem(item, operationType) {
    try {
      const res = await axios.post(
        `api/user/cart/${item._id}`,
        {
          action: {
            type: operationType,
          },
        },
        {
          headers: {
            "content-type": "text/json",
            authorization: localStorage.getItem("token"),
          },
        }
      );
      if (res.status === 200) {
        setProductCart(res.data.cart);
        useNotify(`Item ${operationType} to cart!`,
        "cart-itemCount-success",
        "success",
        );
      }
    } catch (error) {
      console.error("error is: ", error.response.data.errors);
      useNotify("Something Went Wrong !","cart-item-error","error")
    }
  }

  // UseEffect to calculate total price
  const [totalPrice, setTotalPrice] = useState();

  // useEffect
  useEffect(() => {
    setTotalPrice(
      productCart.reduce(
        (acc, val) => acc + Number(val.price) * Number(val.qty),
        0
      )
    );
  }, [productCart]);

  useEffect(() => {
    if (productCart.length > 0) {
      return productCart;
    }
  }, [productCart]);

  // reutnring the CartContext Provider i.e to make "values" accesible to all its children
  return (
    <CartContext.Provider
      value={{
        sucess,
        addToCart,
        removeFromCart,
        productCart,
        addOrSubItem,
        totalPrice,
        setTotalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

//defining cartContext as custom hook to use it with just one line of code.
const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
