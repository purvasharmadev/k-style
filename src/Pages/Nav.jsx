import { Link } from "react-router-dom";
import { useProducts } from ".././Context/context";
import { useCart } from ".././Context/cart-context";
import { useList } from ".././Context/wishlist-context";
import { useAuth } from "../Context/auth-context";
import { useNavigate } from "react-router-dom";

// import "../Styles/home-page.css";

function Nav() {
  let navigateTo = useNavigate();

  const { filterState, filterDispatch } = useProducts();
  const { productCart } = useCart();
  const { ListItems } = useList();
  const { setIsLoggedIn, isLoggedIn } = useAuth();

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
                filterDispatch(
                  {
                    type: "search_query",
                    payload: e.target.value,
                  },
                  navigateTo("/product")
                );

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
                {
                  ListItems.length > 0 ?
                  <span className="badge-circle badge-right">
                  {" "}
                  {ListItems.length}
                </span> :
                ""
                }

              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link link">
              <span className="badge badge-span">
                <i className="fa fa-cart-plus fa-x"></i>
                {
                  productCart.length > 0 ?
                  <span className="badge-circle badge-right">
                  {productCart.length}
                </span>:""
                }
              </span>
            </Link>
          </li>
          {!isLoggedIn ? (
            <li className="nav-item">
              <Link to="/login" className="nav-link btn btn-primary">
                Login
              </Link>
            </li>
          ) : (
            <li className="nav-item position-relative tooltip">
              <img
                src="https://i.pinimg.com/736x/b8/03/78/b80378993da7282e58b35bdd3adbce89.jpg"
                className="avatar avatar-sm"
                alt="profile-pic"
                id="logout"
              />
              <span className="flex flex-column tooltip-text">
                <span
                  onClick={() => {
                    localStorage.clear();
                    setIsLoggedIn(false);
                    productCart.length = 0;
                    ListItems.length = 0;
                    navigateTo("/")
                  }}
                  className="link link-hover "
                >
                  Logout
                </span>
                <Link
                  to="/profile"
                  className="link color-white"
                >
                  Profile
                </Link>
              </span>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export { Nav };
