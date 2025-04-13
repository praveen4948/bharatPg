import React from "react";

const ImageCard = () => {
  return (
    <div className=" bg-gray-100 flex items-center h-full py-10">
      <div className="borde p-4 animate-slide ">
        <div>
          <div className="card">Magic Card</div>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="bg-[#e4f3fb]">
      <div className="container mx-auto py-10 flex flex-col gap-10">
        <h1 className="text-4xl font-bold tracking-wide text-center">Out Gallery</h1>
        <div className="h-64 border bg-slate-100 flex py-8 overflow-hidden">
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
