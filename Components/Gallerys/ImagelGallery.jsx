import Image from "next/image";
import React from "react";
import image1 from "@/public/image01.png";
import image2 from "@/public/image02.png";
import image3 from "@/public/image03.png";
import image4 from "@/public/image04.png";
import image5 from "@/public/image05.png";
import image6 from "@/public/image06.png";
import image7 from "@/public/image07.png";
import image8 from "@/public/image08.png";
import image9 from "@/public/01.png";
import image10 from "@/public/02.png";
import image11 from "@/public/03.png";
import image12 from "@/public/04.png";
import image13 from "@/public/05.png";
import image14 from "@/public/06.png";
import image15 from "@/public/07.png";
import image16 from "@/public/08.png";
import image17 from "@/public/09.jpg";
import image18 from "@/public/10.jpg";
import image19 from "@/public/11.jpg";
import image20 from "@/public/12.jpg";
import image21 from "@/public/13.jpg";
import image22 from "@/public/14.jpg";
import image23 from "@/public/15.jpg";
import image24 from "@/public/16.jpg";
import image25 from "@/public/17.jpg";
import image26 from "@/public/18.jpg";
import image27 from "@/public/19.jpg";
import image28 from "@/public/20.jpg";

function ImageGallery() {
  const imageGallery = [
    {
      imageLink: image1,
    },
    {
      imageLink: image2,
    },
    {
      imageLink: image3,
    },
    {
      imageLink: image4,
    },
    {
      imageLink: image5,
    },
    {
      imageLink: image6,
    },
    {
      imageLink: image7,
    },
    {
      imageLink: image8,
    },
    {
      imageLink: image9,
    },
    {
      imageLink: image10,
    },
    {
      imageLink: image11,
    },
    {
      imageLink: image12,
    },
    {
      imageLink: image13,
    },
    {
      imageLink: image14,
    },
    {
      imageLink: image15,
    },
    {
      imageLink: image16,
    },
    {
      imageLink: image17,
    },
    {
      imageLink: image18,
    },
    {
      imageLink: image19,
    },
    {
      imageLink: image20,
    },
    {
      imageLink: image21,
    },
    {
      imageLink: image22,
    },
    {
      imageLink: image23,
    },
    {
      imageLink: image24,
    },
    {
      imageLink: image25,
    },
    {
      imageLink: image26,
    },
    {
      imageLink: image27,
    },
    {
      imageLink: image28,
    },
  ];
  return (
    <div className="py-[42px]">
      <div className="grid  grid-cols-2 sm:grid-cols-4 w-screen 2xl:w-[1600px] 2xl:mx-auto">
        {imageGallery.map((image, Index) => (
          <Image
            key={Index}
            src={image.imageLink}
            alt="AvoidRafa"
            className="w-full h-full scale-95 hover:scale-100 transition-all duration-300 ease-linear object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
