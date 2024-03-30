import { useEffect, useState } from "react";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import Body from "./Body";

function Home({slides}) {

  const [selectedImage, setSelectedImage] = useState(0);

  const [allImages, setAllImages] = useState(slides);

  useEffect(() => {
    setInterval(() => {
      setSelectedImage(selectedImage => selectedImage < 3 ? selectedImage + 1 : 0)
    }, 3000)
  }, [])

  return (
    <>
    <div className="mainslide ">


      <img className="imageslide " alt={`image`}  src={allImages[selectedImage]} /> <br />
      <div className="">
      <button className="btn1"
        onClick={() => {
          if (selectedImage > 0)
            setSelectedImage(selectedImage - 1)
        }}
      ><HiOutlineArrowSmLeft /></button>
      <button className="btn2 "
        onClick={() => {
          if (selectedImage < allImages.length - 1)
            setSelectedImage(selectedImage + 1)
        }}
      ><HiOutlineArrowSmRight /></button>
      </div>
    </div>
    <Body/>
    </>
  );
}

export default Home;
