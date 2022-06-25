import { useState } from "react";
import { useCart } from "../Context/cart-context";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { OrderModal } from "../Components/Order/OrderModal";
import { useOrders } from "../Context/order-context";
import { v4 as uuid } from "uuid";
import { useNotify } from "../Hooks/useNotify";
import {getDataFromLocal} from "../Hooks/useLocalStorage"

function loadRazorpay(url) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
  });
}

function CartPriceDetail(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const { productCart, totalPrice, removeFromCart } = useCart();
  const { paymentMode } = useOrders();

  const userInfo = getDataFromLocal("userInfo", "")
  console.log("user Info ", userInfo)

  const [coupon, setCoupon] = useState("Try NewBee50 to get a 50% discount");
  const [saved, setSaved] = useState("");
  const [newPrice, setNewPrice] = useState(totalPrice);
  const [orderModal, setOrderModal] = useState(false);
  const [couponSelect, setCouponSelect] = useState("");

  async function showRazorpay({ amount }) {
    const res = await loadRazorpay(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_yo6LCZF4ChqwR2", // Enter the Key ID generated from the Dashboard
      // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      amount: String(
        totalPrice === newPrice
          ? totalPrice < 1000
            ? (totalPrice + 40) * 100
            : totalPrice * 100
          : newPrice < 1000
          ? (newPrice + 40) * 100
          : newPrice * 100
      ),
      currency: "INR",
      name: "K style",
      description: "Thank you for shopping with us ❤",
      image:
        "https://media.istockphoto.com/vectors/kpop0103-vector-id1183374758?k=20&m=1183374758&s=612x612&w=0&h=xoFlNAfWESsCUgbWHjfPhtNiLKdtk-ueBXscrTv_UNo=",
      handler: async (response) => {
        const orderId = Math.floor(Math.random() * 100000) + 1;
        const orderData = {
          orderId,
          products: [...productCart],
          amount: String(
            totalPrice === newPrice
              ? totalPrice < 1000
                ? (totalPrice + 40) * 100
                : totalPrice * 100
              : newPrice < 1000
              ? (newPrice + 40) * 100
              : newPrice * 100
          ),
          paymentId: response.razorpay_payment_id,
        };

        productCart.map((item) => {
          removeFromCart(item);
        });
        useNotify("Order Successfully placed!",
         "order-success",
          "success");



        navigate("/order-summary", { state: orderData });
      },
      prefill: {
        name: userInfo.firstName,
        email: userInfo.email,
        contact:"092635100"
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  function calDiscount(tp, disc) {
    let discountedPrice = 0;
    let saveMoney = (tp / 100) * disc;
    discountedPrice = tp - saveMoney;
    useNotify("Coupon successfully Applied!", "coupon-success", "success");
    setCoupon("");
    setSaved(() => `You Saved Rs. ${Math.round(saveMoney)} !`);
    setNewPrice(() => Math.round(discountedPrice));
  }

  // function couponInputHandler(e) {
  //   setNewPrice(totalPrice);
  //   setSaved("");
  //   setCouponSelect(e.target.value);
  // }

  function couponHandler(type) {
    switch (type) {
      case "NewBee50":
        return calDiscount(totalPrice, 50);

      case "BTS0613":
        return calDiscount(totalPrice, 16);

      case "TWICE20":
        return calDiscount(totalPrice, 20);

      default:
        return setCoupon("Promocode dosen't exists!");
    }
  }
  return (
    <>
      {location.pathname !== "/cart" && totalPrice > 600 ? (
        <>
          <div className="order-flex flex flex-space-between align-item-center">
            <div className="order-detail">
              <h3 className="mb-1">Apply Coupon</h3>
            </div>
            <div className="price-detail">
              {/* <input
                className="mb-1"
                onChange={couponInputHandler}
                type="text"
              />
              <span
                onClick={() => couponHandler(coupon)}
                className="pointer btn-apply-coupon "
              >
                <i className="fa fa-forward"></i>
              </span> */}
              <div className="flex flex-wrap flex-space-evenly">
                <button
                  onClick={() => {
                    setCouponSelect("TWICE20"),
                      setCoupon("Congratulation! you got 20% off!"),
                      couponHandler("TWICE20");
                  }}
                  className={
                    couponSelect === "TWICE20"
                      ? "btn-coupon selectBtn"
                      : "btn-coupon"
                  }
                >
                  {" "}
                  TWICE20{" "}
                </button>

                <button
                  onClick={() => {
                    setCouponSelect("NewBee50"),
                      setCoupon("Congratulation! you got 50% off!"),
                      couponHandler("NewBee50");
                  }}
                  className={
                    couponSelect === "NewBee50"
                      ? "btn-coupon selectBtn"
                      : "btn-coupon"
                  }
                >
                  {" "}
                  NewBee50{" "}
                </button>

                <button
                  onClick={() => {
                    setCouponSelect("BTS0613"),
                      setCoupon("Congratulation! you got 50% off!"),
                      couponHandler("BTS0613");
                  }}
                  className={
                    couponSelect === "BTS0613"
                      ? "btn-coupon selectBtn"
                      : "btn-coupon"
                  }
                >
                  {" "}
                  BTS0613{" "}
                </button>
              </div>
              {couponSelect !== "" ? (
                <span
                  onClick={() => {
                    setNewPrice(totalPrice);
                    setCouponSelect("");
                    setSaved("");
                    useNotify(
                      "Coupon Removed",
                      "coupon-remove-success",
                      "success"
                    );
                  }}
                  className="bold color-primary pointer"
                >
                  remove coupon
                </span>
              ) : (
                <span>{coupon}</span>
              )}
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
          {saved && <h3>Coupon Discount</h3>}
        </div>
        <div className="price-detail">
          <h3>Rs. {totalPrice}</h3>
          <h3>{totalPrice > 1000 ? "Yay! you got free delivery" : "Rs. 40"}</h3>
          {saved && <h3>{saved}</h3>}
        </div>
      </div>

      <div className="order-flex flex flex-space-between align-item-center mb-1">
        <div className="order-detail">
          <h3>Total</h3>
        </div>
        <div className="price-detail">
          {location.pathname !== "/cart" ? (
            <>
              <h3>
                Rs.
                {totalPrice === newPrice
                  ? totalPrice < 1000
                    ? totalPrice + 40
                    : totalPrice
                  : newPrice < 1000
                  ? newPrice + 40
                  : newPrice}{" "}
              </h3>
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
        {location.pathname !== "/cart" ? (
          <>
            {props.select && (
              <h6 className="text-sm color-danger text-center mb-0">
                Select an address to place an order!
              </h6>
            )}
            <button
              disabled={props.select}
              onClick={() => {
                if (paymentMode === "COD") {
                  setOrderModal(true);
                } else {
                  showRazorpay(newPrice);
                }
              }}
              className={
                props.select
                  ? "btn btn-secondary w-100 disabledBtn "
                  : "btn btn-primary w-100"
              }
            >
              Place Order{" "}
            </button>
          </>
        ) : (
          <Link to="/checkout" className="btn btn-primary w-100">
            CheckOut{" "}
          </Link>
        )}
      </div>
      {orderModal && (
        <div className="modal-div">
          <OrderModal
            closeModal={setOrderModal}
            CTAone="Home"
            CTAoneLink="/"
            CTAtwo="Product"
            CTAtwoLink="/product"
          />
        </div>
      )}
    </>
  );
}

export { CartPriceDetail };
