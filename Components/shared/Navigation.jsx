"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  const [isOpen, SetOpen] = useState(false);
  const toggele = () => {
    SetOpen(!isOpen);
  };
  return (
    <div className="flex sm:flex-col">
      <div
        className={`bg-[#161616] flex flex-col sm:flex-row sm:items-center sm:justify-around top-0 sticky z-40 `}
      >
        <Image
          src="/Group_73.svg"
          alt="Logo"
          width={30}
          height={30}
          className="hidden sm:block md:w-[128px] xl:w-[180px] h-[4rem] ml-4"
        />
        <div className=" block sm:hidden">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#5F5F5F"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#5F5F5F"
              class="w-10 h-10 transition-all ease-in-out duration-500"
              onClick={toggele}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#5F5F5F"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#5F5F5F"
              class="w-10 h-10 transition-all ease-in-out duration-500"
              onClick={toggele}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
        <div className="hidden sm:block">
          <Link
            href={"/"}
            className="text-white px-[20px] text-center sm:px-[30px] lg:px-[40px] py-[6px] hover:bg-[#ffffff14] rounded-md hover:border hover:border-white text-[14px] xl:text-base p"
          >
            HOME
          </Link>
          <Link
            href={"/#news"}
            className="text-white px-[20px] text-center sm:px-[30px] lg:px-[40px] py-[6px] hover:bg-[#ffffff14] rounded-md hover:border hover:border-white text-[14px] xl:text-base"
          >
            LATEST
          </Link>
          <Link
            href={"/#tour"}
            className="text-white px-[20px] text-center sm:px-[30px] lg:px-[40px] py-[6px] hover:bg-[#ffffff14] rounded-md hover:border hover:border-white text-[14px] xl:text-base"
          >
            TOUR
          </Link>
          <Link
            href={"/#album"}
            className="text-white px-[20px] text-center sm:px-[30px] lg:px-[40px] py-[6px] hover:bg-[#ffffff14] rounded-md hover:border hover:border-white text-[14px] xl:text-base"
          >
            ALBUM
          </Link>
          <Link
            href={"/gallery"}
            className="text-white px-[20px] text-center sm:px-[30px] lg:px-[40px] py-[6px] hover:bg-[#ffffff14] rounded-md hover:border hover:border-white text-[14px] xl:text-base"
          >
            GALLERY
          </Link>
          <Link
            href={"/#products"}
            className="text-white px-[20px] text-center sm:px-[30px] lg:px-[40px] py-[6px] hover:bg-[#ffffff14] rounded-md hover:border hover:border-white text-[14px] xl:text-base"
          >
            MERCH
          </Link>
          <Link
            href={"/#contact"}
            className="text-white px-[20px] text-center sm:px-[30px] lg:px-[20px] py-[6px] hover:bg-[#ffffff14] rounded-md hover:border lg:mr-3 xl:mr-0 hover:border-white text-[14px] xl:text-base"
          >
            BOOKING
          </Link>
        </div>
        <div className="hidden sm:block"></div>
        {isOpen && (
          <div className="sm:col-span-2  w-full block sm:hidden transition-transform ease-in-out duration-500 ">
            <div className=" ml-[24px] flex flex-col transition-all ease-in-out duration-500">
              <Link
                href={"/"}
                className="text-white px-[5px] text-left sm:px-[30px] lg:px-[40px] py-[6px] hover:bg-[#ffffff14] rounded-md hover:border hover:border-white text-[14px] xl:text-base "
              >
                HOME
              </Link>
              <Link
                href={"/#news"}
                className="text-white px-[5px] text-left sm:px-[30px] lg:px-[40px] py-[6px] hover:bg-[#ffffff14] rounded-md hover:border hover:border-white text-[14px] xl:text-base"
              >
                LATEST
              </Link>
              <Link
                href={"/#tour"}
                className="text-white px-[5px] text-left sm:px-[30px] lg:px-[40px] py-[6px] hover:bg-[#ffffff14] rounded-md hover:border hover:border-white text-[14px] xl:text-base"
              >
                TOUR
              </Link>
              <Link
                href={"/#album"}
                className="text-white px-[5px] text-left sm:px-[30px] lg:px-[40px] py-[6px] hover:bg-[#ffffff14] rounded-md hover:border hover:border-white text-[14px] xl:text-base"
              >
                ALBUM
              </Link>
              <Link
                href={"/gallery"}
                className="text-white px-[5px] text-left sm:px-[30px] lg:px-[40px] py-[6px] hover:bg-[#ffffff14] rounded-md hover:border hover:border-white text-[14px] xl:text-base"
              >
                GALLERY
              </Link>
              <Link
                href={"/#products"}
                className="text-white px-[5px] text-left sm:px-[30px] lg:px-[40px] py-[6px] hover:bg-[#ffffff14] rounded-md hover:border hover:border-white text-[14px] xl:text-base"
              >
                MERCH
              </Link>
              <Link
                href={"/#contact"}
                className="text-white px-[5px] text-left sm:px-[30px] lg:px-[20px] py-[6px] hover:bg-[#ffffff14] rounded-md hover:border  hover:border-white text-[14px] xl:text-base"
              >
                BOOKING
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="bg-[#161616] flex-grow   ">
        <Link href="/" className="flex sm:hidden flex-col items-center">
          <Image
            src="/Group_73.svg"
            alt="Logo"
            width={160}
            height={160}
            className="inline-block sm:hidden bg-[#161616] my-2 -ml-[60px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
