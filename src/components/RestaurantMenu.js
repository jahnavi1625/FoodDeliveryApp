import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { UserContext } from "../App";

const RestaurantMenu = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [expanded,setExpanded]=useState(true);

  // const toggleItem = (index) => {
  //   // setOpenIndex((prev) => (prev === index ? null : index));
  //   setExpanded((prev)=>(prev===index) ? null:index);
  // };

  const [showItem, setShowItem] = useState([]);
  const [resInfo, setResInfo] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState(resInfo);
  const [searchText, setSearchText] = useState("");
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const param=useParams();
  const {id}=param;
  

  
   
  useEffect(() => {
    fetchData();
    fetchMain();
  });

  const fetchData = async () => {
    const data = await fetch("http://localhost:3001/data");
    // console.log(data);
    const json = await data.json();
    // console.log(json);
    setResInfo(json);
    // setFilterRestaurant(json);
  };

  const fetchMain = async () => {
    const data = await fetch("http://localhost:3001/About");
    // console.log(data);
    const json = await data.json();
    // console.log(json);
    setShowItem(json);
  };

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    if (isLoggedIn) {
      alert(`added to cart`);
      dispatch(addItem(item));
      
    } else {
      navigate("/login",{
        state:{id}
      });
    }
  };

  const filterItems = () => {
    // console.log(searchText);
    const newRes = resInfo.filter((restaurant) =>
      // console.log(restaurant)
      restaurant.itemName.toLowerCase().includes(searchText.toLowerCase())
    );
    //setList(filterRestaurant);

    setFilterRestaurant(newRes);
  };

  const handleClick = () => {
    setClick(true);
    filterItems();
  };
  console.log(filterRestaurant);
  return (
    <div className="restro">
      <div>
        {showItem?.map(({ id, Name, Locality, Cuisines }) => (
          <div key={id} className="content   " >
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
            <button
              className="inputbut "
              onClick={handleClick}
            >
              Search
            </button>
          </div>
        
        <div className="cardsflex   ">
        {!click
          ? resInfo?.map((item, index) => (

            <div className=" p-2  ">

              <div className="cards1 ">
                <div
                  className=""
                  // onClick={()=> toggleItem(index)}
                  key={item.id}
                >
                  <p className="pi ">{item.itemName}</p>
                  
                </div>

                {expanded &&  (
                  <div className="">
                    <div>
                      <p className="pi2">{item.category}</p>
                      <p className="pi3">Price : Rs.{item.price}/-</p>
                    </div>
                    <div className="">
                      <div>
                      <button
                          className="add cursor-pointer"
                          onClick={() => handleAddItem(item)}
                        >
                          +ADD
                        </button>
                        <img
                          className="img "
                          src="https://up.yimg.com/ib/th?id=OIP.uYLZRXytpaJr-QyFW1QHEwHaEo&pid=Api&rs=1&c=1&qlt=95&w=157&h=98"
                          alt={`menu of ${item.id}`}
                        />

                        
                      </div>
                    </div>
                  </div>
                )}
                </div>
              </div>
            ))
          : filterRestaurant?.map((item, index) => (
              <div className="  ">
                <div
                  className=""
                  // onClick={() => toggleItem(index)}
                  key={item.id}
                >
                  <h1 className="">{item.itemName}</h1>
                  <p>⬇</p>
                </div>

                {openIndex === index && (
                  <div className="">
                    <div>
                      <h3 className="">{item.category}</h3>
                      <h4 className="">Price : Rs.{item.price}/-</h4>
                    </div>
                    <div className="">
                      <div>
                        <img
                          className="img"
                          src="https://up.yimg.com/ib/th?id=OIP.uYLZRXytpaJr-QyFW1QHEwHaEo&pid=Api&rs=1&c=1&qlt=95&w=157&h=98"
                          alt={`menu of ${item.id}`}
                        />

                        <button
                          className=" absolute  "
                          onClick={() => handleAddItem(item)}
                        >
                          +ADD
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;