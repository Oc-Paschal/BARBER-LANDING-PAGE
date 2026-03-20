import React from "react";
import featureRightImage from "../assets/Images/download (3).jpg";
import featureLeftImage from "../assets/Images/download (5).jpg";

const Feature = () => {
  return (
    <div className="text-white flex items-center justify-center mt-20 bg-[#2C2C2C] gap-10 pt-6">
      <div>
        <img
          src={featureRightImage}
          alt="Feature Image"
          className="w-60 rounded-md" />
      </div>
      <div className="w-sm">
        <p className="text-lg font-semibold">Where Style Meets Precision</p>
        <h1 className="text-3xl font-bold w-80">
          Experience the Finest Haircuts in Town
        </h1>
        <p>
          Step into a world where every cut is crafted with precision and care.
          Our experienced barbers are dedicated to delivering a grooming
          experience that goes beyond the ordinary. We listen, we advise, and we
          execute, giving you a look that reflects your personality and style.
        </p>
        <button className="hover: bg-yellow-600 p-3 m-3 w-4xs rounded-md hover:bg-yellow-500 cursor-pointer">Book an Appointment</button>
      </div>
      <div>
        <img
          src={featureLeftImage}
          alt="Feature Image"
          className="w-60 h-60 rounded-md"
        />
      </div>
    </div>
  );
};

export default Feature;
