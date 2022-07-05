import "./orderModal.css";
import { Link } from "react-router-dom";
import { useOrders } from "../../Context/order-context";
import { useCart } from "../../Context/cart-context";

function OrderModal({ closeModal, CTAone, CTAtwo, CTAoneLink, CTAtwoLink, price }) {
  const { productCart, totalPrice, removeFromCart } = useCart();
  const { selectedAddress, paymentMode } = useOrders();


  const removeFromCartHandler = ()=>{
    productCart.map((item)=>{
      removeFromCart(item)
    })
  }
  return (
    <div className="modal">
      <div className="modal-body">
        <div className="modal-header">
          <span onClick={() => closeModal(false)} className="alert-close-btn">
            {" "}
            X{" "}
          </span>
          <h2>Your order is placed!</h2>
        </div>
        <div className="modal-text p-1">
          {productCart.map((item) => {
            return (
              <>
                <h3 className="p-1">
                  {item.title}( {item.categoryName} )
                </h3>
              </>
            );
          })}
          <h3 className="p-1">Address : {selectedAddress.address}</h3>
          <div className="flex flex-space-between p-1">
            <h3>
              {/* Price: Rs. {totalPrice < 1000 ? totalPrice + 40 : totalPrice} */}
              Price: Rs. {price}
            </h3>
            <h3>Payment Mode: {paymentMode}</h3>
          </div>
        </div>
        <div className="modal-footer">
          <Link onClick={removeFromCartHandler} to={CTAoneLink} className="modal-btn link">
            {" "}
            {CTAone}{" "}
          </Link>
          <Link onClick={removeFromCartHandler} to={CTAtwoLink} className="modal-btn link">
            {" "}
            {CTAtwo}{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export { OrderModal };
