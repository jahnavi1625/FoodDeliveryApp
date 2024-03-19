import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { UserContext } from "../App";

const RestaurantMenu3= ({ items }) => {
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
    const data = await fetch("http://localhost:3001/data3");
    // console.log(data);
    const json = await data.json();
    // console.log(json);
    setResInfo(json);
    // setFilterRestaurant(json);
  };

  const fetchMain = async () => {
    const data = await fetch("http://localhost:3001/About3");
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
    <div className="">
      <div>
        {showItem?.map(({ id, Name, Locality, Cuisines }) => (
          <div key={id} className="flex flex-col flex-wrap p-4 items-center sm:ml-[430px] sm:w-[500px]   md:ml-[450px] md:w-[500px] sl:ml-[520px] sxl:ml-[620px] md:ml-[900px] 2xl:ml-[1100px] " >
            <h1 className="font-extrabold text-4xl">{Name}</h1>
            <h3 className="font-semibold text-2xl">{Locality}</h3>
            <h4 className="font-medium">{Cuisines.join(" , ")}</h4>
          </div>
        ))}
      
        
          <div className="m-4 p-4 flex sm:ml-2 sl:ml-[80px] sxl:ml-[180px] md:ml-[800px] 2xl:ml-[650px] md:ml-[200px] md:relative md:left-[32%] lg:ml-[150px] xl:relative xl:left-[20%] 2xl:ml-[130px]">
            <input
              type="text"
              className="border border-black ml-[600px] sm:ml-[550px]"
              placeholder="entre to search..."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="px-4 py-1 bg-green-100 rounded-sm inline "
              onClick={handleClick}
            >
              Search
            </button>
          </div>
        
        <div className="flex flex-wrap w-[1300px]  sm:ml-[30px] sl:ml-[150px] sxl:ml-[250px] md:ml-[500px] 2xl:ml-[700px]  ">
        {!click
          ? resInfo?.map((item, index) => (

            <div className=" p-2 m-2 ml-[50px]  ">

              <div className=" p-4 h-50 w-80  border  border-gray-200 bg-slate-600 text-white  rounded-md  ">
                <div
                  className="flex justify-between"
                  // onClick={()=> toggleItem(index)}
                  key={item.id}
                >
                  <h1 className="font-bold text-lg ">{item.itemName}</h1>
                  <p>⬇</p>
                </div>

                {expanded &&  (
                  <div className="flex  justify-between p-2">
                    <div>
                      <h3 className="font-semibold">{item.category}</h3>
                      <h4 className="font-normal">Price : Rs.{item.price}/-</h4>
                    </div>
                    <div className="relative">
                      <div>
                        <img
                          className="img relative h-20"
                          src="https://up.yimg.com/ib/th?id=OIP.uYLZRXytpaJr-QyFW1QHEwHaEo&pid=Api&rs=1&c=1&qlt=95&w=157&h=98"
                          alt={`menu of ${item.id}`}
                        />

                        <button
                          className=" absolute  left-[30%] top-0  bg-white text-green-600 font-semibold w-16 h-8 rounded-lg cursor-pointer"
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
          : filterRestaurant?.map((item, index) => (
              <div className=" p-4 justify-between border  border-gray-200 bg-gray-300 w-6/12 m-auto rounded-md ">
                <div
                  className="flex justify-between"
                  // onClick={() => toggleItem(index)}
                  key={item.id}
                >
                  <h1 className="font-bold text-lg ">{item.itemName}</h1>
                  <p>⬇</p>
                </div>

                {openIndex === index && (
                  <div className="flex justify-between p-2">
                    <div>
                      <h3 className="font-semibold">{item.category}</h3>
                      <h4 className="font-normal">Price : Rs.{item.price}/-</h4>
                    </div>
                    <div className="relative">
                      <div>
                        <img
                          className="img relative h-20"
                          src="https://up.yimg.com/ib/th?id=OIP.uYLZRXytpaJr-QyFW1QHEwHaEo&pid=Api&rs=1&c=1&qlt=95&w=157&h=98"
                          alt={`menu of ${item.id}`}
                        />

                        <button
                          className=" absolute  left-[30%] top-0  bg-white text-green-600 font-semibold w-16 h-8 rounded-lg"
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

export default RestaurantMenu3;
