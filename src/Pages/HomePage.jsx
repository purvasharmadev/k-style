// Import routes
import { Link } from "react-router-dom";

// Import styles
import "../Styles/home-page.css";
import "../Styles/product.css";
import "../Styles/auth.css";

// Import Components
import { FeaturedProduct } from "../Components/Products/featured-product";
import { CategoryList } from "../Components/Products/category-list";

// Import Context
import { useAuth } from "../Context/auth-context";

function HomePage() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {/* Header */}
      <header>
        <div>
          <h1 className="text-lg">KStyle</h1>
          <p>One stop for all your KPOP Cravings !!</p>
          {isLoggedIn ? null : (
            <button className="btn btn-primary m-1">
              <Link to="/login" className="nav-link link">
                {" "}
                Login
              </Link>
            </button>
          )}

          <button className="btn btn-secondary nav-link">
            <Link to="/product" className="nav-link link">
              {" "}
              Shop
            </Link>
          </button>
        </div>
      </header>

      {/* Category */}
      <CategoryList />

      {/*Featured product  */}
      <FeaturedProduct />
    </>
  );
}

export { HomePage };
