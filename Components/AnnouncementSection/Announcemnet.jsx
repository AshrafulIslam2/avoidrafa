import React from "react";
import Image from "next/image";
import TourSchedule from "@/Components/TourSchedule/TourSchedule";

function Announcemnet() {
  return (
    <div
      className="bg-[#161616] mx-[16px]  lg:max-w-[940px] xl:max-w-[1240px] 2xl:max-w-[1320px] lg:mx-auto"
      id="news"
    >
      <div className="grid gap-3 md:gap-[5rem] grid-cols-2 ">
        <div className="">
          <h1 className="font-medium text-red-600 leading-none text-[35px] sm:text-[74px] md:text-[94px] lg:text-[105px] xl:text-[105px] 2xl:text-[150px] 2xl:tracking-[-6.78px] ">
            &apos;PROTISHODH&apos;
          </h1>
          <h1 className="text-white leading-none font-medium  text-[63px] sm:text-[130px] md:text-[160px] lg:text-[190px] xl:text-[190px] 2xl:text-[230px]  2xl:tracking-[-6.78px] ">
            COMING SOON!!
          </h1>
          <hr className=" h-[5px]  xl:h-[10px] w-[130px] sm:w-full md:w-full xl:w-[530px] bg-white" />
          <button className=" hidden text-[10px] sm:text-[18px] md:text-[18px] 2xl:text-base text-white border border-white my-[20px] px-2 py-2 rounded">
            CLick here to listen/purchase
          </button>
        </div>
        <Image
          src={"/PROTISHODH.png"}
          width={471}
          height={678}
          alt="avoidrafa "
          className="  h-auto  object-contain xl:h-[678px]"
        />
      </div>
    </div>
  );
}

export default Announcemnet;
