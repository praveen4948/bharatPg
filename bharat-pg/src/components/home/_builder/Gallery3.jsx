"use client";
import { Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const ImageModal = ({ isOpen, onClose, allImages, currentIndex }) => {
  if (!isOpen) return null;

  const showPrevious = () => {
    const newIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    onClose("navigate", newIndex);
  };

  const showNext = () => {
    const newIndex = (currentIndex + 1) % allImages.length;
    onClose("navigate", newIndex);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl"
      onClick={() => onClose("close")}
      style={{
        backgroundImage: `url(${allImages[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative max-w-[90%] max-h-[90vh] z-10" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => onClose("close")}
          className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <X size={24} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            showPrevious();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>

        <img
          src={allImages[currentIndex]}
          alt="Modal view"
          className="max-w-full max-h-[85vh] object-contain rounded-md"
        />

        <button
          onClick={(e) => {
            e.stopPropagation();
            showNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

const Gallery3 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleModalClose = (action, newIndex) => {
    if (action === "navigate") {
      setCurrentImageIndex(newIndex);
    } else {
      setIsModalOpen(false);
    }
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const images = [
    "https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/bridge.jpg",
    "https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/park.jpg",
    "https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/tunnel.jpg",
    "https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/traffic.jpg",
    "https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/rails.jpg",
    "https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/coast.jpg",
    "https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/tunnel.jpg",
    "https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/coast.jpg",
    "https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/traffic.jpg",
  ];

  return (
    <div className="text-[#35373a] container mx-auto py-10" id="gallery">
      <div>
        <h1 className=" text-center font-['Droid_Sans'] font-bold text-4xl">Our Gallery</h1>
        <div className="flex justify-center mb-12 mt-4">
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-[#F07239] to-transparent"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className={`col-span-1 cursor-pointer ${index === 0 ? "md:col-span-2 row-span-2" : ""}`}
            onClick={() => handleImageClick(index)}
          >
            <div className="group relative block overflow-hidden">
              <img
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={imageUrl}
                alt="img"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-white opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                <Eye />
              </div>
            </div>
          </div>
        ))}
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        allImages={images}
        currentIndex={currentImageIndex}
      />
    </div>
  );
};

export default Gallery3;
