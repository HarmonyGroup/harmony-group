import React from "react";
import Image from "next/image";
import BarcodeImage from "@/assets/asset-21.jpeg";
import { IoClose } from "react-icons/io5";

const BarcodeModal = ({ toggleModal }) => {
  return (
    <div onClick={toggleModal} className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-[9999999] px-6">
      <div onClick={(e) => e.stopPropagation()} className="relative bg-white w-full max-w-lg max-h-[85vh] rounded-lg p-7 overflow-y-scroll animate__animated animate__zoomIn">
        <h1 className="text-2xl text-center font-semibold">Scan Barcode</h1>
        <div className="relative h-60 w-60 mx-auto mt-5">
          <Image loading="lazy" src={BarcodeImage} layout="fill" objectFit="cover" alt="" />
        </div>
      </div>
      <button onClick={toggleModal} className="relative flex items-center gap-1 z-10 text-white text-2xl mr-0 mt-8">
        <IoClose size={18} className="mt-1.5" />
        close
    </button>
    </div>
  );
};

export default BarcodeModal;
