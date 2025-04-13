import React from "react";

const Pricing = () => {
  const commonFeatures = ["Free WiFi", "Attached Bathroom", "Breakfast/Lunch & Dinner"];

  const roomTypes = [
    {
      type: "Standard Room",
      sharing: "Four Sharing",
      nonACPrice: 4000,
      acPrice: 4500,
      highlight: "Best for Groups",
    },
    {
      type: "Deluxe Room",
      sharing: "Triple Sharing",
      nonACPrice: 5000,
      acPrice: 5500,
      highlight: "Most Popular",
    },
    {
      type: "Premium Room",
      sharing: "Double Sharing",
      nonACPrice: 6000,
      acPrice: 6500,
      highlight: "Premium Choice",
    },
    {
      type: "Premium Deluxe Room",
      sharing: "Single Sharing",
      nonACPrice: 12000,
      acPrice: 13000,
      highlight: "Premium Choice",
    },
  ];

  return (
    <div className="relative py-12 px-4" id="pricing">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed transform"
        style={{
          backgroundImage: "url('./pricingBg.jpeg')",
          filter: "brightness(0.3)",
        }}
      ></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-6">Our Room Prices</h2>
        <div className="flex justify-center mb-12 mt-0">
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        </div>

        {/* Common Features Section */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">All Rooms Include</h3>
          <div className="flex justify-center gap-8">
            {commonFeatures.map((feature) => (
              <div key={feature} className="flex items-center text-white">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {roomTypes.map((room, idx) => (
            <div
              key={idx}
              className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl py-6 px-4 text-white border border-white/10 hover:border-white/20 hover:transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              {/* Highlight Badge */}
              <div className="absolute -top-4 right-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                {room.highlight}
              </div>

              {/* Room Type */}
              <h3 className="text-2xl font-bold mb-6 text-white">{room.type}</h3>

              {/* Sharing Info */}
              <div className="flex items-center mb-6 text-gray-300">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                {room.sharing}
              </div>

              {/* Pricing Options */}
              <div className="space-y-4 mb-8">
                {/* Non-AC Option */}
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Non-AC Room</span>
                    <span className="text-green-400 text-sm">Basic</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-300">
                    ₹{room.nonACPrice}
                    <span className="text-lg font-normal text-gray-400">/month</span>
                  </div>
                </div>

                {/* AC Option */}
                <div className="bg-white/5 p-4 rounded-lg border border-green-500/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">AC Room</span>
                    <span className="text-green-400 text-sm">Recommended</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-300">
                    ₹{room.acPrice}
                    <span className="text-lg font-normal text-gray-400">/month</span>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 text-gray-300">
                {commonFeatures.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
