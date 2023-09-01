"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import gallery_Image_3 from "@/public/ImagePlaceHolder-1.png";
import gallery_Image_1 from "@/public/ImagePlaceHolder-2.png";
import gallery_Image_7 from "@/public/ImagePlaceHolder-3.png";
import gallery_Image_5 from "@/public/ImagePlaceHolder-4.png";
import gallery_Image_2 from "@/public/ImagePlaceHolder.png";
import gallery_Image_4 from "@/public/ImagePlaceHolder-5.png";
import gallery_Image_6 from "@/public/galleryimage.png";
import ImageModal from "./ImageModal";
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const openModal = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="bg-[#161616]  md:w-[880px] lg:w-[940px] xl:w-[1150px] 2xl:w-[1320px] mx-auto"
      id="gallery"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      {/* {selectedImage && (
        <ImageModal src={selectedImage} alt="Full Image" onClose={closeModal} />
      )} */}
      <div className="grid grid-cols-12">
        <div className="grid grid-cols-2 col-span-8">
          <h1
            className=" col-span-2  text-white font-bold md:text-[100px] lg:text-[150px] 2xl:text-[170px] inline-block  hover:scale-105"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            Gallery
          </h1>
          <div className="flex justify-end col-span-2">
            <Image
              src={gallery_Image_2}
              className=" inline-block  hover:scale-105 hover:-translate-y-2
              hover:-translate-x-3 transition-all ease-in duration-300 outline outline-black"
              alt="avoidrafa"
              // onClick={() => openModal(gallery_Image_2)}
            />
          </div>
          <Image
            src={gallery_Image_3}
            className="inline-block  hover:scale-105  col-span-2 transition-all ease-out duration-300 outline outline-black max-w-full h-full object-cover"
            alt="avoidrafa"
          />
          <Image
            src={gallery_Image_4}
            className=" inline-block  hover:scale-105 max-w-full h-full  transition-all ease-in-out duration-500 outline outline-black object-cover"
            alt="avoidrafa"
          />
          <Image
            src={gallery_Image_5}
            className=" inline-block  hover:scale-105 max-w-full  h-full transition-all ease-in-out duration-500 outline outline-black object-cover"
            alt="avoidrafa"
          />
          <Image
            src={gallery_Image_6}
            className=" inline-block  hover:scale-105 max-w-full    transition-all ease-in-out duration-500 outline outline-black col-span-2 object-   "
            alt="avoidrafa"
          />

          {/* <Image src={gallery_Image_4} alt="avoidrafa" />
        <Image src={gallery_Image_3} alt="avoidrafa" />
        <Image src={gallery_Image_7} alt="avoidrafa" />
        <Image src={gallery_Image_6} alt="avoidrafa" /> 
        <Image src={gallery_Image_5} alt="avoidrafa" /> */}
        </div>
        <div className="col-span-4">
          <Image
            src={gallery_Image_1}
            alt="avoidrafa"
            className=" inline-block  hover:scale-105 transition-all ease-in-out duration-500 outline outline-black"
          />
          <div>
            <Image
              src={gallery_Image_7}
              className=" transition-all ease-in-out duration-500 outline outline-black  inline-block  hover:scale-105 md:h-[440px] lg:h-[524px] 2xl:h-[565px]  max-w-full object-cover"
              alt="avoidrafa"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
