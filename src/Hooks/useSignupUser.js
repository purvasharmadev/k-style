import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import {useNotify} from "./useNotify";
function useSignUp() {
  const navigate = useNavigate();

  const [response, setResponse] = useState(undefined);

  const [userData,setUserData] = useState({
      firstName:"",lastName:"",
    email:"",password:""
  })


  // useState for sucess
  const [sucess, setSucess] = useState(false);

  //   useState for error
  const [error, setError] = useState(false);


  // Api call
  async function postUserSignIn() {
      console.log("userData is: ", userData)
    try {
   const res =  await axios.post("/api/auth/signup",userData);
   res.headers["*/*"]
   if(res.status === 201){
    setResponse(res.data)
    useNotify("Successfully user created!","success","signin-success")
    navigate("/login", { replace: true })

   }

        
    } catch (error) {
      setError(error.response.data.errors[0]);
      useNotify("Something went wrong! cant't create a user!","danger","signin-error");
  }
}

  useEffect(() => {
    if(response !== undefined){
          localStorage.setItem("token", response.encodedToken)
          setSucess(true);
          setError(false);
    }
  }, [response]);




  return { error, sucess, postUserSignIn, setUserData,userData};
}




export { useSignUp };
