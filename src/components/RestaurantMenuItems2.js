import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";
import cart from "../utils/cartSlice";

const RestaurantMenuItems2 = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [expand, setExpand] = useState(true);
  const counter = useSelector((state) => state.cart.counter);

  const toggleItem = (index) => {
    // setOpenIndex((prev)=>(prev===index?null:index));
    setExpand(!expand);
  };

  console.log(items);

  const dispatch = useDispatch();

  const removeItems = (item) => {
    dispatch(removeItem(item));
  };
  const incrementItem = (itemId) => {
    dispatch(increment(itemId));
  };
  const decrementItem = () => {
    dispatch(decrement(1));
  };
  return (
    // <div className="w-[1500px]">
      <div className="ml-[-100px] mr-[100px] w-[1000px] flex flex-wrap sm:ml-[-200px] sl:ml-[-140px] sxl:ml-[-80px] md:ml-[100px] xl:relative xl:left-[20%] ">
        {items?.map((item, index) => (
          <div className="m-3    items-center  border  border-gray-200  bg-slate-600 text-white w-2/12  w-[300px] rounded-md  h-[150px]">
            {/* sm:w-[600px] sl:w-[600px] sxl:w-[600px] sxl:m-0 md:w-[600px] lg:w-[600px] lg:ml-0 md:ml-[2px] xl:w-[800px] 2xl:w-[1300px] */}
            <div className=" p-2">
              <div
                className="flex justify-between "
                onClick={() => toggleItem(index)}
                key={item.id}
              >
                <h1 className="font-bold text-lg ">{item.itemName}</h1>
                <p>⬇</p>
              </div>
              
                {expand && (
                  <div className="flex justify-between ">
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
                          className=" absolute  left-[30%] top-0  bg-white text-green-500 font-semibold w-16 h-8 rounded-lg p-1"
                          onClick={() => removeItems(item)}
                        >
                          Remove
                        </button>
                        <div className="flex justify-around  font-semibold ">
                          <button onClick={()=>incrementItem(item.id)}>+</button>
                          <h1>{counter}</h1>
                          <button onClick={decrementItem}>-</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              
            </div>
          </div>
        ))}
      </div>
    // </div>
  );
};

export default RestaurantMenuItems2;
