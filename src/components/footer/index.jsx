import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterIndex = () => {
  return (
    <div className="bg-slate-500 bg-opacity-30">
      <div className="container mx-auto">
        <div className="py-6 flex justify-between ">
          <div className="">
            <Image src={"/logo.svg"} width={70} height={70} alt="logo" />
            <span className="text-4xl font-bold">Bharat PG</span>
          </div>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="font-bold text-xl">Link</li>
            <li className="hover:underline cursor-pointer">
              <Link href="#home">Home</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="#about">About</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="#services">Services</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="#pricing">Pricing</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="#contact">Contact</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="#gallery">Gallery</Link>
            </li>
          </ul>
          <div className="flex flex-col gap-1 text-sm">
            <div className="font-bold text-xl mb-1">Address</div>
            <address className="not-italic">
              <div>Ankush Malik</div>
              <div className="text-sm">+919475028374</div>
              <div className="text-sm">ankushmalik093@gmail.com</div>
            </address>
            <address className="mt-2 not-italic">
              <div>Bharat PG, Gali no.-2, Satguru Enclave,</div>
              <div>Sector-18, Gurugram,</div>
              <div>Haryana - 122015, India</div>
            </address>
            <div className="underline text-blue-600 mt-2 flex items-center gap-1">
              <MapPin width={18} height={18} />
              <Link href="https://www.google.com/maps/place/Bharat+PG/@28.456666,77.041666,17z/data=!3m1!4b1!4m6!3m5!1s0x390d1d0153a379c3:0x362f0f68f671e096!8m2!3d28.456666!4d77.041666!16s%2Fg%2F11c3q_xq3j?entry=ttu">
                Get Route on Map
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 text-sm text-center py-4 flex justify-between">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <Image className="cursor-pointer" src={"/insta.svg"} height={23} width={23} alt="insta" />
            <Image className="cursor-pointer" src={"/facebook.svg"} height={23} width={23} alt="facebook" />
          </div>
          <div className="text-xs">© 2024 Bharat PG. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default FooterIndex;
