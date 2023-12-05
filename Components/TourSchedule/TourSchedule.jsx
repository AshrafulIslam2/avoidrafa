"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import upcoming from "@/public/UPCOMING.png";
import Link from "next/link";

const TourSchedule = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="">
      <h1
        className="text-white text-center  py-5 xl:py-10  sm:text-[93px] 2xl:text-[170px] font-bold "
        id="tour"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        TOUR SCHEDULE
      </h1>
      <div
        className=""
        style={{
          backgroundImage: 'url("/MaskGroup34.png")',
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-8 mx-[24px] 2xl:max-w-[1420px] 2xl:mx-auto py-[34px] ">
          <Image
            src={upcoming}
            alt="background image"
            className="object-fill w-auto h-full"
          />
          <div className="max-h-[1000px] ">
            <div
              className="grid grid-cols-3 items-end py-2 justify-items-start"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="flex flex-col gap-3 items-start">
                <h1 className="uppercase text-red-600  font-semibold text-[12px] lg:text-[16px]">
                  Lets Vibe Barishal Buzz
                </h1>
                <h1 className=" uppercase text-white  font-semibold text-[12px] lg:text-[16px]">
                  Barishal Shilpokola Academy
                </h1>
              </div>
              <div className=" uppercase flex justify-center w-full">
                <h1 className="  text-white  font-semibold text-[12px] lg:text-[16px]">
                  9th December 2023
                </h1>
              </div>
              <div className="flex justify-end w-full">
                <Link
                  href={"https://www.facebook.com/avoidrafa"}
                  target="__blank"
                >
                  <button className=" rounded-sm border border-white py-2 px-[16px] xl:px-[3.3rem]    text-white  font-semibold text-[12px] lg:text-[16px]">
                    MORE DETAILS
                  </button>
                </Link>
              </div>
            </div>
            <hr className="bg-gray-100 2xl:max-w-[1600px] mx-auto" />
            <div
              className="grid grid-cols-3 items-end py-2 justify-items-start"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="flex flex-col gap-3 items-start">
                <h1 className="uppercase text-red-600  font-semibold text-[12px] lg:text-[16px]">
                  Bijoy Ullash
                </h1>
                <h1 className=" uppercase text-white  font-semibold text-[12px] lg:text-[16px]">
                  Jamuna Future Park
                </h1>
              </div>
              <div className=" uppercase flex justify-center w-full">
                <h1 className="  text-white  font-semibold text-[12px] lg:text-[16px]">
                  15th December 2023
                </h1>
              </div>
              <div className="flex justify-end w-full">
                <Link
                  href={"https://www.facebook.com/avoidrafa"}
                  target="__blank"
                >
                  <button className=" rounded-sm border border-white py-2 px-[16px] xl:px-[3.3rem] active:scale-95    text-white  font-semibold text-[12px] lg:text-[16px]">
                    MORE DETAILS
                  </button>
                </Link>
              </div>
            </div>
            <hr className="bg-gray-100 2xl:max-w-[1600px] mx-auto" />
            <div
              className="grid grid-cols-3 items-end py-2 justify-items-start"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="flex flex-col gap-3 items-start">
                <h1 className=" uppercase text-red-600  font-semibold text-[12px] lg:text-[16px] ">
                  AVOIDRAFA U.S.A TOUR
                </h1>
                <h1 className="uppercase text-white  font-semibold text-[12px] lg:text-[16px]">
                  VIBE-annapolis,maryland
                </h1>
              </div>
              <div className="flex justify-center w-full">
                <h1 className="uppercase text-white   font-semibold text-[12px] lg:text-[16px]">
                  10TH JANUARY
                </h1>
              </div>
              <div className="flex justify-end w-full">
                <Link
                  href={"https://www.facebook.com/blacklocustevents"}
                  target="__blank"
                >
                  <button className=" rounded-sm border border-white py-2 px-[16px] xl:px-[3.3rem] active:scale-95    text-white  font-semibold text-[12px] lg:text-[16px]">
                    MORE DETAILS
                  </button>
                </Link>
              </div>
            </div>
            <hr className="bg-gray-100 2xl:max-w-[1600px] mx-auto" />
            <div
              className="grid grid-cols-3 items-end py-2 justify-items-start"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="flex flex-col gap-3 items-start">
                <h1 className=" text-red-600  font-semibold text-[12px] lg:text-[16px] ">
                  AVOIDRAFA U.S.A TOUR
                </h1>
                <h1 className="text-white  font-semibold text-[12px] lg:text-[16px]">
                  TBD-WEST PALM BEACH,FLORIDA
                </h1>
              </div>
              <div className="flex justify-center w-full">
                <h1 className="text-white   font-semibold text-[12px] lg:text-[16px]">
                  13TH JANUARY
                </h1>
              </div>
              <div className="flex justify-end w-full">
                <Link
                  href={"https://www.facebook.com/blacklocustevents"}
                  target="__blank"
                >
                  <button className=" rounded-sm border border-white py-2 px-[16px] xl:px-[3.3rem] active:scale-95    text-white  font-semibold text-[12px] lg:text-[16px]">
                    MORE DETAILS
                  </button>
                </Link>
              </div>
            </div>
            <hr className="bg-gray-100 2xl:max-w-[1600px] mx-auto" />
            <div
              className="grid grid-cols-3 items-end py-2 justify-items-start"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="flex flex-col gap-3 items-start">
                <h1 className=" uppercase text-red-600  font-semibold text-[12px] lg:text-[16px] ">
                  AVOIDRAFA U.S.A TOUR
                </h1>
                <h1 className="uppercase text-white  font-semibold text-[12px] lg:text-[16px]">
                  berkmar high school-lilburn,geordia
                </h1>
              </div>
              <div className="flex justify-center w-full">
                <h1 className="uppercase text-white   font-semibold text-[12px] lg:text-[16px]">
                  20TH JANUARY
                </h1>
              </div>
              <div className="flex justify-end w-full">
                <Link
                  href={"https://www.facebook.com/blacklocustevents"}
                  target="__blank"
                >
                  <button className=" rounded-sm border border-white py-2 px-[16px] xl:px-[3.3rem] active:scale-95    text-white  font-semibold text-[12px] lg:text-[16px]">
                    MORE DETAILS
                  </button>
                </Link>
              </div>
            </div>
            <hr className="bg-gray-100 2xl:max-w-[1600px] mx-auto" />
            <div
              className="grid grid-cols-3 items-end py-2 justify-items-start"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="flex flex-col gap-3 items-start">
                <h1 className=" uppercase text-red-600  font-semibold text-[12px] lg:text-[16px] ">
                  AVOIDRAFA U.S.A TOUR
                </h1>
                <h1 className="uppercase text-white  font-semibold text-[12px] lg:text-[16px]">
                  the summit music hall-columbus,ohio
                </h1>
              </div>
              <div className="flex justify-center w-full">
                <h1 className="uppercase text-white   font-semibold text-[12px] lg:text-[16px]">
                  24TH JANUARY
                </h1>
              </div>
              <div className="flex justify-end w-full">
                <Link
                  href={"https://www.facebook.com/blacklocustevents"}
                  target="__blank"
                >
                  <button className=" rounded-sm border border-white py-2 px-[16px] xl:px-[3.3rem] active:scale-95    text-white  font-semibold text-[12px] lg:text-[16px]">
                    MORE DETAILS
                  </button>
                </Link>
              </div>
            </div>
            <hr className="bg-gray-100 2xl:max-w-[1600px] mx-auto" />
            <div
              className="grid grid-cols-3 items-end py-2 justify-items-start"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="flex flex-col gap-3 items-start">
                <h1 className=" uppercase text-red-600  font-semibold text-[12px] lg:text-[16px] ">
                  AVOIDRAFA U.S.A TOUR
                </h1>
                <h1 className="uppercase text-white  font-semibold text-[12px] lg:text-[16px]">
                  purdue university-west lafayette,indiana
                </h1>
              </div>
              <div className="flex justify-center w-full">
                <h1 className="uppercase text-white   font-semibold text-[12px] lg:text-[16px]">
                  28TH JANUARY
                </h1>
              </div>
              <div className="flex justify-end w-full">
                <Link
                  href={"https://www.facebook.com/blacklocustevents"}
                  target="__blank"
                >
                  <button className=" rounded-sm border border-white py-2 px-[16px] xl:px-[3.3rem] active:scale-95    text-white  font-semibold text-[12px] lg:text-[16px]">
                    MORE DETAILS
                  </button>
                </Link>
              </div>
            </div>
            <hr className="bg-gray-100 2xl:max-w-[1600px] mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourSchedule;
