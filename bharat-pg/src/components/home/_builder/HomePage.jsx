import { MapPin } from "lucide-react";
import React from "react";

const HomePage = () => {
  return (
    <div className="h-screen relative overflow-hidden" id="home">
      {/* Background image with improved overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
        style={{
          backgroundImage: "url('./home/homeBG.jpeg')",
          filter: "brightness(0.3)",
        }}
      ></div>

      {/* Main content with decorative patterns */}
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Left pattern */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="w-24 h-96 flex flex-col gap-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-12 w-12 border-2 border-yellow-500/30 rotate-45 transform hover:scale-110 transition-transform duration-300"
              />
            ))}
          </div>
        </div>

        {/* Right pattern */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="w-24 h-96 flex flex-col gap-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-12 w-12 border-2 border-yellow-500/30 rotate-45 transform hover:scale-110 transition-transform duration-300"
              />
            ))}
          </div>
        </div>

        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Animated heading */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold">
              <span className="text-yellow-500">Welcome to </span>
              <span className="text-white">Bharat PG</span>
            </h1>
            <p className="text-xl sm:text-2xl text-yellow-400 font-light">Experience Luxury That Fits Your Budget</p>
          </div>

          {/* Location card with hover effect */}
          <div
            className="inline-flex items-center gap-3 bg-black/30 backdrop-blur-sm px-6 py-4 rounded-xl 
                          transform hover:scale-105 transition-all duration-300"
          >
            <MapPin className="text-yellow-500 h-6 w-6" />
            <div className="text-left text-gray-200">
              <p className="font-medium">Sataguru Enclave, Sector-18</p>
              <p className="text-sm text-gray-400">Gurugram, Haryana, 122015</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
