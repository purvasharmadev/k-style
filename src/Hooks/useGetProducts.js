import React, { useState, useEffect } from 'react';
import axios from "axios";


function useGetProducts() {
     // useState for products
  const [Products, setProducts] = useState([]);

  // useState for loader
  const [loader, setLoader] = useState(true);

//   useState for error
const [errorMsg, setErrorMsg] = useState(false)


  // Api call
  async function getProducts() {
    try {
      await axios.get("/api/products").then((res) => {
        setProducts(res.data.products);
        setLoader(false);
      });
    }catch(error) {
    setErrorMsg(true)
    setLoader(false)

    }
  }

  //   useEffect for getting products on page render
  useEffect(() => {
    setTimeout(() => getProducts(), 2000);
    setLoader(true);
  }, []);

  return { loader, Products, errorMsg }
}

export  {useGetProducts};