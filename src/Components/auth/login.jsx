import { Link } from "react-router-dom";
import { Footer } from "../../Pages/Footer";
import { Nav } from "../../Pages/Nav";

function Login() {
  return (
    <>
      <Nav />

      <div className="input-container mt-top">
        <h2 className="form-heading">Login</h2>

        <form action="" className="form-container">
          <label for="email">Email</label>
          <input type="email" name="email" placeholder="yourname@mail.com" />
          <label for="password">Password </label>
          <input type="password" name="password" placeholder="********" />
          <div>
            <label for="remember-me">
              <input
                type="checkbox"
                name="remember-me"
                checked="checked"
                id="remember-me-check"
              />
              Remember Me
            </label>
            <a href="/forgot-password" className="link">
              Browse as Guest
            </a>
          </div>

          <a className="btn btn-primary " href="/auth/login.html">
            Login
          </a>

          <h4>
            <Link to="/signup" className="link">
              Create A New Account <i className="fa fa-arrow-right fa-x"></i>
            </Link>
          </h4>
        </form>
      </div>

      <Footer />
    </>
  );
}

export { Login };
