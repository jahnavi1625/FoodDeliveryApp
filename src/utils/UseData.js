// import React, { useState } from 'react'

import { useEffect, useState } from "react";

const UseData = () => {
    const[resInfo,setResInfo]=useState(null);
    
    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData=async ()=>{
    const data=await fetch("http://localhost:3003/About")
    console.log(data);
    const json=await data.json();
    console.log(json);
    setResInfo(json)
    }
  return resInfo;
}

export default UseData;
