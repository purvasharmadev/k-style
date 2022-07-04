import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../Context/context";
import {Banner} from "./Banner"


function Category(props) {
  const navigateTo = useNavigate();
  const { filterDispatch } = useProducts();

  const navigateToProductsPage = () => {
    filterDispatch({ type: `BY_${props.name}` });
    navigateTo("/product");
  };

  return (
    <div onClick={navigateToProductsPage} className="pointer">
    <Banner name={props.name} img={props.img} />
    </div>
  );
}

export { Category };
