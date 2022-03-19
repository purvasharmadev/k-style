import React from 'react';

function Footer() {
    return ( 
        <>
              <footer>
        <div className="flex flex-space-evenly align-item-center flex-wrap">
          <a href="#" className="nav-link link">
            Home
          </a>
          <a href="#" className="nav-link link">
            Shop
          </a>
          <a href="#" className="nav-link link">
            Login / Signup
          </a>
          <a href="#" className="nav-link link">
            Featured Products
          </a>

          <p className="text-center color-white">
            Follow us on :
            <a href="/" className="p-1">
              <i className="fa fa-instagram color-white"></i>
            </a>
            <a href="/" className="p-1">
              <i className="fa fa-facebook color-white"></i>
            </a>
            <a href="/" className="p-1">
              <i className="fa fa-twitter color-white"></i>
            </a>
          </p>
        </div>
        <p className="color-white text-center p-1">Kstyle © 2022</p>
      </footer>

        </>

     );
}

export {Footer};