import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";
import { ToastContainer, toast } from "react-toastify";

const Payment = ({ checkitems }) => {
  const totoalPrice = () => {
    let sum = 0;
    checkitems.forEach((item) => {
      sum += item.price * item.counter;
    });
    return sum;
  };

  const counter = useSelector((state) => state.cart.counter);
  
  console.log(counter);
  const dispatch = useDispatch();

  const removeItems = (item) => {
    dispatch(removeItem(item));
  };
  const incrementItem = (itemId) => {
    dispatch(increment(itemId));
  };
  const decrementItem = (itemId) => {
    dispatch(decrement(itemId));
  };
  const notify = () => {
    toast(`payment of ${totoalPrice()} succesfull`);
  };

  console.log(checkitems);

  return (
    <div className="cartte11   ">
      {checkitems?.map((item, index) => (
        <div className="cartitems1 bg-dark text-white" key={item.id}>
          <div className="itemenu">
            <h1 className="categ1 ">{item.itemName}</h1>
            <h3 className="category1">{item.category}</h3>
            <h4 className="price1 ">
              Price : Rs.{item.price * item.counter}/-
            </h4>
            <div className="itemscon1">
              
              <img
                className="imgcart3 "
                src="https://up.yimg.com/ib/th?id=OIP.uYLZRXytpaJr-QyFW1QHEwHaEo&pid=Api&rs=1&c=1&qlt=95&w=157&h=98"
                alt={`menu of ${item.id}`}
              />
            </div>
            <div className="quantity1">
              
              <h1 className="count12">No of items : {item.counter}</h1>
              
            </div>
          </div>
        </div>
      ))}
      <div className="total   border border-solid-black d-flex justify-between bg-secondary ">
        <div className=" text-white text-center ">Total:${totoalPrice()}</div>
      </div>
      <button className="proceed bg-primary " onClick={notify}>
        ProceedToPay
      </button>
      <ToastContainer />
    </div>
  );
};

export default Payment;
