import { Link } from "react-router-dom";
import { Footer } from "../../Pages/Footer";
import { Nav } from "../../Pages/Nav";

function SignUp() {
  return (
    <>
      <Nav />
      <div className="input-container mt-top">
        <h2 class="form-heading">Signup</h2>

        <form action="" className="form-container">
          <label for="username">User Name</label>
          <input type="text" name="username" placeholder="enter your name" />
          <label for="email">Email</label>
          <input type="email" name="email" placeholder="yourname@mail.com" />
          <label for="password">Password </label>
          <input type="password" name="password" placeholder="********" />
          <label for="confirm-password">Confirm Password </label>
          <input
            type="password"
            name="confirm-password"
            placeholder="********"
          />
          <label for="terms-and-agrement">
            <input
              type="checkbox"
              name="remember-me"
              id="remember-me-check "
              checked={true}
            />
            I accept all terms and conditions
          </label>

          <a class="btn btn-primary " href="/auth/sign-up.html">
            Create New Account
          </a>

          <h4>
            <Link to="/login" class="link">
              Already have a Account <i class="fa fa-arrow-right fa-x"></i>{" "}
            </Link>
          </h4>
        </form>
      </div>
      <Footer />
    </>
  );
}

export { SignUp };
