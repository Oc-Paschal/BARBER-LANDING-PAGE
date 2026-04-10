import React from "react";
import data from "../data.json";

const Feature = () => {
  const { tagline, title, description, buttonText, rightImage, leftImage } =
    data.features;

  return (
    <section className="bg-[#2C2C2C] text-white my-9 px-4 md:px-10 py-10">
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10">
        
        {/* Left Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={rightImage}
            alt="Feature"
            className="w-full max-w-xs md:max-w-sm rounded-md object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/3 text-center md:text-left space-y-4">
          <p className="text-lg font-semibold">{tagline}</p>

          <h1 className="text-2xl md:text-3xl font-bold leading-tight">
            {title}
          </h1>

          <p className="text-gray-300 text-sm md:text-base">
            {description}
          </p>

          <button className="bg-yellow-600 hover:bg-yellow-500 px-6 py-3 rounded-md cursor-pointer transition">
            {buttonText}
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={leftImage}
            alt="Feature"
            className="w-full max-w-xs md:max-w-sm rounded-md object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Feature;