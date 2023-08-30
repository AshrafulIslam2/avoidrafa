"use client";
import React from "react";
import Image from "next/image";
import { ParallaxBanner } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";

function Hero_Section() {
  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[{ image: "hero-section.png", speed: -10 }]}
        className="aspect-[2/1] h-screen"
      />
    </ParallaxProvider>
    // <video
    //   autoPlay
    //   muted
    //   loop
    //   src={"/Render.mp4"}
    //   className="h-screen w-screen"
    // />
    // <Image src={"/heroimage.png"} alt="avoidrafa" width={1920} height={1134} />
  );
}

export default Hero_Section;
