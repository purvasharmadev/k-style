import React from "react";
import { useCart } from "../Context/cart-context";
import { useList } from "../Context/wishlist-context";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/auth-context";

function ProductCard(props) {
  let navigateTo = useNavigate();
  const { addToCart, productCart } = useCart();
  const { addToWishlist, removeFromWishlist, ListItems } = useList();
  const { isLoggedIn } = useAuth();
  const currentLocation = useLocation();

  function addToCartHandler(item) {
    isLoggedIn
      ? addToCart(item)
      : navigateTo("/login", {
          state: { from: currentLocation },
          replace: true,
        });
  }

  function addToWishlistHandler(item) {
    isLoggedIn
      ? addToWishlist(item)
      : navigateTo("/login", {
          state: { from: currentLocation },
          replace: true,
        });
  }

  function removeFromWishlistHandler(item) {
    removeFromWishlist(item);
  }

  return (
    <div className="card ecom-card">
      <div className="card-header position-relative">
        {ListItems.findIndex((i) => i.id === props.item.id) === -1 ? (
          <span
            onClick={() => addToWishlistHandler(props.item)}
            className="card-badge"
          >
            {" "}
            ❤{" "}
          </span>
        ) : (
          <span
            onClick={() => removeFromWishlistHandler(props.item)}
            className="card-badge liked"
          >
            {" "}
            ❤{" "}
          </span>
        )}

        {props.newArrival ? (
          <span className="ecom-badge">New Arrival</span>
        ) : (
          " "
        )}
        <img
          height="268px"
          width="268px"
          loading="lazy"
          src={props.img}
          alt="productImg"
        />
        <span className="category">{props.categoryName}</span>
      </div>
      <div className="card-body text-left ">
        <h3 className="card-heading">{props.title}</h3>
        <div className="card-text">
          Rs.{props.price}{" "}
          <span className="ecom-card-price color-danger">{props.oldPrice}</span>
          {props.rating ? (
            <p className="text-small">
              {props.rating} <span className="fa fa-star color-warning"></span>{" "}
            </p>
          ) : (
            " "
          )}
        </div>
      </div>
      <div className="card-footer">
        {productCart.findIndex((p) => p.id === props.item.id) === -1 ? (
          <button
            onClick={() => addToCartHandler(props.item)}
            className="btn btn-primary"
          >
            Add To Cart
          </button>
        ) : (
          <button className="btn btn-secondary">
            <Link to="/cart" className="btn btn-secondary">
              Go to Cart{" "}
            </Link>{" "}
          </button>
        )}
      </div>
    </div>
  );
}

export { ProductCard };
