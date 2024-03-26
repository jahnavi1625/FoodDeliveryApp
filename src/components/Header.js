import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import GetCurrentAddress from "../utils/GetCurrentAddress.js";
import logos from "../assets/logos.png";
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const location = GetCurrentAddress();
  return (
    <div className="head   ">
      <div className="head2   ">
        <div>
          <img className=" image  " src={logos} alt="logo" />
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
              <Link to="/login" className="link  ">
                <button className="login ">LOGIN</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
