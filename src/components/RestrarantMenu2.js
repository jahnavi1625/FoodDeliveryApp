import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { UserContext } from "../App";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./Footer";

const RestaurantMenu2 = () => {
  const [expanded, setExpanded] = useState(true);
  const [showItem, setShowItem] = useState([]);
  const [resInfo, setResInfo] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState(resInfo);
  const [searchText, setSearchText] = useState("");
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(UserContext);
  const param = useParams();
  const { id } = param;

  useEffect(() => {
    fetchData();
    fetchMain();
  });

  const fetchData = async () => {
    const data = await fetch("https://json-data-uw5r.onrender.com/data2");
    const json = await data.json();
    setResInfo(json);
  };

  const fetchMain = async () => {
    const data = await fetch("https://json-data-uw5r.onrender.com/About2");
    const json = await data.json();
    setShowItem(json);
  };

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    if (isLoggedIn) {
      toast(`${item.itemName} is added to cart`);
      dispatch(addItem(item));
    } else {
      navigate("/login", {
        state: { id },
      });
    }
  };

  const filterItems = () => {
    const newRes = resInfo.filter((restaurant) =>
      restaurant.itemName.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterRestaurant(newRes);
  };

  const handleClick = () => {
    setClick(true);
    filterItems();
  };
  console.log(filterRestaurant);

  return (
    <div className="restro">
      <div className="main">
        {showItem?.map(({ id, Name, Locality, Cuisines }) => (
          <div key={id} className="content   ">
            <h1 className="ch1 ">{Name}</h1>
            <h3 className="ch3 ">{Locality}</h3>
            <h4 className="ch4 ">{Cuisines.join(" , ")}</h4>
          </div>
        ))}

        <div className="inp m-4 p-4 flex ">
          <input
            type="text"
            className="input"
            placeholder="entre to search..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="inputbut " onClick={handleClick}>
            Search
          </button>
        </div>

        <div className="cardsflex   ">
          {!click
            ? resInfo?.map((item, index) => (
                <div className=" p-2  ">
                  <div className="cards1 ">
                    <div className="" key={item.id}>
                      <p className="pi ">{item.itemName}</p>
                    </div>

                    {expanded && (
                      <div className="">
                        <div>
                          <p className="pi2">{item.category}</p>
                          <p className="pi3">Price : Rs.{item.price}/-</p>
                        </div>
                        <div className="butimg">
                          <div>
                            <img
                              className="img "
                              src="https://up.yimg.com/ib/th?id=OIP.uYLZRXytpaJr-QyFW1QHEwHaEo&pid=Api&rs=1&c=1&qlt=95&w=157&h=98"
                              alt={`menu of ${item.id}`}
                            />
                            <button
                              className="add cursor-pointer"
                              onClick={() => handleAddItem(item)}
                            >
                              +ADD
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))
            :filterRestaurant.length === 0 ? (
              <p className="notfound">Item not found</p>
            ):
            
            
            filterRestaurant?.map((item, index) => (
                <div className=" cards2 ">
                  <div className="" key={item.id}>
                    <p className="pi1">{item.itemName}</p>
                  </div>

                  {expanded && (
                    <div className="">
                      <div>
                        <p className="pi22">{item.category}</p>
                        <p className="pi32">Price : Rs.{item.price}/-</p>
                        <button
                            className="add1 "
                            onClick={() => handleAddItem(item)}
                          >
                            +ADD
                          </button>
                      </div>
                     
                      <div className="btnimg2">
                        <div>
                          <img
                            className="img1"
                            src="https://up.yimg.com/ib/th?id=OIP.uYLZRXytpaJr-QyFW1QHEwHaEo&pid=Api&rs=1&c=1&qlt=95&w=157&h=98"
                            alt={`menu of ${item.id}`}
                          />

                          
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
        </div>
        <div>
          
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default RestaurantMenu2;
