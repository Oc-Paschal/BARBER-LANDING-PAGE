
import React from "react";
import data from "../data.json";

const Feature = () => {
  const { tagline, title, description, buttonText, rightImage, leftImage } = data.features;

  return (
    <div className="text-white h-full flex items-center justify-center bg-[#2C2C2C] gap-10 pt-6">
      <div>
        <img src={rightImage} alt="Feature Image" className="w-70 rounded-md" />
      </div>
      <div className="w-sm">
        <p className="text-lg font-semibold text-white">{tagline}</p>
        <h1 className="text-3xl font-bold w-80">{title}</h1>
        <p>{description}</p>
        <button className="bg-yellow-600 hover:bg-yellow-500 p-3 m-3 w-4xs rounded-md cursor-pointer">
          {buttonText}
        </button>
      </div>
      <div>
        <img src={leftImage} alt="Feature Image" className="w-70 h-70 rounded-md" />
      </div>
    </div>
  );
};

export default Feature;

