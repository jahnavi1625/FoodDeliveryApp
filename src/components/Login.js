import React, { createContext, useContext, useState } from "react";
import { UserContext } from "../App";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "../utils/cartSlice";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const loc = useLocation();
  const { id } = loc.state;
  console.log(id);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "default@gmail.com" && password === "foodapp") {
      setIsLoggedIn(true);
      console.log(isLoggedIn);
      dispatch(login());
      navigate(`/`);
    } else {
      alert(
        "please enter valid details take default values which are provided"
      );
      dispatch(logout());
    }
  };

  const defaultFunction = () => {
    setIsLoggedIn(true);
    navigate("/");
  };
  return (
    <>
      <div className=" loginw ">
        <div className="form ">
          <form onSubmit={handleSubmit} className="logins">
            <div className="inp1 " controlId="formBasicEmail">
              <label className="label1 ">User Name : </label>
              <input
                className="box"
                type="email"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="inp2 " controlId="formBasicPassword">
              <label className="label1">Password : </label>
              <input
                className="box rounded-sm "
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="sub">
              <b>Submit</b>
            </button>

            <p className="user">Default Username:default@gmail.com</p>
            <p className="pass">
              Default Password:<b>foodapp</b>
            </p>

            <p className="guest" onClick={defaultFunction}>
              Continue as guest
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
