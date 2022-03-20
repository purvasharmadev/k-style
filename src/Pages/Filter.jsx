import React from "react";

function ProductFilter() {
  return (
    <>
      <div className="flex flex-space-between">
        <h3 className="color-primary">Filter</h3>
        <span>
          <a href="#" className="link">
            Clear
          </a>
        </span>
      </div>
      {/* Low To High || High TO Low */}
      <h3 className="m-head">Sort By</h3>
      <ul className="list-bullet-none">
        <li>
          <input type="radio" name="sortInput" id="sort" /> Low To High{" "}
        </li>
        <li>
          <input type="radio" name="sortInput" id="sort" /> High To Low{" "}
        </li>
      </ul>

      {/* Price */}
      <h3 className="m-head">Price</h3>
      <div className="sliderContainer">
        <label htmlFor="priceRange" className="flex flex-space-between">
          <span>50</span> <span>150</span>
          <span>200</span>
        </label>
        <input type="range" min="50" max="200" value="125" id="priceRange" />
      </div>

      {/* Category */}
      <h3 className="m-head">Category</h3>
      <ul className="list-bullet-none">
        <li>
          <input type="checkbox" value="checked" name="item1" id="item" /> Kpop
          T-Shirts
        </li>
        <li>
          <input type="checkbox" name="item2" id="item" /> Kpop Hoodies
        </li>
        <li>
          <input type="checkbox" name="item3" id="item" /> Kpop Idol Fashion
        </li>
        <li>
          <input type="checkbox" name="item4" id="item" />
          Kpop Albums
        </li>
        <li>
          <input type="checkbox" name="item5" id="item" />
          Kpop POCA
        </li>
        <li>
          <input type="checkbox" name="item5" id="item" />
          Kpop LightSticks
        </li>
      </ul>

      {/* Rating */}
      <h3 className="m-head">Rating</h3>
      <ul className="list-bullet-none">
        <li>
          <input type="radio" name="ratingInput" id="rating" /> 4 start & above{" "}
        </li>
        <li>
          <input type="radio" name="ratingInput" id="rating" /> 3 start & above{" "}
        </li>
        <li>
          <input type="radio" name="ratingInput" id="rating" /> 2 start & above{" "}
        </li>
        <li>
          <input type="radio" name="ratingInput" id="rating" /> 1 start & above{" "}
        </li>
      </ul>
    </>
  );
}

export { ProductFilter };
