import "../Styles/home-page.css";

function Nav() {
  return (
    <>
      <nav id="top">
        <ul className="nav-list">
          <li className="nav-item nav-brand">
            <a href="/index.html" className="nav-link link">
              KStyle
            </a>
          </li>
        </ul>
        <ul className="nav-list">
          <li className="nav-item">
            <input
              type="text"
              className="icon color-primary"
              placeholder="search here"
            />
          </li>
        </ul>

        <ul className="nav-list">
          <li className="nav-item">
            <a href="/wishlist/wishlist.html" className="nav-link">
              <span className="badge badge-span">
                <i className="fa fa-heart fa-x"></i>
                <span className="badge-circle badge-right"> 0 </span>
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/cart-management/cart.html" className="nav-link link">
              <span className="badge badge-span">
                <i className="fa fa-cart-plus fa-x"></i>
                <span className="badge-circle badge-right"> 0 </span>
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/auth/login.html" className="nav-link btn btn-primary">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export { Nav };
