// Import routes
import { Link } from "react-router-dom";

// Import styles
import "../Styles/home-page.css";
import "../Styles/product.css";
import "../Styles/auth.css";

// Import Components
import { FeaturedProduct } from "../Components/Products/featured-product";
import { CategoryList } from "../Components/Products/category-list";
import { Banner } from "./Banner";
import { Nav } from "../Pages/Nav";
import { Footer } from "../Pages/Footer";

function HomePage() {
  return (
    <>
      {/* NavBar */}
      <Nav />

      {/* Group Banners */}
      <div className="banner-container">
        <Banner
          groupName="BTS"
          groupImg="https://variety.com/wp-content/uploads/2021/05/BTS_Butter-photo.jpg"
        />
        <Banner
          groupName="BLANKPINK"
          groupImg="https://wallpaperaccess.com/full/1099609.jpg"
        />
        <Banner
          groupName="EXO"
          groupImg="https://img.wallpapersafari.com/desktop/1536/864/43/71/eqZVlb.jpg"
        />
        <Banner
          groupName="TWICE"
          groupImg="https://pm1.narvii.com/7243/709ad04f96d04955409a35178eb0d045a6c5054cr1-1080-682v2_hq.jpg"
        />
        <Banner
          groupName="TXT"
          groupImg="https://thehoneypop.com/wp-content/uploads/2020/04/txtfeature7.jpg"
        />
      </div>

      {/* Header */}
      <header>
        <div>
          <h1 className="text-lg">KStyle</h1>
          <p>One stop for all your KPOP Cravings !!</p>
          <button className="btn btn-primary m-1">
            <Link to="/login" className="nav-link link">
              {" "}
              Login
            </Link>
          </button>
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

      {/* Footer */}
      <Footer />
    </>
  );
}

export { HomePage };
