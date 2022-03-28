import { Link } from "react-router-dom";
import { useState } from "react";
import { Footer } from "../../Pages/Footer";
import { Nav } from "../../Pages/Nav";
import { useLogin } from "../../Hooks/useLoginUser";

function Login() {

  const {sucess,error,postUserLogin} = useLogin()

  const [userMail, setUserMail] = useState("");
  const [userPw, setUserPw] = useState("");

  function loginHandler(event) {
    postUserLogin(userMail, userPw);
    event.preventDefault();
  }

  return (
    <>
      <Nav />
      {sucess ? (
        <div className="input-container">
          <h2 className="form-heading p-1">You have been sucessfully logged in!</h2>
          <h3 className="color-warning p-1">
            Now you can add/delete items to cart and wishlist!
          </h3>
          <Link to="/product" className="link w-50 p-1">
            Go to Products...
          </Link>
        </div>
      ):      <div className="input-container mt-top">
      <h2 className="form-heading">Login</h2>

      <form onSubmit={loginHandler} className="form-container">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className={error ? "error" : ""}
          name="email"
          value={userMail}
          onChange={(e) => setUserMail(e.target.value)}
          placeholder="yourname@mail.com"
        />
        {error && <p className="error-msg p-1"> * Email does not exists</p>}
        <label htmlFor="password">Password </label>
        <input
          type="password"
          name="password"
          value={userPw}
          onChange={(e) => setUserPw(e.target.value)}
          placeholder="********"
        />
        <div>
          <label htmlFor="remember-me">
            <input
              type="checkbox"
              name="remember-me"
              checked={true}
              id="remember-me-check"
            />
            Remember Me
          </label>
          <p 
            
            onClick={() => {
              setUserMail("guestuser@test.com");
              setUserPw("guestuser123");
            }}
            className="link color-primary"
          >
            Browse As Guest
          </p>
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>

        <h4>
          <Link to="/signup" className="link">
            Create A New Account <i className="fa fa-arrow-right fa-x"></i>
          </Link>
        </h4>
      </form>
    </div> }



      <Footer />
    </>
  );
}

export { Login };
