import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, selectCount } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";
import cart from "../utils/cartSlice";

const RestaurantMenuItems = ({items}) => {
  // const [count, setCount] = useState(1);
  // const counter = useSelector((state) => state.cart.counter);
  const counter = useSelector(selectCount);
  
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
      <div className="cartte  ">
        {items?.map((item, index) => (
          <div className="cartitems " key={item.id}>
                    <h1 className="categ ">{item.itemName}</h1>
                      <h3 className="category">{item.category}</h3>
                      <h4 className="price h-10">Price : Rs.{item.price}/-</h4>
                      <div className="flex">
                      <button
                          className=" remove"
                          onClick={() => removeItems(item)}
                        >
                          Remove
                        </button>
                        <img
                          className="imgcart2 "
                          src="https://up.yimg.com/ib/th?id=OIP.uYLZRXytpaJr-QyFW1QHEwHaEo&pid=Api&rs=1&c=1&qlt=95&w=157&h=98"
                          alt={`menu of ${item.id}`}
                        />
                        
                        
                       
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
