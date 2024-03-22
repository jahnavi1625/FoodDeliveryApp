import React, { useState } from "react";
import { LOGO_URL } from "../utils/Constant";
import { Link, useNavigate } from "react-router-dom";
// import UserContext from "../utils/UserContext";
// import { useContext } from "react";
import { useSelector } from "react-redux";
import GetCurrentAddress from "../utils/GetCurrentAddress.js";
import logos from "../assets/logos.png";
import { FaShoppingCart } from "react-icons/fa";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // const [btnNameReact, setBtnNameReact] = useState("Login");
  // const navigate = useNavigate();

  // const handleClick=()=>{
  //   // btnNameReact === "Login"
  //   // ? setBtnNameReact("Logout")
  //   // : setBtnNameReact("Login");
  //    navigate('/login');
  //   // window.location.pathname="/login";
  // }
  // const data = useContext(UserContext);
  // console.log(data);
  // const { loggedInUser } = data;
  // console.log(loggedInUser);

   const location=GetCurrentAddress();
  //  console.log(location);
  const onlineStatus=useOnlineStatus();
  return (
    <div className="head   ">
    <div className="head2   ">
      <div>
        <img
          className=" image  "
          src={logos}
          alt="logo"
        />
      </div>
      <div className="loc ">
      
            {location}
            {/* online status:{onlineStatus?"✅": "🔴"} */}
      </div>
      
     
      
      
      <div className="listmain">
      <ul className="list ">
       
        <li>
        
          <Link to="/" className="link">
          <div className="home ">
          
          HOME
          </div>
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
          <div className="about ">
          ABOUT US
          </div>
          </Link>
        </li>
        
        <li>
          <Link to="/cart" className="link">
            <p className="cart ">CART <FaShoppingCart/> {cartItems.length}</p>
          </Link>
          {/* <h3 className="m-2 w-32 text-white font-bold">Cart</h3> */}
        </li>
        <li>
          <Link to="/login" className="link  ">
            <button className="login ">LOGIN</button>
          </Link>
        </li>
        {/* <li>{loggedInUser}</li> */}
      </ul>
    </div>
    </div>
    </div>
  );
};

export default Header;
