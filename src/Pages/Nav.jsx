import { Link } from "react-router-dom";
import { useProducts } from ".././Context/context";
import { useCart } from ".././Context/cart-context";
import { useList } from ".././Context/wishlist-context";
import { useAuth } from "../Context/auth-context";
import { useNavigate,useLocation } from "react-router-dom";

// import "../Styles/home-page.css";

function Nav() {
  let navigateTo = useNavigate();
  let loc = useLocation()


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
              onChange={(e) => {
                filterDispatch(
                  {
                    type: "search_query",
                    payload: e.target.value,
                  },
                  navigateTo("/product",{replace:true}),
                )
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8DweMma-rWymXLF3izM3bHnpexvKQPeZSDaitnE2kfOmDpa9zEmbALDq5MybVA6dcWY&usqp=CAU"
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
