import React from "react";

function ProductCard(props) {
  return (
    <div key={props.id} className="card ecom-card">
      <div className="card-header position-relative">
        <span className="card-badge"> ❤ </span>
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
        <p className="card-text">
          ${props.price}{" "}
          <span className="ecom-card-price color-danger">{props.oldPrice}</span>
          {props.rating ? (
            <p className="text-small">
              {props.rating} <span className="fa fa-star color-warning"></span>{" "}
            </p>
          ) : (
            " "
          )}
        </p>
      </div>
      <div className="card-footer">
        <a href="/cart-management/cart.html" className="btn btn-primary">
          Add To Cart
        </a>
      </div>
    </div>
  );
}

export { ProductCard };
