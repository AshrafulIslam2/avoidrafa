import React from "react";
import Image from "next/image";
import TourSchedule from "@/Components/TourSchedule/TourSchedule";

function Announcemnet() {
  return (
    <div className="bg-black">
      <div className="flex mx-[150px] items-center justify-between  lg:justify-center 2xl:justify-between ">
        <div className="">
          <h1 className="  md:text-[70px] md:mr-2 lg:text-[70px] xl:text-[105px] 2xl:text-[150px]  font-medium tracking-[-6.78px] text-red-600 leading-none">
            &apos;PROTISHODH&apos;
          </h1>
          <h1 className="  md:text-[70px] lg:text-[70px] xl:text-[105px] 2xl:text-[230px]  font-medium tracking-[-6.78px] text-white leading-none">
            is out now
          </h1>
          <hr className=" h-[5px] xl:h-[10px] w-[187px] xl:w-[530px] bg-white" />
          <button className="text-[10px] 2xl:text-base text-white border border-white my-[20px] px-2 py-2 rounded">
            {" "}
            CLick here to listen/purchase
          </button>
        </div>
        <Image
          src={"/MaskGroup32.png"}
          width={471}
          height={678}
          alt="avoid-rafa "
          className=" h-[500px] object-contain xl:h-[678px]"
        />
      </div>
      <TourSchedule />
    </div>
  );
}

export default Announcemnet;
