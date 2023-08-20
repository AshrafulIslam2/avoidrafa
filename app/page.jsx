import React from "react";
import Image from "next/image";
import avoid from "../public/avoidrafa.png";
import Gallery from "@/Components/Gallery";
import Announcemnet from "@/Components/AnnouncementSection/Announcemnet";
import Hero_Section from "@/Components/HeroSection/Hero_Section";
import Album from "@/Components/Album/Album";

const Home = () => {
  return (
    <main>
      <Hero_Section />
      <Announcemnet />
      <Album />
      {/* <Image src={avoid} alt='avoid-rafa' className='object-cover w-screen h-screen' ></Image> */}
      <Gallery />
    </main>
  );
};

export default Home;
