import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import { json } from "react-router-dom";

const preloadState={
  cart:{
    items:localStorage.getItem('cart')
  }
}

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadState,
});

export default appStore;