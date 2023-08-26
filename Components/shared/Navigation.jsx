import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="bg-black flex items-center justify-around top-0 sticky z-40 ">
      <Image
        src="/Group_73.svg"
        alt="Logo"
        width={30}
        height={30}
        className="md:w-[128px] xl:w-[180px] h-[4rem] ml-4"
      />

      <div className="">
        <Link
          href={"#/"}
          className="text-white sm:px-[30px] lg:px-[40px] py-[6px] hover:bg-[#ffffff14] rounded-md hover:border hover:border-white text-[14px] xl:text-base p"
        >
          HOME
        </Link>
        <Link
          href={"#news"}
          className="text-white sm:px-[30px] lg:px-[40px] py-[6px] hover:bg-[#ffffff14] rounded-md hover:border hover:border-white text-[14px] xl:text-base"
        >
          LATEST
        </Link>
        <Link
          href={"#tour"}
          className="text-white sm:px-[30px] lg:px-[40px] py-[6px] hover:bg-[#ffffff14] rounded-md hover:border hover:border-white text-[14px] xl:text-base"
        >
          TOUR
        </Link>
        <Link
          href={"#album"}
          className="text-white sm:px-[30px] lg:px-[40px] py-[6px] hover:bg-[#ffffff14] rounded-md hover:border hover:border-white text-[14px] xl:text-base"
        >
          ALBUM
        </Link>
        <Link
          href={"#gallery"}
          className="text-white sm:px-[30px] lg:px-[40px] py-[6px] hover:bg-[#ffffff14] rounded-md hover:border hover:border-white text-[14px] xl:text-base"
        >
          GALLERY
        </Link>
        <Link
          href={"#products"}
          className="text-white sm:px-[30px] lg:px-[40px] py-[6px] hover:bg-[#ffffff14] rounded-md hover:border hover:border-white text-[14px] xl:text-base"
        >
          MERCH
        </Link>
        <Link
          href={"#contact"}
          className="text-white sm:px-[30px] lg:px-[20px] py-[6px] hover:bg-[#ffffff14] rounded-md hover:border mr-3 xl:mr-0 hover:border-white text-[14px] xl:text-base"
        >
          BOOKING
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Navigation;
