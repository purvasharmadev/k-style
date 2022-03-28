import { useState } from "react";
import axios from "axios";

function useLogin() {

  // useState for saving the recived token
  const [token,setToken] = useState()

  // useState for sucess
  const [sucess, setSucess] = useState(false);

  //   useState for error
  const [error, setError] = useState(false);

  // Api call
  async function postUserLogin(mail, pw) {
    try {
      await axios
        .post("/api/auth/login", {
          email: mail,
          password: pw,
        })
        .then((res) => {
          localStorage.setItem("token", res.data.encodedToken)
          setToken(localStorage.getItem("token"))
          setSucess(true);
          setError(false);
        });
    } catch (error) {
      console.log("error is: ", error)
      setError(true);
    }
  }



  return { error, sucess, postUserLogin, token};
}




export { useLogin };
