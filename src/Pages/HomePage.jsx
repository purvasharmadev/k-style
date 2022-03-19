import { FeaturedProduct } from "../Components/Products/featured-product";
import { CategoryList } from "../Components/Products/category-list";
import {Nav} from "../Pages/Nav";
import {Footer} from "../Pages/Footer";

import "../Styles/home-page.css";
import "../Styles/product.css";

function HomePage() {
  return (
    <>
    {/* NavBar */}
    <Nav/>
      {/* Group Banners */}
      <div className="banner-container">
        <div className="card card-overlay">
          <img
            className="img-responsive"
            src="https://variety.com/wp-content/uploads/2021/05/BTS_Butter-photo.jpg"
            alt="img-bts"
          />
          <div className="card-body">
            <h1 className="card-text">BTS</h1>
          </div>
        </div>
        <div className="card card-overlay">
          <img
            className="img-responsive"
            src="https://wallpaperaccess.com/full/1099609.jpg"
            alt="img-bp"
          />
          <div className="card-body">
            <h1 className="card-text">BlankPink</h1>
          </div>
        </div>
        <div className="card card-overlay">
          <img
            className="img-responsive"
            src="https://img.wallpapersafari.com/desktop/1536/864/43/71/eqZVlb.jpg"
            alt="img-exo"
          />
          <div className="card-body">
            <h1 className="card-text">EXO</h1>
          </div>
        </div>
        <div className="card card-overlay">
          <img
            className="img-responsive"
            src="https://pm1.narvii.com/7243/709ad04f96d04955409a35178eb0d045a6c5054cr1-1080-682v2_hq.jpg"
            alt="img-twice"
          />
          <div className="card-body">
            <h1 className="card-text">TWICE</h1>
          </div>
        </div>
        <div className="card card-overlay">
          <img
            className="img-responsive"
            src="https://thehoneypop.com/wp-content/uploads/2020/04/txtfeature7.jpg"
            alt="img-txt"
          />
          <div className="card-body">
            <h1 className="card-text">TXT</h1>
          </div>
        </div>
      </div>

      {/* Header */}
      <header>
        <div>
          <h1 className="text-lg">KStyle</h1>
          <p>One stop for all your KPOP Cravings !!</p>
          <button className="btn btn-primary m-1">
            <a href="/auth/login.html" className="nav-link link">
              {" "}
              Login
            </a>
          </button>
          <button className="btn btn-secondary nav-link">
            <a href="/product/product.html" className="nav-link link">
              {" "}
              Shop
            </a>
          </button>
        </div>
      </header>

      {/* Category */}
      <CategoryList />

      {/*Featured product  */}
      <FeaturedProduct />

      {/* Footer */}
      <Footer/>
    </>
  );
}

export { HomePage };
