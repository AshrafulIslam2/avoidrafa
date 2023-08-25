import Image from "next/image";
import React from "react";
import gallery_Image_3 from "@/public/ImagePlaceHolder-1.png";
import gallery_Image_1 from "@/public/ImagePlaceHolder-2.png";
import gallery_Image_7 from "@/public/ImagePlaceHolder-3.png";
import gallery_Image_5 from "@/public/ImagePlaceHolder-4.png";
import gallery_Image_2 from "@/public/ImagePlaceHolder.png";
import gallery_Image_4 from "@/public/ImagePlaceHolder-5.png";
import gallery_Image_6 from "@/public/ImagePlaceHolder-6.png";
const Gallery = () => {
  return (
    <div
      className="bg-black  md:w-[880px] lg:w-[940px] xl:w-[1150px] 2xl:w-[1320px] mx-auto"
      id="gallery"
    >
      <div className="grid grid-cols-12">
        <div className="grid grid-cols-2 col-span-8">
          <h1 className=" col-span-2  text-white font-bold md:text-[100px] lg:text-[150px] 2xl:text-[170px] inline-block ">
            Gallery
          </h1>
          <div className="flex justify-end col-span-2">
            <Image
              src={gallery_Image_2}
              className="hover:scale-105 hover:-translate-x-5 hover:-translate-y-5 transition-all ease-in-out duration-500 outline outline-black"
              alt="avoid rafa"
            />
          </div>
          <Image
            src={gallery_Image_3}
            className="  col-span-2 hover:scale-105  hover:-translate-x-8 transition-all ease-in-out duration-500 outline outline-black max-w-full h-full object-cover"
            alt="avoid rafa"
          />
          <Image
            src={gallery_Image_4}
            className=" inline-block  max-w-full h-full  hover:-translate-x-10  transition-all ease-in-out duration-500 outline outline-black object-cover"
            alt="avoid rafa"
          />
          <Image
            src={gallery_Image_5}
            className=" inline-block  max-w-full  h-full hover:-translate-x-8  transition-all ease-in-out duration-500 outline outline-black object-cover"
            alt="avoid rafa"
          />
          <Image
            src={gallery_Image_6}
            className=" inline-block  max-w-full  hover:scale-105 hover:-translate-x-10  transition-all ease-in-out duration-500 outline outline-black col-span-2 object-cover "
            alt="avoid rafa"
          />

          {/* <Image src={gallery_Image_4} alt="avoid rafa" />
        <Image src={gallery_Image_3} alt="avoid rafa" />
        <Image src={gallery_Image_7} alt="avoid rafa" />
        <Image src={gallery_Image_6} alt="avoid rafa" /> 
        <Image src={gallery_Image_5} alt="avoid rafa" /> */}
        </div>
        <div className="col-span-4">
          <Image
            src={gallery_Image_1}
            alt="avoid rafa"
            className=" inline-block hover:scale-105 hover:-translate-y-8 transition-all ease-in-out duration-500 outline outline-black"
          />
          <div>
            <Image
              src={gallery_Image_7}
              className=" hover:scale-105  hover:translate-y-8 transition-all ease-in-out duration-500 outline outline-black  inline-block  md:h-[440px] lg:h-[524px] 2xl:h-[565px]  max-w-full object-cover"
              alt="avoid rafa"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
