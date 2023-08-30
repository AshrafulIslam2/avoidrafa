import React from "react";
import Image from "next/image";
import avoid from "../public/avoidrafa.png";
import Gallery from "@/Components/Gallery";
import Announcemnet from "@/Components/AnnouncementSection/Announcemnet";
import Hero_Section from "@/Components/HeroSection/Hero_Section";
import Album from "@/Components/Album/Album";
import Products from "@/Components/Products/Products";
import ContactUs from "@/Components/ContactUs/ContactUs";
import ScroolTop from "@/Components/ScrollTop";
import ScocialMedila from "@/Components/SocialMediaLink";
import TourSchedule from "@/Components/TourSchedule/TourSchedule";
const Home = () => {
  return (
    <main className="bg-[#161616]">
      <Hero_Section />
      <Announcemnet />
      <TourSchedule />
      <Album />
      <Gallery />
      {/* <Image src={avoid} alt='avoid-rafa' className='object-cover w-screen h-screen' ></Image> */}
      <Products />
      <ContactUs />
      <ScocialMedila />
      {/* <ScroolTop /> */}
    </main>
  );
};

export default Home;
