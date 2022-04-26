import { useState } from "react";

import { useCart } from "../Context/cart-context";
import { Link, useLocation } from "react-router-dom";

function CartPriceDetail() {
  const location = useLocation();
  const { productCart, totalPrice } = useCart();
  const [coupon, setCoupon] = useState("Try NewBee50 to get a 50% discount");
  const [couponInp, setCouponInp] = useState("");
  const [saved, setSaved] = useState("");
  const [newPrice, setNewPrice] = useState(totalPrice);

  function calDiscount(tp, disc) {
    let discountedPrice = 0;
    let saveMoney = (tp / 100) * disc;
    discountedPrice = tp - saveMoney;
    setCoupon("Coupon successfully Applied!");
    setSaved(() => `You Saved Rs. ${Math.round(saveMoney)} !`);
    setNewPrice(() => Math.round(discountedPrice));
  }

  function couponInputHandler(e) {
    setCoupon(e.target.value);
    setNewPrice(totalPrice);
    setSaved("");
    setCouponInp("");
    setCoupon("");
  }

  function couponHandler() {
    switch (coupon) {
      case "NewBee50":
        return calDiscount(totalPrice, 50);

      case "BTS0613":
        return calDiscount(totalPrice, 16);

      case "TWICE20":
        return calDiscount(totalPrice, 20);

      default:
        return setCoupon("coupon not exists!");
    }
  }
  return (
    <>
          {location.pathname !== "/cart" && totalPrice > 600 ? (
        <>
          <div className="order-flex flex flex-space-between align-item-center">
            <div className="order-detail">
              <h3 className="mb-1">Apply Coupon</h3>
              <h3> </h3>
            </div>
            <div className="price-detail">
              <input
                className="mb-1"
                onChange={couponInputHandler}
                type="text"
                value={couponInp ? couponInp : ""}
              />
              <span
                onClick={couponHandler}
                className="pointer btn-apply-coupon "
              >
                <i className="fa fa-forward"></i>
              </span>
              <p
                className="bold color-primary"
                style={{
                  fontSize: "1rem",
                  marginTop: "-15px",
                  marginBottom: "10px",
                }}
              >
                {coupon}
              </p>

              <div className="flex flex-wrap flex-space-evenly">
                <button
                  onClick={() => {
                    setCouponInp("TWICE20");
                    setCoupon("TWICE20");
                  }}
                  className="btn-coupon"
                >
                  {" "}
                  TWICE20{" "}
                </button>

                <button
                  onClick={() => {
                    setCouponInp("NewBee50");
                    setCoupon("NewBee50");
                  }}
                  className="btn-coupon"
                >
                  {" "}
                  NewBee50{" "}
                </button>

                <button
                  onClick={() => {
                    setCouponInp("BTS0613");
                    setCoupon("BTS0613");
                  }}
                  className="btn-coupon"
                >
                  {" "}
                  BTS0613{" "}
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      <div className="order-flex flex flex-space-between align-item-center">
        <div className="order-detail">
          <h3>Price ( {productCart.length} Items )</h3>
          <h3>Delivery Charges</h3>
          {
            saved && <h3>Coupon Discount</h3>

          }
        </div>
        <div className="price-detail">
          <h3>Rs. {totalPrice}</h3>
          <h3>{totalPrice > 1000 ? "Yay! you got free delivery" : "Rs. 40"}</h3>
         {
           saved && <h3>{saved}</h3>
         } 

        </div>
      </div>


      <div className="order-flex flex flex-space-between align-item-center mb-1">
        <div className="order-detail">
          <h3>Total</h3>
        </div>
        <div className="price-detail">
          {location.pathname !== "/cart" ? (
            <>
              <h3>Rs. {newPrice}</h3>
            </>
          ) : (
            <>
              <h3>
                Rs.
                {totalPrice < 1000 ? totalPrice + 40 : totalPrice}
              </h3>
            </>
          )}
        </div>
      </div>
      <div className="p-1 mb-1">

          <Link to="/checkout" className="btn btn-primary w-100">
          {location.pathname !== "/cart" ? (
          "Place Order"
        ) : (   "CheckOut"     )}

          </Link>
      </div>
    </>
  );
}

export { CartPriceDetail };
