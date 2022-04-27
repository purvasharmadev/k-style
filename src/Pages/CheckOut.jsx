import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/cart-context";
import { useOrders } from "../Context/order-context";
import { CartPriceDetail } from "./CartPriceCard";

// Address
function CheckOut() {
  const { productCart } = useCart();
  const { setSelectedAddress, setPaymentMode } = useOrders();
  const address = JSON.parse(localStorage.getItem("address"));
  const [select, setSelect] = useState([]);
  const [display, setDisplay] = useState("block");
  const [height, setHeight] = useState("10px");
  return (
    <>
      <div className="flex flex-space-evenly p-1 mb-1">
        <div>
          <h2 className="m-top text-left">
            {" "}
            <span className="round">he</span> Step-1: Select an Address
          </h2>

          <div className="flex container">
            <div style={{ height: height }} className="progressStick"></div>

            {select && select.length != 0 ? (
              <div className="card m-1">
                <div className="header p-1">
                  <span className="card-badge color-danger">✔</span>
                </div>
                <div className="card-heading p-1 color-primary bold">
                  {select.fullName}
                </div>
                <div className="card-body p-1">
                  <p>{select.address}</p>
                  <p>{select.pNo}</p>
                </div>
              </div>
            ) : (
              <div
                style={{ display: "none" }}
                className="m-top flex flex-space-between"
              >
                <Link to="/profile" className="btn btn-primary">
                  Add Address
                </Link>
              </div>
            )}

            {address && address.length > 0 ? (
              address.map((item) => {
                return (
                  <div
                    style={{ display: display }}
                    key={item._id}
                    className="card m-1"
                  >
                    <div className="card-header">
                      <span
                        onClick={() => {
                          setSelectedAddress(item);
                          setSelect(item);
                          setDisplay("none");
                          setHeight("200px");
                        }}
                        className="card-badge"
                      >
                        {" "}
                        ✔{" "}
                      </span>
                    </div>
                    <div className="card-heading p-1 color-primary bold">
                      {item.fullName}
                    </div>
                    <div className="card-body color-primary p-1">
                      <p>{item.address}</p>
                      <p>{item.pNo}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="m-top flex flex-space-between">
                <Link to="/profile" className="btn btn-primary">
                  Add Address
                </Link>
              </div>
            )}
          </div>

          <h2 className="text-left">
            <span className="round">he</span> Step-2: Select An Payment Mode!
          </h2>
          <div className="flex flex-space-between p-1">
            <label htmlFor="online">
            <input 
            onChange={()=>{
              setPaymentMode("Online");
            }}
             name="online" type="radio"/>
            <span className="text-normal color-primary bold">
              Online          
            </span>
            </label>
            <label htmlFor="online">
            <input
          onChange={()=>{
           setPaymentMode("COD");
                        }}
             name="online" type="radio"/>
            <span className="text-normal color-primary bold">
              Cash On Delivery
            </span>

            </label>

          </div>
        </div>
        <div className="m-top">
          <h2>Order Summary</h2>
          {productCart.map((item) => {
            return (
              <div className="order-flex flex flex-space-between">
                <div className="order-detail bold">{item.title}</div>
                <div className="price-detail bold">{item.qty}</div>
              </div>
            );
          })}
          <CartPriceDetail />
        </div>
      </div>
    </>
  );
}

export { CheckOut };
