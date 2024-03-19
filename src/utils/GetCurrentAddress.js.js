// import React, { useEffect, useState } from "react";

// const LocationInput = () => {
// const [location, setLocation] = useState({
//   loaded: false,
//   lat: "",
//   lng: "",
// });

// const onSuccess = (location) => {
//   setLocation({
//     loaded: true,
//     coordinated: {
//       lat: location.coords.latitude,
//       lng: location.coords.longitude,
//     },
//   });
// };

// const onError = (error) => {
//   setLocation({
//     loaded: true,
//     error,
//   });
// };

// useEffect(() => {
//   if (!("geolocation" in navigator)) {
//     onError({
//       code: 0,
//       message: "Geaolocatiojn not supported",
//     });
//   }
//   navigator.geolocation.getCurrentPosition(onSuccess, onError);
// }, []);
// console.log(location);
// // setLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
// return location;

import React, { useEffect, useState } from "react";

function GetCurrentAddress() {
  const [add, setAdd] = useState("");
  // `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      //   console.log(latitude,longitude);
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.address);
          setAdd(data.address);
        });
    });
  }, []);
  return (
    <>
      <p className="font-bold text-yellow-400 h-11 p-2 my-2 w-[2000px] text-capital ml-[50px]">
        Location : {add.state}, {add.state_district}, {add.town}, {add.country}  , {add.neighbourhood}
      </p>
    </>
  );
}

export default GetCurrentAddress;

//return (
// <div>
//   <button
//     className="bg-yellow-400 rounded-sm font-bold h-11 p-2"
//     onClick={getLocation}
//   >
//     Get Location
//   </button>
//   <input
//     className="inline border border-gray-300 mr-8  my-2 w-[600px] h-11 shadow-lg"
//     type="text"
//     value={location}
//   />
// </div>
// );
// };

// export default LocationInput;
