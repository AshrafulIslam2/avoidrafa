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
        <div className="relative z-10  h-full mx-[24px] 2xl:mx-[150px]">
          <div
            className="grid grid-cols-3 items-end py-2 justify-items-start"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="flex flex-col gap-3 items-start">
              <h1 className=" text-red-600  font-semibold text-[20px] ">
                CHATTAGRAM ROCK FAST
              </h1>
              <h1 className="text-white  font-semibold text-[20px]">
                DHAKA UNIVERSITY
              </h1>
            </div>
            <div className="flex justify-center w-full">
              <h1 className="text-white   font-semibold text-[20px]">
                31 DECEMBER 2023
              </h1>
            </div>
            <div className="flex justify-end w-full">
              <button className=" rounded-sm border border-white py-2 px-[3.3rem] 2xl:px-[6.3rem]   text-white  font-semibold text-[20px]">
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
              <h1 className=" text-red-600  font-semibold text-[20px]">
                DHAKA ROCK FAST
              </h1>
              <h1 className="  text-white  font-semibold text-[20px]">
                DHAKA UNIVERSITY
              </h1>
            </div>
            <div className="flex justify-center w-full">
              <h1 className="  text-white  font-semibold text-[20px]">
                1 OCTOBAR 2023
              </h1>
            </div>
            <div className="flex justify-end w-full">
              <button className=" rounded-sm border border-white py-2 px-[3.3rem] 2xl:px-[6.3rem]   text-white  font-semibold text-[20px]">
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
              <h1 className=" text-red-600  font-semibold text-[20px]">
                CHATTAGRAM ROCK FAST
              </h1>
              <h1 className="  text-white  font-semibold text-[20px]">
                M.A AZIZ STADIUM
              </h1>
            </div>
            <div className="flex justify-center w-full">
              <h1 className="text-white text-start  font-semibold text-[20px]">
                21 MARCH 2024
              </h1>
            </div>
            <div className="flex justify-end w-full">
              <button className=" rounded-sm border border-white py-2 px-[3.3rem] 2xl:px-[6.3rem]   text-white  font-semibold text-[20px]">
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
              <h1 className=" text-red-600  font-semibold text-[20px]">
                KHULNA ROCK FAST
              </h1>
              <h1 className="  text-white  font-semibold text-[20px]">
                KHULNA STADIUM
              </h1>
            </div>
            <div className="flex justify-center w-full">
              <h1 className="  text-white  font-semibold text-[20px]">
                05 MAY 2024
              </h1>
            </div>
            <div className="flex justify-end w-full">
              <button className=" rounded-sm border border-white py-2 px-[3.3rem] 2xl:px-[6.3rem]   text-white  font-semibold text-[20px]">
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
              <h1 className=" text-red-600  font-semibold text-[20px]">
                DHAKA ROCK FAST
              </h1>
              <h1 className="  text-white  font-semibold text-[20px]">
                ARMY STADIUM
              </h1>
            </div>
            <div className="flex justify-center w-full">
              <h1 className="  text-white  font-semibold text-[20px]">
                1 AUGUST 2024
              </h1>
            </div>
            <div className="flex justify-end w-full">
              <button className=" rounded-sm border border-white py-2 px-[3.3rem] 2xl:px-[6.3rem]   text-white  font-semibold text-[20px]">
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
              <h1 className=" text-red-600  font-semibold text-[20px]">
                DHAKA ROCK FAST
              </h1>
              <h1 className="  text-white  font-semibold text-[20px]">
                ARMY STADIUM
              </h1>
            </div>
            <div className="flex justify-center w-full">
              <h1 className="  text-white  font-semibold text-[20px]">
                2 JULY 2024
              </h1>
            </div>
            <div className="flex justify-end w-full">
              <button className=" rounded-sm border border-white py-2 px-[3.3rem] 2xl:px-[6.3rem]   text-white  font-semibold text-[20px]">
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
              <h1 className=" text-red-600  font-semibold text-[20px]">
                DHAKA ROCK FAST
              </h1>
              <h1 className="  text-white  font-semibold text-[20px]">
                ARMY STADIUM
              </h1>
            </div>
            <div className="flex justify-center w-full">
              <h1 className="  text-white  font-semibold text-[20px]">
                21 AUGUST 2023
              </h1>
            </div>
            <div className="flex justify-end w-full">
              <button className=" rounded-sm border border-white py-2 px-[3.3rem] 2xl:px-[6.3rem]   text-white  font-semibold text-[20px]">
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
              <h1 className=" text-red-600  font-semibold text-[20px]">
                DHAKA ROCK FAST
              </h1>
              <h1 className="  text-white  font-semibold text-[20px]">
                DHAKA UNIVERSITY
              </h1>
            </div>
            <div className="flex justify-center w-full">
              <h1 className="  text-white  font-semibold text-[20px]">
                21 AUGUST 2023
              </h1>
            </div>
            <div className="flex justify-end w-full">
              <button className=" rounded-sm border border-white py-2 px-[3.3rem] 2xl:px-[6.3rem]   text-white  font-semibold text-[20px]">
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
              <h1 className=" text-red-600  font-semibold text-[20px]">
                DHAKA ROCK FAST
              </h1>
              <h1 className="  text-white  font-semibold text-[20px]">
                DHAKA UNIVERSITY
              </h1>
            </div>
            <div className="flex justify-center w-full">
              <h1 className="  text-white  font-semibold text-[20px]">
                06 APRIL 2023
              </h1>
            </div>
            <div className="flex justify-end w-full">
              <button className=" rounded-sm border border-white py-2 px-[3.3rem] 2xl:px-[6.3rem]   text-white  font-semibold text-[20px]">
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
              <h1 className=" text-red-600  font-semibold text-[20px]">
                DHAKA BIG SHOT
              </h1>
              <h1 className="  text-white  font-semibold text-[20px]">
                MIRPUR STADIUM
              </h1>
            </div>
            <div className="flex justify-center w-full">
              <h1 className="  text-white  font-semibold text-[20px]">
                08 JULY 2024
              </h1>
            </div>
            <div className="flex justify-end w-full">
              <button className=" rounded-sm border border-white py-2 px-[3.3rem] 2xl:px-[6.3rem]   text-white  font-semibold text-[20px]">
                BUY TICKETS
              </button>
            </div>
          </div>
          <hr className="bg-gray-100 2xl:max-w-[1600px] mx-auto" />
        </div>
      </div>
      <div className="flex justify-center py-10">
        <button className="text-white py-1 px-4  border border-white rounded-sm">
          See More
        </button>
      </div>
    </div>
  );
};

export default TourSchedule;
