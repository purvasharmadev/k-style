import React from 'react'


function ProductCard (props) {
    
    return ( 
        <div key={props.id} class="card ecom-card">
        <div class="card-header position-relative">
            <span class="card-badge"> ❤ </span>
            {props.newArrival?<span class="ecom-badge">New Arrival</span> : " " } 
             <img height="268px" width="268px" loading="lazy"
                src={props.img} alt="productImg" />
            <span class="category">{props.categoryName}</span>
        </div>
        <div class="card-body">
            <h3 class="card-heading">{props.title}</h3>
            <p class="card-text">
              $  {props.price} <span class="ecom-card-price">{props.oldPrice}</span> 
            </p>
        </div>
        <div class="card-footer">
            <a href="/cart-management/cart.html" class="btn btn-primary">Add To Cart</a>
        </div>
    </div>

     );
}

export {ProductCard} ;
