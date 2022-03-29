import { Link } from "react-router-dom";
import { Footer } from "../../Pages/Footer";
import { Nav } from "../../Pages/Nav";
import { useLogin } from "../../Hooks/useLoginUser";

function Login() {

  const {sucess,error,setUserData,userData, postUserLogin} = useLogin()

  const guestLogin = () => {
    console.log("guestLogin running...")
    setUserData((prev) => ({
      ...prev,
      email: "guestuser@test.com",
      password: "guestuser123",
    }));
  };

  function loginHandler(event) {
    event.preventDefault();
    postUserLogin()
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
          value={userData.email}
          onChange={(e) => setUserData((prev)=>({...prev,email:e.target.value}))}
          placeholder="yourname@mail.com"
        />
        {error && <p className="error-msg p-1"> * Email does not exists</p>}
        <label htmlFor="password">Password </label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={(e) => setUserData((prev)=>({...prev,password:e.target.value}))}
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
          <p onClick={()=>guestLogin()} className="link">
            Browse as guest
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
