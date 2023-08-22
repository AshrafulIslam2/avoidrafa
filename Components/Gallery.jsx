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
    <div className="bg-black  md:w-[880px] lg:w-[940px] xl:w-[1150px] 2xl:w-[1320px] mx-auto">
      <div className="grid grid-cols-12">
        <div className="grid grid-cols-2 col-span-8">
          <h1 className=" col-span-2 gallery text-white font-bold md:text-[100px] lg:text-[150px] 2xl:text-[170px] inline-block ">
            Gallery
          </h1>
          <div className="flex justify-end col-span-2">
            <Image
              src={gallery_Image_2}
              className="border-4 border-black hover:scale-110 hover:border-white transition-all ease-in-out duration-500"
              alt="avoid rafa"
            />
          </div>
          <Image
            src={gallery_Image_3}
            className="border-4 border-black  inline-block  col-span-2 hover:scale-110 hover:border-white transition-all ease-in-out duration-500 max-w-full h-full "
            alt="avoid rafa"
          />
          <Image
            src={gallery_Image_4}
            className="border-4  border-black inline-block  max-w-full h-full  hover:scale-110 hover:border-white transition-all ease-in-out duration-500"
            alt="avoid rafa"
          />
          <Image
            src={gallery_Image_5}
            className="border-4  border-black inline-block  max-w-full  h-full hover:scale-110 hover:border-white transition-all ease-in-out duration-500"
            alt="avoid rafa"
          />
          <Image
            src={gallery_Image_6}
            className="border-4  border-black inline-block  max-w-full  hover:scale-110  hover:border-white transition-all ease-in-out duration-500 col-span-2 "
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
            className="border-4 border-black hover:border-white inline-block hover:scale-110 transition-all ease-in-out duration-500"
          />
          <div>
            <Image
              src={gallery_Image_7}
              className=" border-4 border-black hover:scale-110 hover:border-white transition-all ease-in-out duration-500  inline-block  md:h-[440px] lg:h-[524px] 2xl:h-[565px]  max-w-full "
              alt="avoid rafa"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
