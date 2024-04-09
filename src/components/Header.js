import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import GetCurrentAddress from "../utils/GetCurrentAddress.js";
import logos from "../assets/logos.png";
import { FaShoppingCart } from "react-icons/fa";
import { UserContext } from "../App.js";
import { useNavigate, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const location = GetCurrentAddress();
  let { isLoggedIn } = useContext(UserContext);
  const param = useParams();
  const { id } = param;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login", {
      state: { id },
    });
  };
  const handleClicked=()=>{
    toast(`Successfully logged out`);
    isLoggedIn=false;
    // navigate("/");
  }
  return (
    <div className="head   ">
      <div className="head2   ">
        <div>
          <img className=" image  " src={logos} alt="logo" />
          <span className="appname">
            <b>Food App</b>
          </span>
        </div>
        <div className="loc ">{location}</div>
        <div className="listmain">
          <ul className="list ">
            <li>
              <Link to="/" className="link">
                <div className="home ">HOME</div>
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
                <div className="about ">ABOUT US</div>
              </Link>
            </li>

            <li>
              <Link to="/cart" className="link">
                <p className="cart ">
                  <FaShoppingCart className="cart-icon" />- {cartItems.length}
                </p>
              </Link>
            </li>
            <li>
              <a className="link">
                {!isLoggedIn ? (
                  <button className="login" onClick={handleClick}>
                    LOGIN
                  </button>
                ) : (
                  <button className="login" onClick={handleClicked}>
                    LOGOUT
                  </button>
                )}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Header;
