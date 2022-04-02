import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../Context/context";
import { useParams } from "react-router-dom";

// to={`/product/${props.id}`}

function Category(props) {
  const navigateTo = useNavigate();
  const { filterDispatch } = useProducts();

  const navigateToProductsPage = () => {
    filterDispatch({ type: `BY_${props.name}` });
    navigateTo("/product");
  };

  return (
    <div onClick={navigateToProductsPage} className="card card-overlay">
      <div className="card-header">
        <img className="img-responsive" src={props.img} alt={props.name} />
      </div>
      <div className="card-body">
        <h3 className="card-text">{props.name}</h3>
      </div>
    </div>
  );
}

export { Category };
