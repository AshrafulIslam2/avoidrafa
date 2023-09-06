import Image from "next/image";
import React from "react";
import Modal from "react-modal";

// Modal.setAppElement("#root"); // Set the root element for accessibility

const ImageModal = ({ isOpen, onClose, imageSrc }) => {
  const customStyles = {
    content: {
      top: "10%",
      left: "50%",
      transform: "translate( -50%)",
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Full Image View"
      style={customStyles}
    >
      {" "}
      <div className="flex justify-end">
        <button className="text-xl" onClick={onClose}>
          Close
        </button>
      </div>
      <Image
        src={imageSrc}
        alt="Full View"
        className="object-contain hover:scale-150 hover:cursor-zoom-in"
        // className="lg:h-[450px]  xl:w-[600px] xl:h-[600px] 2xl:h-[700px] object-cover"
      />
    </Modal>
  );
};

export default ImageModal;
