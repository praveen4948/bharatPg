import { Mail, Mails, Phone, UserRound } from "lucide-react";
import React from "react";
import Mapx from "./Mapx";

const Contact = () => {
  return (
    <div className=" bg-[#C1DFF6] py-10 pt-16" id="contact">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-900 to-blue-900">
          Get In Touch
        </h2>
        <div className="flex justify-center mt-4">
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-[#F07239] to-transparent"></div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-around flex-col md:flex-row gap-10">
          <div className=" p-8 text-center bg-[#FAFAFA] rounded-xl flex flex-col shadow-xl w-full md:w-1/2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-wider underline">Contact Us</h2>
              <p className="text-xs">We will get back to you asap!</p>
            </div>
            <form className="flex flex-col gap-5 w-full">
              <div className="flex gap-4 w-full flex-col md:flex-row">
                <div className="flex gap-2 items-center relative w-full">
                  <UserRound height={18} width={18} className="absolute left-3 text-slate-500" />
                  <input
                    type="text"
                    placeholder="First Name"
                    className="pr-4 pl-10 py-2 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-slate-300 w-full"
                  />
                </div>
                <div className="flex gap-2 items-center relative w-full">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-2 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-slate-300 w-full"
                  />
                </div>
              </div>
              <div className="relative flex items-center">
                <Mails height={18} width={18} className="absolute left-3 text-slate-500" />
                <input
                  type="text"
                  placeholder="Email"
                  className="pr-4 px-10 py-2 text-sm w-full border focus:outline-none focus:ring-1 ring-slate-300 rounded"
                />
              </div>
              <div className="relative flex items-center ">
                <Phone height={18} width={18} className="absolute left-3 text-slate-500" />
                <input
                  type="text"
                  placeholder="Contact"
                  className="pr-4 pl-10 py-2 text-sm w-full border focus:outline-none focus:ring-1 ring-slate-300 rounded"
                />
              </div>
              <div className="relative flex ">
                <Mail height={18} width={18} className="absolute left-3 text-slate-500 mt-3" />
                <textarea
                  type="text"
                  placeholder="Message"
                  className="pr-4 pl-10 py-2 text-sm w-full border focus:outline-none focus:ring-1 ring-slate-300 rounded"
                />
              </div>
              <div className="w-full border text-sm py-2 bg-blue-950 rounded text-white my-3 cursor-pointer">
                Submit
              </div>
            </form>
            <p className="text-xs">You may also call us at +919475028374</p>
          </div>
          <div>
            <Mapx />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
