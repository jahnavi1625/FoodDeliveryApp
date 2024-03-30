import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";
import Payment from "./Payment";
import { useNavigate } from "react-router-dom";

const RestaurantMenuItems = ({ items }) => {
  const counter = useSelector((state) => state.cart.counter);
  const navigate=useNavigate();
  console.log(counter);
  const dispatch = useDispatch();

  const removeItems = (itemId) => {
    dispatch(removeItem(itemId));
  };
  const incrementItem = (itemId) => {
    dispatch(increment(itemId));
  };
  const decrementItem = (itemId) => {
    dispatch(decrement(itemId));
  };
 const checkFunc=()=>{
  navigate("/payment")
 }


  console.log(items);
  return (
    <><div className="flexCheck">
    <div className="cartte1  ">
      {items?.map((item, index) => (
        <div className="cartitems1 " key={item.id}>
          <div className="itemenu">
          <h1 className="categ1 ">{item.itemName}</h1>
          <h3 className="category1">{item.category}</h3>
          <h4 className="price1 ">Price : Rs.{item.price*item.counter}/-</h4>
          <div className="itemscon1">
            
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
              <button className=" remove1" onClick={() => removeItems(item.id)}>
              Remove
            </button>
            </div>
          </div>
          
        </div>
      ))}
      
    </div>
    <div className="checkoutPage">
      <p className="check" >See Checkout Page Below</p>
      <Payment checkitems={items}/>
      </div>
      </div>
     </>
  );
};

export default RestaurantMenuItems;
