import React from "react";
import Image from "next/image";

function Hero_Section() {
  return (
    // <Image
    //   src={"/Group163.png"}
    //   alt="Avoid Rafa"
    //   width={1920}
    //   height={1134}
    // ></Image>
    <video
      autoPlay
      muted
      loop
      src={"/Render.mp4"}
      className="h-screen w-screen"
    />
    // <Image src={"/heroimage.png"} alt="Avoid Rafa" width={1920} height={1134} />
  );
}

export default Hero_Section;
