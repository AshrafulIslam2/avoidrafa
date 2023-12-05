"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function ScocialMedila() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      setShowButton(scrollPercent <= 8);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`relative  z-40  ${showButton ? "" : "hidden"}`}>
      <Link href={"https://www.facebook.com/avoidrafa"} target="_blank">
        <Image
          src={"/facebook.svg"}
          alt="avoidrafa"
          fill
          className="fixed top-[10%] sm:top-[15%] md:top-[20%] left-[86%] animate-pulse w-6 h-6 sm:w-10 sm:h-10"
        ></Image>
      </Link>
      <Link href={"https://www.youtube.com/@avoidrafa"} target="_blank">
        <Image
          src={"/youtube.svg"}
          alt="avoidrafa"
          fill
          className="fixed top-[17%] sm:top-[25%] md:top-[35%] left-[86%] animate-pulse w-6 h-6 sm:w-10 sm:h-10"
        ></Image>
      </Link>
      <Link
        href={
          "https://open.spotify.com/artist/0j4Xv6B3jAu40gzdooipIB?si=V1le-TCvQaC0yaNlbRT2fQ&fbclid=IwAR3s9vqE49VKXuyIQd4AgD2cQb79crnFFHYrXEPhUv6CHPNbjxxCzRj7uUw&nd=1"
        }
        target="_blank"
      >
        <Image
          src={"/spotify.svg"}
          alt="avoidrafa"
          fill
          className="fixed top-[24%] sm:top-[35%] md:top-[50%] left-[86%] animate-pulse w-6 h-6 sm:w-10 sm:h-10"
        ></Image>
      </Link>
      <Link
        href={
          "https://www.tiktok.com/@avoidrafa?lang=en&fbclid=IwAR2H0tOQrwDpA8AltL92ux8SG6-sd1E-Stx5qj5UcnOsWXqIAyUMDErgebE"
        }
        target="_blank"
      >
        <Image
          src={"/tiktok.svg"}
          alt="avoidrafa"
          fill
          className="fixed top-[31%] sm:top-[45%] md:top-[65%] left-[86%] animate-pulse w-6 h-6 sm:w-10 sm:h-10"
        ></Image>
      </Link>
    </div>
  );
}
export default ScocialMedila;
