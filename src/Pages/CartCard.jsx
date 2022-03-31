import { useCart } from "../Context/cart-context";

function CartCard(props) {
  const { removeFromCart, addOrSubItem } = useCart();

  function removeFromCartHandler(item) {
    removeFromCart(item);
  }

  function addOrSubHandler(item, operationType) {
    addOrSubItem(item, operationType);
  }

  return (
    <>
      {/* <!-- Product Details --> */}
      <div className="flex cart-card mb-1">
        <div className="cart-img position-relative">
          <img height="280px" width="242px" src={props.img} alt={props.title} />
          <span className="category">{props.category}</span>
        </div>
        <div className="cart-details">
          <h3 className="cart-heading mb-1">{props.title}</h3>
          <h4 className="cart-price mb-1">
            Rs. {props.price}{" "}
            <span className="ecom-card-price highlight-text">
              {props.oldPrice}
            </span>{" "}
          </h4>
          <h6 className="discount mb-1">{props.discount}</h6>
          <h6 className="mb-1">
            <a
              onClick={() => addOrSubHandler(props.item, "increment")}
              className="btn-icon pl-0 color-primary"
            >
              <i className="fa fa-plus"></i>
            </a>{" "}
            <span className="counter-text">
              {props.qty === 0 ? removeFromCartHandler(props.item) : props.qty}
            </span>
            <a
              onClick={() => addOrSubHandler(props.item, "decrement")}
              className="btn-icon pl-0"
            >
              <i className="fa fa-minus"></i>
            </a>{" "}
          </h6>

          <div className="cart-btn">
            <button
              onClick={() => {
                removeFromCartHandler(props.item);
              }}
              className="btn btn-primary "
            >
              Remove From Cart
            </button>
            <a href="/" className="m-1 btn btn-secondary-outline">
              Add to wishlist
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export { CartCard };
