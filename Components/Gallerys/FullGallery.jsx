"use client";
import React, { useEffect } from "react";
import VideoGallery from "@/Components/Gallerys/VideoGallery";
import ImageGallery from "@/Components/Gallerys/ImagelGallery";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
function FullGallery() {
  const [showPhotoGrid, setShowPhotoGrid] = useState(true);
  const toggleGrid = (gallery) => {
    setShowPhotoGrid(gallery);
  };
  useEffect(() => {
    AOS.init();
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    scrollToTop();
  }, []);
  return (
    <div>
      {" "}
      <h1
        className="text-[254px] text-white lg:ml-[32px] 2xl:ml-[105px]  2xl:pl-[50px] mr-[327px]"
        data-aos="zoom-out-up"
        data-aos-duration="1000"
      >
        Gallery
      </h1>
      <div className="flex gap-20 mx-[51px] 2xl:mx-[170px] my-[24px] ">
        <button
          onClick={() => toggleGrid(true)}
          className={` ${
            showPhotoGrid ? "text-[#FF0000]" : "text-white"
          } text-[27px]  font-medium hover:text-[#FF0000]`}
        >
          Photo{" "}
        </button>
        <button
          onClick={() => toggleGrid(false)}
          className={`${
            showPhotoGrid ? "text-white" : "text-[#FF0000]"
          }  text-[27px] text-white font-medium hover:text-[#FF0000]`}
        >
          Video
        </button>
      </div>
      {showPhotoGrid ? <ImageGallery /> : <VideoGallery />}
    </div>
  );
}

export default FullGallery;
