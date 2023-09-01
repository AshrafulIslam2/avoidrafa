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
    <div className={`relative z-40 ${showButton ? "" : "hidden"}`}>
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
          className="  fixed left-[40px] md:top-[64%] md:bottom-[64%] 2xl:top-[64%] z-20  bottom-[60%] animate-pulse w-10 h-10"
        ></Image>
      </Link>
      <Link href={"https://www.facebook.com/avoidrafa"} target="_blank">
        <Image
          src={"/facebook.svg"}
          alt="avoidrafa"
          fill
          className="  fixed left-[40px] md:top-[52%] md:bottom-[52%] top-[50%] z-20  bottom-[50%] animate-pulse w-10 h-10"
        ></Image>
      </Link>
      <Link href={"https://www.youtube.com/@avoidrafa"} target="_blank">
        <Image
          src={"/youtube.svg"}
          alt="avoidrafa"
          fill
          className="  fixed left-[40px] top-[40%] z-20  bottom-[40%] animate-pulse w-10 h-10"
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
          className="  fixed left-[40px] md:top-[28%] md:bottom-[28%] top-[30%] z-20  bottom-[30%] animate-pulse w-10 h-10"
        ></Image>
      </Link>
    </div>
  );
}
export default ScocialMedila;
