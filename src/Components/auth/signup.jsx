import { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../Pages/Footer";
import { Nav } from "../../Pages/Nav";
import { useSignUp } from "../../Hooks/useSignupUser";

function SignUp() {
  const [checked, setChecked] = useState(true);
  const { error, setUserData, userData, postUserSignIn } = useSignUp();
  function signUpHandler(event) {
    event.preventDefault();
    postUserSignIn();
  }

  return (
    <>
      <Nav />
        <div className="input-container mt-top">
          <h2 className="form-heading">Signup</h2>

          <form onSubmit={signUpHandler} className="form-container">
            <label htmlFor="first-name">first Name</label>
            <input
              type="text"
              name="first-name"
              value={userData.firstName}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, firstName: e.target.value }))
              }
              placeholder="first name"
            />
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              name="last-name"
              value={userData.lastName}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, lastName: e.target.value }))
              }
              placeholder="last name"
            />
            <label htmlFor="email">Email</label>
            <input
              className={error ? "error" : ""}
              type="email"
              name="email"
              value={userData.email}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="yourname@mail.com"
            />
            {error && <p className="error-msg p-1"> * Email already exists</p>}
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
            <label htmlFor="terms-and-agrement">
              <input
                type="checkbox"
                name="terms-and-condition"
                id="T-n-C-check "
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              I accept all terms and conditions
            </label>

            <button type="submit" className="btn btn-primary ">
              Create New Account
            </button>

            <h4>
              <Link to="/login" className="link">
                Already have a Account{" "}
                <i className="fa fa-arrow-right fa-x"></i>{" "}
              </Link>
            </h4>
          </form>
        </div>
      <Footer />
    </>
  );
}

export { SignUp };
