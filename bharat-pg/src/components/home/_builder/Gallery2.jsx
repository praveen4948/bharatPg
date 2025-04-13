"use client";
import React, { useState } from "react";

const Gallery2 = () => {
  const [angle, setAngle] = useState(0);

  const galleryspin = (sign) => {
    setAngle((prevAngle) => (sign === "-" ? prevAngle - 45 : prevAngle + 45));
  };

  const spinnerStyle = {
    transform: `rotateY(${angle}deg)`,
    WebkitTransform: `rotateY(${angle}deg)`,
    MozTransform: `rotateY(${angle}deg)`,
  };

  const baseUrl = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/";

  return (
    <div className="">
      <div className="perspective-[1200px] bg-[#100000] pt-[10%] text-[0px] mb-12 overflow-hidden ">
        <figure
          id="spinner"
          className="preserve-3d h-[300px] origin-[50%_50%_-500px] transition-transform duration-1000"
          style={spinnerStyle}
        >
          {[
            "wanaka-tree.jpg",
            "still-lake.jpg",
            "pink-milford-sound.jpg",
            "paradise.jpg",
            "morekai.jpg",
            "milky-blue-lagoon.jpg",
            "lake-tekapo.jpg",
            "milford-sound.jpg",
          ].map((img, index) => (
            <img
              key={img}
              src={`${baseUrl}${img}`}
              alt={`Slide ${index + 1}`}
              className="w-[40%] max-w-[425px] absolute left-[30%] origin-[50%_50%_-500px] outline-1 outline-transparent flex justify-center items-center gap-40"
              style={{ transform: `rotateY(${-45 * index}deg) translateZ(200px)` }}
            />
          ))}
        </figure>
      </div>
      <span
        onClick={() => galleryspin("-")}
        className="float-left text-white mx-[5%] inline-block text-2xl transition-colors duration-600 relative -mt-24 border-b-0 leading-none hover:text-gray-400 cursor-pointer"
      >
        &lt;
      </span>
      <span
        onClick={() => galleryspin("")}
        className="float-right text-white mx-[5%] inline-block text-2xl transition-colors duration-600 relative -mt-24 border-b-0 leading-none hover:text-gray-400 cursor-pointer"
      >
        &gt;
      </span>
    </div>
  );
};

export default Gallery2;
