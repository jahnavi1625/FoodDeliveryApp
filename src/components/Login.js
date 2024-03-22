import React, { createContext, useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { UserContext } from "../App";
import { useNavigate,useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login,logout } from "../utils/cartSlice";
// import {useHistory} from "react-router-dom";
// import { useParams } from "react-router-dom";
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
   const dispatch=useDispatch();
  // const history = useHistory();
 
  const navigate = useNavigate();
   const loc=useLocation();
   const {id}=loc.state;
   console.log(id);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "default@gmail.com" && password === "foodapp") {
      setIsLoggedIn(true);
      console.log(isLoggedIn);
      dispatch(login());
      navigate(`/`);
     
      // if(id===1){
        
      //   navigate(`/restaurant/1`);
      // }
      // else if(id===2){
      //   navigate(`/restaurant2/2`);
      // }
      // else if(id===3){
      //   // dispatch(login());
      //   navigate(`/restaurant3/3`);
      // }
      // else{
        
      // }
          // history.goBack();
   
    // else if (name === "default@gmail.com" && password === "default2") {
    //   setIsLoggedIn(true);
    //   dispatch(login());
    //   navigate("/restaurant2");
    // } else if (name === "default@gmail.com" && password === "default3") {
    //   setIsLoggedIn(true);
    //   dispatch(login());
    //   navigate("/restaurant3");
    // } 
    }
    else {
      alert(
        "please enter valid details take default values which are provided"
      );
      dispatch(logout());
    }
  
  };

  const defaultFunction=()=>{
    setIsLoggedIn(true);
    navigate("/");
  }
  return (
    <>
      <div className=" loginw ">
        <div className="form ">
          <form onSubmit={handleSubmit} className="logins">
            <div
              className="inp1 "
              controlId="formBasicEmail"
            >
              <label className="label1 ">
                User Name :{" "}
              </label>
              <input
                className="box"
                type="email"
                value={name} 
                onChange={(e) => setName(e.target.value)}
                
              />
            </div>

            <div
              className="inp2 "
              controlId="formBasicPassword"
            >
              <label className="label1">
                Password :{" "}
              </label>
              <input
                className="box rounded-sm "
                type="password"
               
                value={password}
                
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="sub"
            >
              <b>Submit</b>
            </button>

            <p className="user">Default Username:default@gmail.com</p>
            <p className="pass">
              Default Password:<b>foodapp</b> 
            </p>

            <p className="guest" onClick={defaultFunction}>Continue as guest</p>
          </form>
        </div>
      </div>

      
    </>
  );
};

export default Login;
