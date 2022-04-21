import { useState, useEffect } from "react";
import { useAuth } from "../Context/auth-context";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import {useNotify} from "../Hooks/useNotify";
function useLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setIsLoggedIn } = useAuth();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [userInfo,setUserInfo] = useState()

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
        setUserInfo(res.data.userFound)
        useNotify("Successfully Logged In!","login-success","success")
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
      localStorage.setItem("userInfo", JSON.stringify(response.foundUser))
      location.state !== null
        ? navigate(location.state?.from?.pathname, { replace: true })
        : navigate("/", { replace: true });
    }
  }, [response]);

  const token = localStorage.getItem("token");

  return { error, sucess, postUserLogin, setUserData, errMsg, userData, token, response, userInfo };
}

export { useLogin };
