import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Body = () => {
  const [resInfo, setResInfo] = useState([]);
  const [resInfo2, setResInfo2] = useState([]);
  const [resInfo3, setResInfo3] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
    fetchData2();
    fetchData3();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://localhost:3002/About");
    console.log(data);
    const newData = await data.json();
    console.log(newData);
    setResInfo(newData);

  };

  const fetchData2 = async () => {
    const data = await fetch("http://localhost:3002/About2");
    console.log(data);
    const newData = await data.json();
    console.log(newData);
    setResInfo2(newData);

  };

  const fetchData3 = async () => {
    const data = await fetch("http://localhost:3002/About3");
    console.log(data);
    const newData = await data.json();
    console.log(newData);
    setResInfo3(newData);

  };

  const params = useParams();
  // console.log(params);
  const { id } = params;
  const handleClick = () => {
    navigate(`/restaurant`);
  };
  const handleClick2 = () => {
    navigate(`/restaurant2`);
  };
  const handleClick3 = () => {
    navigate(`/restaurant3`);
  };

  return (
    <>
    <div className="body ">
      <div className="body2  ">
        <Link to="/restaurant/1" className="link">
        
        <div
          className="card1"
          onClick={handleClick}
        >
          {resInfo.map(
            ({
              id,
              image,
              Name,
              Ratings,
              Locality,
              AreaName,
              City,
              Cuisines,
            }) => (
              <div key={id} className="c1 ">
                <img src={image} className="c1img " alt="grandma's cafe" />
                <div className=" div1 ">
                  <p className="p  ">{Name}</p>
                  <p className="ps">{Ratings} stars</p>
                  <p className="p1">{Locality}</p>
                  <p className="p2">{AreaName}</p>
                  <p className="p3">{City}</p>
                  <p className="p4">{Cuisines.join(" , ")}</p>
                </div>
              </div>
            )
          )}
        </div>
        
        </Link>

        <Link to="/restaurant2/2" className="link">
        
        <div
          className="card2"
          onClick={handleClick2}
        >
          {resInfo2.map(
            ({
              id,
              image,
              Name,
              Ratings,
              Locality,
              AreaName,
              City,
              Cuisines,
            }) => (
              <div key={id} className="c2">
                <img src={image} className="c2img " alt="grandma's cafe" />
                <div className=" div1">
                  <p className="p ">{Name}</p>
                  <p className="ps">{Ratings} stars</p>
                  <p className="p1">{Locality}</p>
                  <p className="p2">{AreaName}</p>
                  <p className="p3">{City}</p>
                  <p className="p4">{Cuisines.join(" , ")}</p>
                </div>
              </div>
            )
          )}
        </div>
        
        </Link>

        <Link to="/restaurant3/3" className="link">
        
        <div
          className="card3 "
          onClick={handleClick3}
        >
          {resInfo3.map(
            ({
              id,
              image,
              Name,
              Ratings,
              Locality,
              AreaName,
              City,
              Cuisines,
            }) => (
              <div key={id} className="c3 " >
                <img src={image} className="card1img " alt="grandma's cafe" />
                <div className="div1 ">
                  <p className="p">{Name}</p>
                  <p className="ps">{Ratings} stars</p>
                  <p className="p1">{Locality}</p>
                  <p className="p2">{AreaName}</p>
                  <p className="p3">{City}</p>
                  <p className="p4">{Cuisines.join(" , ")}</p>
                </div>
              </div>
            )
          )}
        </div>
        
        </Link>
      </div>
      </div>
      <Footer/>
    </>
  );
};
export default Body;
