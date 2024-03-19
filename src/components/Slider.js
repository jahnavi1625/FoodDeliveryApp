import React, { useState } from "react";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
// import { Images } from "../assets/Images";
import  "../index.css";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const length = slides.length;
  const numPerPage = 3;
  const nextSlide = () => {
    // setCurrent(current === length - 1 ? 0 : current + 1);
    // setCurrent(current === length - 1 ? current=0 : current + numPerPage);
    setCurrent(current + numPerPage < length ? current + numPerPage : 0);
  };

  const prevSlide = () => {
    // setCurrent(current === 0 ? length - 1 : current - 1);
    if(current>=3){
      setCurrent(current-3);
    }
    else{
      setCurrent(0);
    }
  };
    // setCurrent((prevIndex)=>{
    //   let newIndex=prevIndex-3;
    //   if(newIndex<0){
    //     newIndex=length-3;
    //   }
    //   return newIndex;
    // });




  //   setCurrent((current) => {
  //     if (current === 0) {
  //       return current - numPerPage < 0 ? 0 : current - numPerPage;
  //     } else {
  //       return current - 1;
  //     }
  //   });
  //   current -numPerPage : length-numPerPage
  // };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="BgImage flex h-80 shadow-lg  ">
      {/* <div>
        {Images?.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img
                  src={slide.image}
                  alt={`image ${index}`}
                  className=" p-2 w-[1800px] m-auto h-72"
                />
              )}
            </div>
          );
        })}
      </div> */}

      <div className="absolute">
        <button
          className="  flex justify-center mt-48 ml-20 bg-blue-600  text-white h-10 w-10 items-center  "
          onClick={prevSlide}
        >
          <HiOutlineArrowSmLeft />
        </button>
      </div>
      <div className="flex ml-24 p-4 ">
        {slides.slice(current, current - numPerPage).map((image, index) => (
          <img
            className="transform ml-6  mt-8 h-80 p-4 w-[400px] shadow-lg rounded-s-3xl"
            key={index}
            src={image.image}
            alt={`Slice ${current + index}`}
          />
        ))}
      </div>
      <div className="absolute">
        <button
          className="flex justify-center ml-[1400px] mt-48 bg-blue-600 text-white h-10 w-10 items-center  "
          // onClick={() => setCurrent(nextSlide)}
          onClick={nextSlide}
        >
          <HiOutlineArrowSmRight />
        </button>
      </div>
    </div>
  );
};

export default Slider
