
import React, { useState, useEffect } from 'react';
import axios from 'axios'


function FeaturedProduct(){
    
    // useState for products
    const [featuredProducts, setFeaturedProducts] = useState([])

    // useState for loader
    const [loader, setLoader] = useState(true)

    // Api call
    async function getProducts() {
        try {
          await axios.get("/api/products").then((res) => {
            setFeaturedProducts(res.data.products);
            setLoader(false)
          });
        } catch (error) {
          setFeaturedProducts("error is under review");
        }
      }
    
    //   useEffect for getting products on page render
      useEffect(() => {
        setTimeout(()=>(getProducts()), 2000)
        setLoader(true)
      }, []);

    return (
        <div className='featured-product-container'>

        <h2 className='m-head'>Featured Products</h2>
        
        {/* loader */}
        {loader && <h2>Loading.....</h2> }

        {/* products */}
        <div class="product-container m-1">

        { 
        featuredProducts && featuredProducts
        .filter(item => item.featured)
        .map(item => 
            <div class="card ecom-card">
            <div class="card-header position-relative">
                <span class="card-badge"> ❤ </span>
                <span class="ecom-badge"> New Arrival </span>
                 <img height="268px" width="268px" loading="lazy"
                    src={item.img} alt="productImg" />
                <span class="category">{item.categoryName}</span>
            </div>
            <div class="card-body">
                <h3 class="card-heading">{item.title}</h3>
                <p class="card-text">
                    {item.price} <span class="ecom-card-price">Rs. 2999</span> 
                </p>
            </div>
            <div class="card-footer">
                <a href="/cart-management/cart.html" class="btn btn-primary">Add To Cart</a>
            </div>
        </div>

            )
      }</div>
        </div>
    );
}




export  {FeaturedProduct};
