
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";
import { ToastContainer, toast } from "react-toastify";

const Payment = ({checkitems}) => {
   

    const totoalPrice=()=>{
    let sum=0;
    checkitems.forEach(item=>{
        sum+=item.price*item.counter;
    })
    return sum;
};

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
  const notify=()=>{
    toast(`payment of ${totoalPrice()} succesfull`);
  }

  console.log(checkitems);
  
  return (
    <div className="cartte1  ">
      {checkitems?.map((item, index) => (
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
            {/* <Link to="/check"> */}
            
            {/* </Link> */}
            
          </div>
          
        </div>
      ))}
      <div className="w-1000px border border-solid-black d-flex justify-between ">
        <div>
        Total:
        </div>
        
        <div text-end>
        ${totoalPrice()}
        </div>
        </div>
      <button className="bg-primary" onClick={notify} >ProceedToPay</button>
      <ToastContainer/>
    </div>
  )
}

export default Payment
