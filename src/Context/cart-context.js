import { createContext, useContext, useState, useReducer } from "react";

// import reducer
import { cartReducer } from "../Reducers/cartReducer";
// creating a cart context, to use it acorss the webapp
const CartContext = createContext();

function CartProvider({ children }) {



//   UserReducer

const [ cartState, cartDispatch] = useReducer(cartReducer,{
    count:0,
})
console.log("cartContext: ", cartState.count)
  // reutnring the CartContext Provider i.e to make "values" accesible to all its children
  return (
    <CartContext.Provider
      value={{
        cartState,
        cartDispatch
        
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

//defining cartContext as custom hook to use it with just one line of code.
const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
