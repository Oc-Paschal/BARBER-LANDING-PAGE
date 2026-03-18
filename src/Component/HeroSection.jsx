import React from "react";

const HeroSection = () => {
  return (
    <div className=" h-screen flex items-center justify-center text-white">
      <div>
        <p className="font-bold text-3xl text-center">Clean Cuts.Fresh Looks</p>
        <h1 className="text-5xl font-serif font-bold text-center p-1">
          LAGOS FINEST BARBERSHOP
        </h1>
        <p className="font-bold text-3xl">
          Premium grooming experience in the heart of Lagos
        </p>
        <div className="flex items-center justify-center p-3">
        <button className=" flex text-center bg-yellow-600 p-3 rounded-sm hover:bg-yellow-500 cursor-pointer">Book Appointment</button></div>
      </div>
    </div>
  );
};

export default HeroSection;
