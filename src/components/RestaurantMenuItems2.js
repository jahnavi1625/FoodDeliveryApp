import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";
import cart from "../utils/cartSlice";
import Footer from "./Footer";

const RestaurantMenuItems2 = ({ items }) => {
  // const [count, setCount] = useState(1);
  const counter = useSelector((state) => state.cart.counter);
  // const cart = useSelector(state => state.cart);

  // // Now you can access properties of cart state
  // const { items, counter } = cart;

  console.log(counter);
  // console.log(count);
  const dispatch = useDispatch();

  const removeItems = (item) => {
    dispatch(removeItem(item));
  };
  const incrementItem = (itemId) => {
    // setCount(count+1);
    dispatch(increment(itemId));
    // console.log(itemId);
  };
  const decrementItem = (itemId) => {
    dispatch(decrement(itemId));
  };
  console.log(items);
  return (
    // <div className="w-[1500px]">
    <div className="cartte1  ">
      {items?.map((item, index) => (
        <div className="cartitems1 " key={item.id}>
          <div className="itemenu">
          <h1 className="categ1 ">{item.itemName}</h1>
          <h3 className="category1">{item.category}</h3>
          <h4 className="price1 ">Price : Rs.{item.price*item.counter}/-</h4>
          <div className="itemscon1">
            <button className=" remove1" onClick={() => removeItems(item)}>
              Remove
            </button>
            <img
              className="imgcart3 "
              src="https://up.yimg.com/ib/th?id=OIP.uYLZRXytpaJr-QyFW1QHEwHaEo&pid=Api&rs=1&c=1&qlt=95&w=157&h=98"
              alt={`menu of ${item.id}`}
            />
           </div>
            <div className="quantity1">
              <button className="inc1" onClick={() => incrementItem(item.id)}>
                +
              </button>
              <h1 className="count1">{item.counter}</h1>
              <button className="dec1" onClick={() => decrementItem(item.id)}>
                -
              </button>
            </div>
            <button className="check">Checkout</button>
          </div>
          
        </div>
      ))}
      <Footer/>
    </div>
    // </div>
  );
};

export default RestaurantMenuItems2;
