"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import gallery_Image_3 from "@/public/ImagePlaceHolder-03.png";
import gallery_Image_1 from "@/public/ImagePlaceHolder00.png";
import gallery_Image_7 from "@/public/ImagePlaceHolder-3.png";
import gallery_Image_5 from "@/public/ImagePlaceHolder-4.png";
import gallery_Image_2 from "@/public/ImagePlaceHolder.png";
import gallery_Image_4 from "@/public/ImagePlaceHolder-5.png";
import gallery_Image_6 from "@/public/galleryimage.png";
import full_View_Image01 from "@/public/FullViewImage01.png";
import full_View_Image02 from "@/public/FullViewImage02.png";
import full_View_Image03 from "@/public/FullViewImage03.png";
import full_View_Image04 from "@/public/FullViewImage04.png";
import full_View_Image05 from "@/public/FullViewImage05.png";
import full_View_Image06 from "@/public/FullViewImage06.png";
import ImageModal from "@/Components/Gallerys/ImageModal";
import Link from "next/link";
const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setSelectedImage("");
    setIsModalOpen(false);
    document.body.classList.remove("modal-open");
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
              hover:-translate-x-3 transition-all ease-in duration-300 outline outline-black cursor-pointer"
              alt="avoidrafa"
              onClick={() => openModal(full_View_Image03)}
            />
          </div>
          <Image
            src={gallery_Image_3}
            className="inline-block  hover:scale-105  col-span-2 transition-all ease-out duration-300 outline outline-black cursor-pointer max-w-full h-full object-cover"
            alt="avoidrafa"
            onClick={() => openModal(full_View_Image01)}
          />
          <Image
            src={gallery_Image_4}
            className=" inline-block  hover:scale-105 max-w-full h-full  transition-all ease-in-out duration-500 outline outline-black cursor-pointer object-cover"
            alt="avoidrafa"
            onClick={() => openModal(full_View_Image05)}
          />
          <Image
            src={gallery_Image_5}
            className=" inline-block  hover:scale-105 max-w-full  h-full transition-all ease-in-out duration-500 outline outline-black cursor-pointer object-cover"
            alt="avoidrafa"
            onClick={() => openModal(full_View_Image02)}
          />
          <Image
            src={gallery_Image_6}
            className=" inline-block  hover:scale-105 max-w-full    transition-all ease-in-out duration-500 outline outline-black cursor-pointer col-span-2 object-cover "
            alt="avoidrafa"
            onClick={() => openModal(full_View_Image06)}
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
            className=" inline-block  hover:scale-105 transition-all ease-in-out duration-500 outline outline-black cursor-pointer"
            onClick={() => openModal(gallery_Image_1)}
          />
          <div>
            <Image
              src={gallery_Image_7}
              className=" transition-all ease-in-out duration-500 outline outline-black cursor-pointer  inline-block  hover:scale-105 md:h-[440px] lg:h-[524px] 2xl:h-[530px]  max-w-full object-cover"
              alt="avoidrafa"
              onClick={() => openModal(full_View_Image04)}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-10">
        <Link href={"/gallery"}>
          <button className="text-white py-1 px-4  border border-white rounded-sm">
            See More
          </button>
        </Link>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={selectedImage}
      />
    </div>
  );
};

export default Gallery;
