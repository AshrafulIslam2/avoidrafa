"use client";
import React from "react";
import Image from "next/image";
import { ParallaxBanner } from "react-scroll-parallax";

function Hero_Section() {
  return (
    <ParallaxBanner
      layers={[{ image: "hero-section.png", speed: -10 }]}
      className="aspect-[2/1] h-screen"
    />
    // <video
    //   autoPlay
    //   muted
    //   loop
    //   src={"/Render.mp4"}
    //   className="h-screen w-screen"
    // />
    // <Image src={"/heroimage.png"} alt="Avoid Rafa" width={1920} height={1134} />
  );
}

export default Hero_Section;
