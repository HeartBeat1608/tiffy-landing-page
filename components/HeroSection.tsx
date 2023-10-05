import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-white w-full">
      <div className="container mx-auto px-6 md:px-0 flex items-center justify-center py-4 md:py-8 md:gap-20 gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-4xl text-black font-poppins leading-snug">
            <span className="text-emerald-500">Home Alone</span> And Hungry?
            <br />
            Let&apos;s Serve You Best{" "}
            <span className="text-emerald-500">Tiffins.</span>
          </h2>
          <button className="font-medium text-lg px-10 py-1 bg-emerald-500 rounded-full w-fit text-white mx-auto mt-4">
            Join Now
          </button>
        </div>
        <div className="items-end hidden md:flex">
          <div className="tiffin-large"></div>
          <div className="tiffin-medium -ml-10"></div>
          <div className="tiffin-small -ml-10"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
