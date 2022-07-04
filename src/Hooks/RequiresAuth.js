import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/auth-context";
import {useNotify} from "./useNotify"
export function RequiresAuth({ children }) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  return isLoggedIn 
    ? children
    : (<Navigate to="/login" state={{ from: location }} replace />);
}
