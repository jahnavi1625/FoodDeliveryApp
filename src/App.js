import React, { createContext, useState } from "react";
// import "./App.css";
// import "./index.css";
import { Images } from "./assets/Images";

import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import RestaurantMenu from "./components/RestaurantMenu";
import RestaurantMenu2 from "./components/RestrarantMenu2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RestaurantMenu3 from "./components/RestaurantMenu3";
import AboutUs from "./components/AboutUs";
import Slider2 from "./components/Slider2";
import Footer from "./components/Footer";
export const UserContext = createContext(null);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userContextValue = { isLoggedIn, setIsLoggedIn };
  // const [userInfo, setUserInfo] = useState();
  // useEffect(() => {
  //   const data = {
  //     name: "jahnavi",
  //   };
  //   setUserInfo(data.name);
  // }, []);
  return (
    <>
      {/* <Provider store={appStore}> */}
      {/* <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}> */}
      {/* <Header/>
        <Slider slides={Images} />
        <Body /> */}
      {/* </UserContext.Provider> */}
      {/* <Cart />
      </Provider> */}
      <UserContext.Provider value={userContextValue}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Slider2 slides={Images} />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/restaurant/:id" element={<RestaurantMenu />} />
            <Route path="/restaurant2/:id" element={<RestaurantMenu2 />} />
            <Route path="/restaurant3/:id" element={<RestaurantMenu3 />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
};

export default App;
