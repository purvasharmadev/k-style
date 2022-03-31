import { Routes, Route } from "react-router-dom";
import { Product } from "./Pages/Product.jsx";
import MockAPI from "./mockman";
import { HomePage } from "./Pages/HomePage";
import { Login } from "./Components/auth/login.jsx";
import { SignUp } from "./Components/auth/signup.jsx";
import { Cart } from "./Components/Cart/cart.jsx"

export default function URLRoutes() {
  return (
    <Routes>
      <Route path="/mockman" element={<MockAPI />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<Product />} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}
