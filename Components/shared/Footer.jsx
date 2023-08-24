import Image from "next/image";
import React from "react";
import ScroolTop from "../ScrollTop";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="flex justify-between border-4 border-white mx-[44px] py-[50px]">
        <Image
          src="/Group_73.svg"
          alt="Logo"
          width={30}
          height={30}
          className="md:w-[128px] xl:w-[180px] h-[4rem] ml-4"
        />
        <div className="text-white text-[16px] font-semibold  text-end px-4">
          <h1>&copy; 2023 STUDIO HOT BOX</h1>
          <h1>PRIVACY POLICY TERM AND CONDITIONS</h1>
          <h1>ABOUT US</h1>
        </div>
      </div>
      <ScroolTop />
    </div>
  );
};

export default Footer;
