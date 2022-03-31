import { Link } from "react-router-dom";
import { useProducts } from ".././Context/context";
import {useCart} from ".././Context/cart-context";

// import "../Styles/home-page.css";

function Nav() {
  const { filterState, filterDispatch } = useProducts();
  const {productCart} = useCart();
  return (
    <>
      <nav id="top">
        <ul className="nav-list">
          <li className="nav-item nav-brand">
            <Link to="/" className="nav-link link">
              KStyle
            </Link>
          </li>
        </ul>
        <ul className="nav-list">
          <li className="nav-item">
            <input
              type="text"
              className="icon color-primary"
              placeholder="search here"
              value={filterState.search_query}
              onChange={(e) => {
                filterDispatch({
                  type: "search_query",
                  payload: e.target.value,
                });

                <Link to="/product">Link</Link>;
              }}
            />
          </li>
        </ul>

        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/wishlist" className="nav-link">
              <span className="badge badge-span">
                <i className="fa fa-heart fa-x"></i>
                <span className="badge-circle badge-right"> 0 </span>
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link link">
              <span className="badge badge-span">
                <i className="fa fa-cart-plus fa-x"></i>
                <span className="badge-circle badge-right">{productCart.length}</span>
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link btn btn-primary">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export { Nav };
