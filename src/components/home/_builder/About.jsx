import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-white via-slate-50 to-white" id="about">
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 mb-4">
              About Us
            </h2>
            <div className="flex justify-center mb-12 mt-4">
              <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            </div>
          </div>

          <div className="max-w-4xl flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="md:w-1/3">
              <div className="relative w-[250px] h-[250px] rounded-full border-2 border-slate-300 overflow-hidden shadow-xl">
                <Image src="/founder.jpeg" alt="Founder" fill className="object-cover" />
              </div>
              <p className="text-center mt-4 font-semibold text-slate-700">Mr. Ankush Kumar</p>
              <p className="text-center text-slate-600">Founder, Bharat PG</p>
            </div>

            <div className="md:w-2/3 space-y-6">
              <p className="text-slate-700 leading-relaxed text-lg">
                Bharat PG offers comfortable and affordable rooms for students and working professionals. We have
                multiple PG accommodations located in Satguru Enclave and Nobel Enclave areas. All our locations are in
                safe neighborhoods with good transportation facilities nearby. There are many shops nearby to ensure
                you have a convenient and comfortable stay.
              </p>

              <p className="text-slate-700 leading-relaxed text-lg">
                We provide different types of rooms to match your budget - single rooms, double sharing, and triple
                sharing. All our rooms are clean and well-maintained, with basic facilities like Wi-Fi, clean
                bathrooms, RO water, and regular cleaning service. Our friendly staff is always ready to help you with
                any needs. At Bharat PG, we make sure you feel at home while staying with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
