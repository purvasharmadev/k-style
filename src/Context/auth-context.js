import { createContext, useContext, useState, useEffect } from "react";
import { useLogin } from "../Hooks/useLoginUser";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Persisting the login state in local storage:

  useEffect(() => {
    const loginCheck = localStorage.getItem("isLoggedIn");
    loginCheck && JSON.parse(loginCheck)
      ? setIsLoggedIn(true)
      : setIsLoggedIn(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
