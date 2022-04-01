import { useState, useEffect } from "react";
import axios from "axios";

function useLogin() {
  const [response, setResponse] = useState(undefined);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  // useState for sucess
  const [sucess, setSucess] = useState(false);

  //   useState for error
  const [error, setError] = useState(false);

  // Api call
  async function postUserLogin() {
    try {
      const res = await axios.post("/api/auth/login", userData);
      res.headers["*/*"];
      setResponse(res.data);
    } catch (error) {
      console.log("error is: ", error);
      setError(true);
    }
  }

  useEffect(() => {
    if (response !== undefined) {
      localStorage.setItem("token", response.encodedToken);
      setSucess(true);
      setError(false);
    }
  }, [response]);

  const token = localStorage.getItem("token");

  return { error, sucess, postUserLogin, setUserData, userData, token };
}

export { useLogin };
