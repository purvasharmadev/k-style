import { useState, useEffect } from "react";
import axios from "axios";

function useSignUp() {

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
   setResponse(res.data)

        
    } catch (error) {
      setError(true);
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
