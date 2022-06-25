import React from 'react';
import { Link } from 'react-router-dom';
import {useAuth} from "../Context/auth-context"
function Footer() {
  const {isLoggedIn} = useAuth()
    return ( 
        <>
              <footer>
        <div className="flex flex-space-evenly align-item-center flex-wrap">
          <Link to="/" className="nav-link link">
            Home
          </Link>
          <Link to="/product" className="nav-link link">
            Shop
          </Link>
          {
            isLoggedIn ? 
            ""
           :
           <Link to="/login" className="nav-link link">
           Login / Signup
         </Link>          }

          <Link to="/" className="nav-link link">
            Featured Products
          </Link>

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