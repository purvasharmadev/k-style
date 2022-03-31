import { useState } from "react";

import { useCart } from "../Context/cart-context";

function CartPriceDetail() {
  const { productCart, totalPrice } = useCart();
  const [orderPlace, setOrderPlace] = useState("");

  return (
    <>
      <div className="order-flex flex flex-space-between align-item-center">
        <div className="order-detail">
          <h3>Price ( {productCart.length} Items )</h3>
          <h3>Delivery Charges</h3>
        </div>
        <div className="price-detail">
          <h3>Rs. {totalPrice}</h3>
          <h3>{totalPrice > 1000 ? "Yay! you got free delivery" : "Rs. 40"}</h3>
        </div>
      </div>
      <div className="order-flex flex flex-space-between align-item-center mb-1">
        <div className="order-detail">
          <h3>Total</h3>
        </div>
        <div className="price-detail">
          <h3>
            Rs.
            {totalPrice < 1000 ? totalPrice + 40 : totalPrice}
          </h3>
        </div>
      </div>
      <div>
        <h3 className="mb-1 p-1"> {orderPlace}</h3>
        <button
          onClick={() => {
            setOrderPlace("Your order is placed!!!");
          }}
          className="btn btn-primary w-100"
        >
          Place Order
        </button>
      </div>
    </>
  );
}

export { CartPriceDetail };
