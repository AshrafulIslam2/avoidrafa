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
  ];
  return (
    <div>
      <div className="grid  grid-cols-2 sm:grid-cols-4  mx-[42px]">
        {imageGallery.map((image, Index) => (
          <Image
            key={Index}
            src={image.imageLink}
            alt="AvoidRafa"
            className="w-full object-cover"
          />
        ))}
      </div>
      <div className="grid grid-cols-4  mx-[42px]">
        {imageGallery.map((image, Index) => (
          <Image
            key={Index}
            src={image.imageLink}
            alt="AvoidRafa"
            className="w-full object-cover"
          />
        ))}
      </div>
      <div className="grid grid-cols-4  mx-[42px]">
        {imageGallery.map((image, Index) => (
          <Image
            key={Index}
            src={image.imageLink}
            alt="AvoidRafa"
            className="w-full object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
