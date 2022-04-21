import { Link } from "react-router-dom";
import { useLogin } from "../../Hooks/useLoginUser";
import { useState } from "react";

function Login() {
  const [checked, setChecked] = useState(true);
  const { error, setUserData, userData, errMsg, postUserLogin } =
    useLogin();

  const guestLogin = () => {
    setUserData((prev) => ({
      ...prev,
      email: "guestuser@test.com",
      password: "guestuser123",
    }));
  };

  function loginHandler(event) {
    event.preventDefault();
    postUserLogin();
  }

  return (
    <>
        <div className="input-container mt-top">
          <h2 className="form-heading">Login</h2>
          {error && <p className="color-danger bold p-1"> * {errMsg}</p>}

          <form onSubmit={loginHandler} className="form-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className={error ? "error" : ""}
              name="email"
              value={userData.email}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="yourname@mail.com"
            />
            <label htmlFor="password">Password </label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, password: e.target.value }))
              }
              placeholder="********"
            />
            <div>
              <label htmlFor="remember-me">
                <input
                  type="checkbox"
                  name="remember-me"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                  id="remember-me-check"
                />
                Remember Me
              </label>
              <p onClick={() => guestLogin()} className="link pointer">
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
        </div>


    </>
  );
}

export { Login };
