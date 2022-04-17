import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/auth-context";
import { toast } from "react-toastify";

export function RequiresAuth({ children }) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  return isLoggedIn
    ? children
    : (toast.warning("please login!", {
        toastId: "1",
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      }),
      (<Navigate to="/login" state={{ from: location }} replace />));
}
