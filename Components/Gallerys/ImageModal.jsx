"use client";
import Image from "next/image";
import React from "react";
import Modal from "react-modal";

// Modal.setAppElement("#root"); // Set the root element for accessibility

const ImageModal = ({ isOpen, onClose, imageSrc }) => {
  const customStyles = {
    content: {
      // top: "50%",
      // left: "50%",
      // transform: "translate( -50%,-50%)",
    },
  };
  // if (typeof window !== "undefined") {
  //   // Add a media query to modify styles for mobile devices
  //   if (window.innerWidth <= 768) {
  //     customStyles.content.maxHeight = "30%";
  //   }
  // }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Full Image View"
      style={customStyles}
    >
      {" "}
      <div className="flex justify-end">
        <button className="text-[10px] sm:text-xl" onClick={onClose}>
          Close
        </button>
      </div>
      <Image
        src={imageSrc}
        alt="Full View"
        className="object-contain active:scale-150 cursor-zoom-in active:cursor-zoom-out"
        // className="lg:h-[450px]  xl:w-[600px] xl:h-[600px] 2xl:h-[700px] object-cover"
      />
    </Modal>
  );
};

export default ImageModal;
