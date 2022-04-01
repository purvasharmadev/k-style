import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

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
        setProductCart(res.data.cart);
        setSucess(true);
      }
    } catch (error) {
      console.log("error is: ", error);
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
      setProductCart(res.data.cart);
    } catch (error) {
      console.log("error is :", error);
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
      setProductCart(res.data.cart);
    } catch (error) {
      console.log("error is: ", error);
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
       return  productCart      
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

//defining cartContext as custom hook to use it with just one line of code.
const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
