import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

import { useDispatch } from "react-redux";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantMenuItems from "./RestaurantMenuItems";
import RestaurantMenuItems2 from "./RestaurantMenuItems2";
import RestaurantMenuItems3 from "./RestaurantMenuItems3";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cartdetails text-center  flex flex-col m-4 p-4 ">
      <div className="" >
      <h1 className="cartCon text-2xl font-bold">Cart</h1>
     
        <button
          className="cartbutton p-2 m-2 bg-black text-white rounded-lg  "
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        
        </div>
        <div className="">
        {cartItems.length === 0 && (
          <h1 className="w-96 "> Cart is empty. Add Items to the cart!</h1>
        )}
        <RestaurantMenuItems items={cartItems} />
        {/* <RestaurantMenuItems2 items={cartItems} />
        <RestaurantMenuItems3 items={cartItems} /> */}
      </div>
      </div>
    
  );
};

export default Cart;