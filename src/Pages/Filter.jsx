import React from "react";
import { useProducts } from "../Context/context";

function ProductFilter() {
  const { filterState, filterDispatch } = useProducts();

  return (
    <>
      <div className="flex flex-space-between">
        <h3 className="color-primary">Filter</h3>
        <span>
          <a
            href="#"
            className="link"
            onClick={() => {
              filterDispatch({ type: "CLEAR_FILTERS" });
            }}
          >
            CLEAR
          </a>
        </span>
      </div>

      {/* Low To High || High TO Low */}
      <h3 className="m-head">Sort By</h3>
      <ul className="list-bullet-none">
        <li>
          <input
            type="radio"
            name="sortInput"
            id="sort"
            checked={filterState.sort === "LOW_TO_HIGH" ? true : false}
            onChange={() => {
              filterDispatch({ type: "SORT_BY_PRICE", payload: "LOW_TO_HIGH" });
            }}
          />{" "}
          Low To High{" "}
        </li>
        <li>
          <input
            type="radio"
            name="sortInput"
            id="sort"
            checked={filterState.sort === "HIGH_TO_LOW" ? true : false}
            onChange={() => {
              filterDispatch({ type: "SORT_BY_PRICE", payload: "HIGH_TO_LOW" });
            }}
          />{" "}
          High To Low{" "}
        </li>
      </ul>

      {/* Price */}
      {/* Slider Not Working solution: https://stackoverflow.com/questions/36122034/jsx-react-html5-input-slider-doesnt-work */}

      <h3 className="m-head">Price</h3>
      <div className="sliderContainer">
        <label htmlFor="priceRange" className="flex flex-space-between">
          <span>50</span> <span>150</span>
          <span>200</span>
        </label>
        <input
          type="range"
          min="50"
          max="200"
          defaultValue="125"
          id="priceRange"
        />
      </div>

      {/* Category */}
      <h3 className="m-head">Category</h3>
      <ul className="list-bullet-none">
        <li>
          <input
            type="checkbox"
            checked={filterState.TSHIRT ? true : false}
            name="item1"
            id="item"
            onChange={() => {
              filterDispatch({ type: "BY_TSHIRTS" });
            }}
          />{" "}
          Kpop T-Shirts
        </li>
        <li>
          <input
            type="checkbox"
            name="item2"
            id="item"
            checked={filterState.HOODIES ? true : false}
            onChange={() => {
              filterDispatch({ type: "BY_HOODIES" });
            }}
          />{" "}
          Kpop Hoodies
        </li>
        <li>
          <input
            type="checkbox"
            name="item3"
            id="item"
            checked={filterState.IdolFashion ? true : false}
            onChange={() => {
              filterDispatch({ type: "BY_IDOL_FASHION" });
            }}
          />{" "}
          Kpop Idol Fashion
        </li>
        <li>
          <input
            type="checkbox"
            name="item4"
            id="item"
            checked={filterState.Album ? true : false}
            onChange={() => {
              filterDispatch({ type: "BY_ALBUM" });
            }}
          />
          Kpop Albums
        </li>
        <li>
          <input
            type="checkbox"
            name="item5"
            id="item"
            checked={filterState.POCA ? true : false}
            onChange={() => {
              filterDispatch({ type: "BY_POCA" });
            }}
          />
          Kpop POCA
        </li>
        <li>
          <input
            type="checkbox"
            name="item6"
            id="item"
            checked={filterState.LightSticks ? true : false}
            onChange={() => {
              filterDispatch({ type: "BY_LIGHTSTICKS" });
            }}
          />
          Kpop LightSticks
        </li>
      </ul>

      {/* Rating */}
      <h3 className="m-head">Rating</h3>
      <ul className="list-bullet-none">
        <li>
          <input
            type="radio"
            name="ratingInput"
            id="rating"
            checked={filterState.rating === "4_AND_ABOVE" ? true : false}
            onChange={() => {
              filterDispatch({ type: "BY_RATING", payload: "4_AND_ABOVE" });
            }}
          />{" "}
          4 start & above{" "}
        </li>
        <li>
          <input
            type="radio"
            name="ratingInput"
            id="rating"
            checked={filterState.rating === "3_AND_ABOVE" ? true : false}
            onChange={() => {
              filterDispatch({ type: "BY_RATING", payload: "3_AND_ABOVE" });
            }}
          />{" "}
          3 start & above{" "}
        </li>
        <li>
          <input
            type="radio"
            name="ratingInput"
            id="rating"
            checked={filterState.rating === "2_AND_ABOVE" ? true : false}
            onChange={() => {
              filterDispatch({ type: "BY_RATING", payload: "2_AND_ABOVE" });
            }}
          />{" "}
          2 start & above{" "}
        </li>
        <li>
          <input
            type="radio"
            name="ratingInput"
            id="rating"
            checked={filterState.rating === "1_AND_ABOVE" ? true : false}
            onChange={() => {
              filterDispatch({ type: "BY_RATING", payload: "1_AND_ABOVE" });
            }}
          />{" "}
          1 start & above{" "}
        </li>
      </ul>
    </>
  );
}

export { ProductFilter };
