import { useState,useEffect } from "react";

// const { useState } = require("react");

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  //try to check online
  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("offline", () => {
      setOnlineStatus(true);
    });
  }, []);

  //boolean value
  return onlineStatus;
};
export default useOnlineStatus;
