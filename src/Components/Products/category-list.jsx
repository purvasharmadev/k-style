import React, { useState, useEffect } from "react";
import axios from "axios";
import { Category } from "../../Pages/Category";

function CategoryList() {
  // useState for products
  const [categories, setCategories] = useState([]);

  // useState for loader
  const [loader, setLoader] = useState(true);

  // Api call
  async function getCategories() {
    try {
      await axios.get("/api/categories").then((res) => {
        setCategories(res.data.categories);
        setLoader(false);
      });
    } catch (error) {
      setCategories("error is under review");
    }
  }

  //   useEffect for getting products on page render
  useEffect(() => {
    getCategories();
    setLoader(true);
  }, []);

  return (
    <>
      <h2 className="m-head text-center">Categories</h2>
      {/* Loader */}
      {loader && (
        <div
          style={{ height: "10.875rem" }}
          className="flex flex-space-center align-item-center container bold color-primary text-normal"
        >
          Loading.....
        </div>
      )}
      <div className="banner-container">
        {/* category */}
        {categories &&
          categories.map((item) => (
            <Category
              key={item.categoryName}
              name={item.categoryName}
              img={item.categoryImg}
              id={item.id}
            />
          ))}
      </div>
    </>
  );
}

export { CategoryList };
