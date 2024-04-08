import React from "react";
import { useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify";

const Payment = ({ checkitems }) => {
  const totoalPrice = () => {
    let sum = 0;
    checkitems.forEach((item) => {
      if(typeof item.counter=="number"){
        sum += item.price * item.counter;
      }else{
        sum+=1*item.price;
      } 
    });
    return sum;
  };

  const counter = useSelector((state) => state.cart.counter);
  
  console.log(counter);

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
              Price : Rs.{ typeof item.counter=="number" ? item.price * item.counter : 1*item.price}/-
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
