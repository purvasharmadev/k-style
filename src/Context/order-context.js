import { createContext, useContext, useState } from "react";
import { useCart } from "./cart-context";

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const { totalPrice } = useCart();

  const [selectedAddress, setSelectedAddress] = useState([]);
  const [items, setItems] = useState([]);
  const [price, setPrice] = useState(totalPrice);
  const [paymentMode, setPaymentMode] = useState("");

  return (
    <OrderContext.Provider
      value={{
        selectedAddress,
        items,
        price,
        paymentMode,
        setSelectedAddress,
        setItems,
        setPaymentMode,
        setPrice,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

const useOrders = () => useContext(OrderContext);
export { OrderProvider, useOrders };
