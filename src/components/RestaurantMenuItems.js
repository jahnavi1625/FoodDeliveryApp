import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";
import cart from "../utils/cartSlice";

const RestaurantMenuItems = ({ items }) => {
  // const [openIndex, setOpenIndex] = useState(null);
  const counter = useSelector((state) => state.cart.counter);

 

  // console.log(items);

  const dispatch = useDispatch();

  const removeItems = (item) => {
    dispatch(removeItem(item));
  };
  const incrementItem = (itemId) => {
    dispatch(increment(itemId));
    // console.log(itemId);
  };
  const decrementItem = (itemId) => {
    dispatch(decrement(itemId));
  };
  return (
    // <div className="w-[1500px]">
      <div className="cartte  ">
        {items?.map((item, index) => (
          <div className="cartitems m-4">
                    <h1 className="categ ">{item.itemName}</h1>
                      <h3 className="category">{item.category}</h3>
                      <h4 className="price h-10">Price : Rs.{item.price}/-</h4>
                      <div className="flex">
                        <img
                          className="imgcart2 "
                          src="https://up.yimg.com/ib/th?id=OIP.uYLZRXytpaJr-QyFW1QHEwHaEo&pid=Api&rs=1&c=1&qlt=95&w=157&h=98"
                          alt={`menu of ${item.id}`}
                        />
                        
                        <button
                          className=" remove absolute"
                          onClick={() => removeItems(item)}
                        >
                          Remove
                        </button>
                       
                        <div className="quantity">
                          <button className="inc" onClick={()=>incrementItem(item.id)}>+</button>
                          <h1 className="count">{counter}</h1>
                          <button className="dec" onClick={()=>decrementItem(item.id)}>-</button>
                        </div>
                    </div>
                  </div>
        ))}
      </div>
    // </div>
  );
};

export default RestaurantMenuItems;
