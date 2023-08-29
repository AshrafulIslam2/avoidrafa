"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

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
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/MaskGroup34.png"
            alt="background image"
            className="blur opacity-1"
            fill
          />
        </div>

        <div className="grid grid-cols-12  gap-8 mx-[24px] 2xl:max-w-[1420px] 2xl:mx-auto">
          <Image
            src="/UPCOMING.png"
            alt="background image"
            className="z-10 relative md:col-span-6 lg:col-span-6 xl:col-span-5  object-fill "
            fill
          />
          <div className=" md:col-span-6 lg:col-span-6 xl:col-span-7 relative z-10  h-">
            <div
              className="grid grid-cols-3 items-end py-2 justify-items-start"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="flex flex-col gap-3 items-start">
                <h1 className=" text-red-600  font-semibold text-[20px] lg:text-[16px] ">
                  CHATTAGRAM ROCK FAST
                </h1>
                <h1 className="text-white  font-semibold text-[20px] lg:text-[16px]">
                  DHAKA UNIVERSITY
                </h1>
              </div>
              <div className="flex justify-center w-full">
                <h1 className="text-white   font-semibold text-[20px] lg:text-[16px]">
                  31 DECEMBER 2023
                </h1>
              </div>
              <div className="flex justify-end w-full">
                <button className=" rounded-sm border border-white py-2 lg:px-[1.6rem] xl:px-[3.3rem] 2xl:px-[4.3rem]   text-white  font-semibold text-[20px] lg:text-[16px]">
                  BUY TICKETS
                </button>
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
                <h1 className=" text-red-600  font-semibold text-[20px] lg:text-[16px]">
                  DHAKA ROCK FAST
                </h1>
                <h1 className="  text-white  font-semibold text-[20px] lg:text-[16px]">
                  DHAKA UNIVERSITY
                </h1>
              </div>
              <div className="flex justify-center w-full">
                <h1 className="  text-white  font-semibold text-[20px] lg:text-[16px]">
                  1 OCTOBAR 2023
                </h1>
              </div>
              <div className="flex justify-end w-full">
                <button className=" rounded-sm border border-white py-2 lg:px-[1.6rem] xl:px-[3.3rem] 2xl:px-[4.3rem]   text-white  font-semibold text-[20px] lg:text-[16px]">
                  BUY TICKETS
                </button>
              </div>
            </div>
            <hr className="bg-gray-100 2xl:max-w-[1600px] mx-auto" />
            <div
              className="grid grid-cols-3 items-end py-2 justify-items-start"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="flex flex-col gap-3">
                <h1 className=" text-red-600  font-semibold text-[20px] lg:text-[16px]">
                  CHATTAGRAM ROCK FAST
                </h1>
                <h1 className="  text-white  font-semibold text-[20px] lg:text-[16px]">
                  M.A AZIZ STADIUM
                </h1>
              </div>
              <div className="flex justify-center w-full">
                <h1 className="text-white text-start  font-semibold text-[20px] lg:text-[16px]">
                  21 MARCH 2024
                </h1>
              </div>
              <div className="flex justify-end w-full">
                <button className=" rounded-sm border border-white py-2 lg:px-[1.6rem] xl:px-[3.3rem] 2xl:px-[4.3rem]   text-white  font-semibold text-[20px] lg:text-[16px]">
                  BUY TICKETS
                </button>
              </div>
            </div>
            <hr className="bg-gray-100 2xl:max-w-[1600px] mx-auto" />
            <div
              className="grid grid-cols-3 items-end py-2 justify-items-start"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="flex flex-col gap-3">
                <h1 className=" text-red-600  font-semibold text-[20px] lg:text-[16px]">
                  KHULNA ROCK FAST
                </h1>
                <h1 className="  text-white  font-semibold text-[20px] lg:text-[16px]">
                  KHULNA STADIUM
                </h1>
              </div>
              <div className="flex justify-center w-full">
                <h1 className="  text-white  font-semibold text-[20px] lg:text-[16px]">
                  05 MAY 2024
                </h1>
              </div>
              <div className="flex justify-end w-full">
                <button className=" rounded-sm border border-white py-2 lg:px-[1.6rem] xl:px-[3.3rem] 2xl:px-[4.3rem]   text-white  font-semibold text-[20px] lg:text-[16px]">
                  BUY TICKETS
                </button>
              </div>
            </div>
            <hr className="bg-gray-100 2xl:max-w-[1600px] mx-auto" />
            <div
              className="grid grid-cols-3 items-end py-2 justify-items-start"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="flex flex-col gap-3">
                <h1 className=" text-red-600  font-semibold text-[20px] lg:text-[16px]">
                  DHAKA ROCK FAST
                </h1>
                <h1 className="  text-white  font-semibold text-[20px] lg:text-[16px]">
                  ARMY STADIUM
                </h1>
              </div>
              <div className="flex justify-center w-full">
                <h1 className="  text-white  font-semibold text-[20px] lg:text-[16px]">
                  1 AUGUST 2024
                </h1>
              </div>
              <div className="flex justify-end w-full">
                <button className=" rounded-sm border border-white py-2 lg:px-[1.6rem] xl:px-[3.3rem] 2xl:px-[4.3rem]   text-white  font-semibold text-[20px] lg:text-[16px]">
                  BUY TICKETS
                </button>
              </div>
            </div>
            <hr className="bg-gray-100 2xl:max-w-[1600px] mx-auto" />
            <div
              className="grid grid-cols-3 items-end py-2 justify-items-start"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="flex flex-col gap-3">
                <h1 className=" text-red-600  font-semibold text-[20px] lg:text-[16px]">
                  DHAKA ROCK FAST
                </h1>
                <h1 className="  text-white  font-semibold text-[20px] lg:text-[16px]">
                  ARMY STADIUM
                </h1>
              </div>
              <div className="flex justify-center w-full">
                <h1 className="  text-white  font-semibold text-[20px] lg:text-[16px]">
                  2 JULY 2024
                </h1>
              </div>
              <div className="flex justify-end w-full">
                <button className=" rounded-sm border border-white py-2 lg:px-[1.6rem] xl:px-[3.3rem] 2xl:px-[4.3rem]   text-white  font-semibold text-[20px] lg:text-[16px]">
                  BUY TICKETS
                </button>
              </div>
            </div>
            <hr className="bg-gray-100 2xl:max-w-[1600px] mx-auto" />
            <div
              className="grid grid-cols-3 items-end py-2 justify-items-start"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="flex flex-col gap-3">
                <h1 className=" text-red-600  font-semibold text-[20px] lg:text-[16px]">
                  DHAKA ROCK FAST
                </h1>
                <h1 className="  text-white  font-semibold text-[20px] lg:text-[16px]">
                  ARMY STADIUM
                </h1>
              </div>
              <div className="flex justify-center w-full">
                <h1 className="  text-white  font-semibold text-[20px] lg:text-[16px]">
                  21 AUGUST 2023
                </h1>
              </div>
              <div className="flex justify-end w-full">
                <button className=" rounded-sm border border-white py-2 lg:px-[1.6rem] xl:px-[3.3rem] 2xl:px-[4.3rem]   text-white  font-semibold text-[20px] lg:text-[16px]">
                  BUY TICKETS
                </button>
              </div>
            </div>
            <hr className="bg-gray-100 2xl:max-w-[1600px] mx-auto" />
            <div
              className="grid grid-cols-3 items-end py-2 justify-items-start"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="flex flex-col gap-3">
                <h1 className=" text-red-600  font-semibold text-[20px] lg:text-[16px]">
                  DHAKA ROCK FAST
                </h1>
                <h1 className="  text-white  font-semibold text-[20px] lg:text-[16px]">
                  DHAKA UNIVERSITY
                </h1>
              </div>
              <div className="flex justify-center w-full">
                <h1 className="  text-white  font-semibold text-[20px] lg:text-[16px]">
                  21 AUGUST 2023
                </h1>
              </div>
              <div className="flex justify-end w-full">
                <button className=" rounded-sm border border-white py-2 lg:px-[1.6rem] xl:px-[3.3rem] 2xl:px-[4.3rem]   text-white  font-semibold text-[20px] lg:text-[16px]">
                  BUY TICKETS
                </button>
              </div>
            </div>
            <hr className="bg-gray-100 2xl:max-w-[1600px] mx-auto" />
            <div
              className="grid grid-cols-3 items-end py-2 justify-items-start"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="flex flex-col gap-3">
                <h1 className=" text-red-600  font-semibold text-[20px] lg:text-[16px]">
                  DHAKA ROCK FAST
                </h1>
                <h1 className="  text-white  font-semibold text-[20px] lg:text-[16px]">
                  DHAKA UNIVERSITY
                </h1>
              </div>
              <div className="flex justify-center w-full">
                <h1 className="  text-white  font-semibold text-[20px] lg:text-[16px]">
                  06 APRIL 2023
                </h1>
              </div>
              <div className="flex justify-end w-full">
                <button className=" rounded-sm border border-white py-2 lg:px-[1.6rem] xl:px-[3.3rem] 2xl:px-[4.3rem]   text-white  font-semibold text-[20px] lg:text-[16px]">
                  BUY TICKETS
                </button>
              </div>
            </div>
            <hr className="bg-gray-100 2xl:max-w-[1600px] mx-auto" />
            <div
              className="grid grid-cols-3 items-end py-2 justify-items-start"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="flex flex-col gap-3">
                <h1 className=" text-red-600  font-semibold text-[20px] lg:text-[16px]">
                  DHAKA BIG SHOT
                </h1>
                <h1 className="  text-white  font-semibold text-[20px] lg:text-[16px]">
                  MIRPUR STADIUM
                </h1>
              </div>
              <div className="flex justify-center w-full">
                <h1 className="  text-white  font-semibold text-[20px] lg:text-[16px]">
                  08 JULY 2024
                </h1>
              </div>
              <div className="flex justify-end w-full">
                <button className=" rounded-sm border border-white py-2 lg:px-[1.6rem] xl:px-[3.3rem] 2xl:px-[4.3rem]   text-white  font-semibold text-[20px] lg:text-[16px]">
                  BUY TICKETS
                </button>
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
