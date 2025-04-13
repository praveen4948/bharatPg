import React from "react";
import HomePage from "./_builder/HomePage";
import Service from "./_builder/Service";
import Contact from "./_builder/Contact";
import Gallery from "./_builder/Gallery";
import Gallery2 from "./_builder/Gallery2";
import Gallery3 from "./_builder/Gallery3";
import Pricing from "./_builder/Pricing";
import About from "./_builder/About";

const HomeIndex = () => {
  return (
    <>
      <HomePage />
      {/* <Gallery /> */}
      {/* <Gallery2 /> */}
      <About />
      <Service />
      <Pricing />
      <Contact />
      <Gallery3 />
    </>
  );
};

export default HomeIndex;
