import Image from "next/image";
import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <div className="bg-black py-10">
      <h1 className="text-white font-semibold text-[120px] text-center py-6">
        MERCH
      </h1>
      <div className="grid grid-cols-3 gap-y-4 mx-auto ">
        <div className=" flex flex-col items-center">
          <Image src={"/Group.png"} width={400} height={400} alt="avoid rafa" />
          <div className="text-white  flex text-[16px]   w-full justify-around">
            <div>
              <h1>Classic T-Shirt</h1>
              <div className="flex  justify-around ">
                <h1 className="w-[20px] h-[20px] text-white border  border-white text-center leading-tight">
                  S
                </h1>
                <h1 className="w-[20px] h-[20px] text-white border  border-white text-center leading-tight">
                  M
                </h1>
                <h1 className="w-[20px] h-[20px] text-white border  border-white text-center leading-tight">
                  L
                </h1>
                <h1 className="w-[20px] h-[20px] text-white border  border-white text-center leading-tight">
                  X
                </h1>
                <h1 className="w-[20px] h-[20px] text-white border  border-white text-center leading-tight">
                  XL
                </h1>
              </div>
            </div>
            <h1>250 BDT</h1>
          </div>
        </div>
        <div className=" flex flex-col items-center">
          <Image src={"/Group.png"} width={400} height={400} alt="avoid rafa" />
          <div className="text-white  flex text-[16px]   w-full justify-around">
            <div>
              <h1>Classic T-Shirt</h1>
              <div className="flex  justify-around ">
                <h1 className="w-[20px] h-[20px] text-white border  border-white text-center leading-tight ">
                  S
                </h1>
                <h1 className="w-[20px] h-[20px] text-white border  border-white text-center leading-tight">
                  M
                </h1>
                <h1 className="w-[20px] h-[20px] text-white border  border-white text-center leading-tight">
                  L
                </h1>
                <h1 className="w-[20px] h-[20px] text-white border  border-white text-center leading-tight">
                  X
                </h1>
                <h1 className="w-[20px] h-[20px] text-white border  border-white text-center leading-tight">
                  XL
                </h1>
              </div>
            </div>
            <h1>250 BDT</h1>
          </div>
        </div>
        <div className=" flex flex-col items-center">
          <Image src={"/Group.png"} width={400} height={400} alt="avoid rafa" />
          <div className="text-white  flex text-[16px]   w-full justify-around">
            <div>
              <h1>Classic T-Shirt</h1>
              <div className="flex  justify-around ">
                <h1 className="w-[20px] h-[20px] text-white border  border-white text-center leading-tight">
                  S
                </h1>
                <h1 className="w-[20px] h-[20px] text-white border  border-white text-center leading-tight">
                  M
                </h1>
                <h1 className="w-[20px] h-[20px] text-white border  border-white text-center leading-tight">
                  L
                </h1>
                <h1 className="w-[20px] h-[20px] text-white border  border-white text-center leading-tight">
                  X
                </h1>
                <h1 className="w-[20px] h-[20px] text-white border  border-white text-center leading-tight">
                  XL
                </h1>
              </div>
            </div>
            <h1>250 BDT</h1>
          </div>
        </div>
        <div className=" flex flex-col items-center">
          <Image src={"/Group.png"} width={400} height={400} alt="avoid rafa" />
          <div className="text-white  flex text-[16px]   w-full justify-around">
            <div>
              <h1>Classic T-Shirt</h1>
              <div className="flex  justify-around ">
                <h1 className="w-[20px] h-[20px] text-white border  border-white text-center leading-tight">
                  S
                </h1>
                <h1 className="w-[20px] h-[20px] text-white border  border-white text-center leading-tight">
                  M
                </h1>
                <h1 className="w-[20px] h-[20px] text-white border  border-white text-center leading-tight">
                  L
                </h1>
                <h1 className="w-[20px] h-[20px] text-white border  border-white text-center leading-tight">
                  X
                </h1>
                <h1 className="w-[20px] h-[20px] text-white border  border-white text-center leading-tight">
                  XL
                </h1>
              </div>
            </div>
            <h1>250 BDT</h1>
          </div>
        </div>
      </div>
      <div className="text-white my-4 flex justify-center">
        <Link
          href={"https://www.facebook.com/hanger18official"}
          target="_blank"
          className="border-2 border-white  px-4 text-[40px]"
        >
          BUY MERCH
        </Link>
      </div>
    </div>
  );
};

export default Products;