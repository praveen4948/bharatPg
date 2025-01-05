import Image from "next/image";
import React from "react";

const ServiceItem = ({ image, text = "test" }) => {
  return (
    <div className="w-[250px] p-6 transition-all duration-300 hover:-translate-y-2 group">
      <div className="text-center">
        <div className="w-full flex justify-center items-center mb-6">
          <div className="w-fit rounded-full p-6 bg-gradient-to-br from-cyan-700 to-blue-900 shadow-lg shadow-cyan-900/50 group-hover:shadow-cyan-900/70  transition-all duration-300">
            <Image
              src={`/service/${image}`}
              width={60}
              height={60}
              alt={image}
              className="w-[50px] aspect-square drop-shadow-lg group-hover:scale-110 transition-transform duration-300 brightness-0 invert"
            />
          </div>
        </div>
        <div className="font-semibold text-lg text-slate-700 group-hover:text-cyan-600 transition-colors duration-300">
          {text}
        </div>
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <div className="bg-gradient-to-b from-slate-100 via-white to-slate-100" id="services">
      <div className="container mx-auto py-16 w-full ">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 mb-4">
              Our Services & Amenities
            </h2>
            <div className="flex justify-center mb-12 mt-4">
              <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-0">
            <ServiceItem image={"wifi.svg"} text={"Wi-Fi on each floor"} />
            <ServiceItem image={"room.svg"} text={"Large and Clean AC/Non AC Room"} />
            <ServiceItem image={"food.svg"} text={"Tasty Food"} />
            <ServiceItem image={"bathroom.svg"} text={"Room Attached Clean Bathroom"} />
            <ServiceItem image={"geyser.svg"} text={"Geyser"} />
            <ServiceItem image={"washing-machine.svg"} text={"Washing Machine"} />
            <ServiceItem image={"washing-machine.svg"} text={"Power Backup"} />
            <ServiceItem image={"washing-machine.svg"} text={"R.O Water"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
