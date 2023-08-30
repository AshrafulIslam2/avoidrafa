import React from "react";
import Image from "next/image";
import TourSchedule from "@/Components/TourSchedule/TourSchedule";

function Announcemnet() {
  return (
    <div
      className="bg-[#161616] lg:max-w-[940px] xl:max-w-[1240px] 2xl:max-w-[1320px] mx-auto"
      id="news"
    >
      <div className="grid grid-cols-2">
        <div className="">
          <h1 className="  md:text-[70px] md:mr-2 lg:text-[105px] xl:text-[105px] 2xl:text-[150px]  font-medium 2xl:tracking-[-6.78px] text-red-600 leading-none">
            &apos;PROTISHODH&apos;
          </h1>
          <h1 className="  md:text-[70px] lg:text-[190px] xl:text-[190px] 2xl:text-[230px]  font-medium 2xl:tracking-[-6.78px] text-white leading-none">
            COMING SOON!!
          </h1>
          <hr className=" h-[5px] xl:h-[10px] w-[187px] xl:w-[530px] bg-white" />
          <button className="text-[10px] 2xl:text-base text-white border border-white my-[20px] px-2 py-2 rounded">
            {" "}
            CLick here to listen/purchase
          </button>
        </div>
        <Image
          src={"/PROTISHODH.png"}
          width={471}
          height={678}
          alt="avoid-rafa "
          className=" h-[500px] object-contain xl:h-[678px]"
        />
      </div>
    </div>
  );
}

export default Announcemnet;
