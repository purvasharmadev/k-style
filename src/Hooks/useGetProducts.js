import React, { useState, useEffect } from 'react';
import axios from "axios";


function useGetProducts() {
     // useState for products
  const [Products, setProducts] = useState([]);

  // useState for loader
  const [loader, setLoader] = useState(true);

  // Api call
  async function getProducts() {
    try {
      await axios.get("/api/products").then((res) => {
        setProducts(res.data.products);
        setLoader(false);
      });
    } catch (error) {
      setProducts("error is under review");
    }
  }

  //   useEffect for getting products on page render
  useEffect(() => {
    setTimeout(() => getProducts(), 2000);
    setLoader(true);
  }, []);

  return { loader, Products }
}

export  {useGetProducts};