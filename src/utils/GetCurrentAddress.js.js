import React, { useEffect, useState } from "react";

function GetCurrentAddress() {
  const [add, setAdd] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setAdd(data.address);
        });
    });
  }, []);
  return (
    <>
      <p className="font-bold text-yellow-400 h-11 p-2 my-2 w-[2000px] text-capital ml-[50px]">
        {add.state}, {add.state_district}, {add.town}, {add.country}  , {add.neighbourhood}
      </p>
    </>
  );
}

export default GetCurrentAddress;

