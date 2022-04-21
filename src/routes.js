import { Routes, Route } from "react-router-dom";
import { Product } from "./Pages/Product.jsx";
import MockAPI from "./mockman";
import { HomePage } from "./Pages/HomePage";
import { Profile } from "./Pages/Profile.jsx";
import { Login } from "./Components/auth/login.jsx";
import { SignUp } from "./Components/auth/signup.jsx";
import { Wishlist } from "./Components/Wishlist/wishlist.jsx";
import { Cart } from "./Components/Cart/cart.jsx";


import { RequiresAuth } from "./Hooks/RequiresAuth";

export default function URLRoutes() {
  return (
    <>
        <Routes>
      <Route path="/mockman" element={<MockAPI />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:categoryName" element={<Product />} />

      <Route
        path="/cart"
        element={
          <RequiresAuth>
            <Cart />
          </RequiresAuth>
        }
      />
      <Route
        path="/wishlist"
        element={
          <RequiresAuth>
            <Wishlist />
          </RequiresAuth>
        }
      />
            <Route
        path="/profile"
        element={
          <RequiresAuth>
            <Profile />
          </RequiresAuth>
        }
      />

      {/* <Route path="/profile" element={<Profile />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    </>
  );
}
