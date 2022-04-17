import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/auth-context";
import axios from "axios";
import { toast } from "react-toastify";

function useLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setIsLoggedIn } = useAuth();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [response, setResponse] = useState(undefined);

  // useState for sucess
  const [sucess, setSucess] = useState(false);

  //   useState for error
  const [error, setError] = useState(false);

  // useState for errormsg
  const [errMsg, setErrMsg] = useState("");

  // Api call
  async function postUserLogin() {
    try {
      const res = await axios.post("/api/auth/login", userData);
      res.headers["*/*"];
      if (res.status === 200) {
        setResponse(res.data);
        toast.success("Successfully Logged in!", {
          toastId: "login-success",
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
      }
    } catch (error) {
      setError(true);
      setErrMsg(error.response.data.errors[0]);
    }
  }
  useEffect(() => {
    if (response !== undefined) {
      localStorage.setItem("token", response.encodedToken);
      setSucess(true);
      setError(false);
      setIsLoggedIn(true);
      location.state !== null
        ? navigate(location.state?.from?.pathname, { replace: true })
        : navigate("/", { replace: true });
    }
  }, [response]);

  const token = localStorage.getItem("token");

  return { error, sucess, postUserLogin, setUserData, errMsg, userData, token };
}

export { useLogin };
