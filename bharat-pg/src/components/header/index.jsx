import Image from "next/image";
import React from "react";
import Link from "next/link";

const HeaderIndex = () => {
  return (
    <div className="bg-slate-500 bg-opacity-10 bg-blend-color-burn backdrop-blur-sm shadow-l z-50 sticky top-0 h-full py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-semibold text-3xl flex items-center text-black">
          <Image className="text-black" src={"/logo.svg"} height={40} width={40} alt="logo" />
          Bharat PG
        </div>
        <ul className="sm:flex gap-10 items-center hidden text-lg">
          <li className="cursor-pointer hover:underline">
            <Link href="#home">Home</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link href="#about">About</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link href="#services">Services</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link href="#pricing">Pricing</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link href="#contact">Contact</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link href="#gallery">Gallery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderIndex;
