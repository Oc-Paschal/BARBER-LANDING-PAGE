import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-white px-4 md:px-10">
      <div className="max-w-3xl text-center space-y-4 md:space-y-6">
        
        <p className="font-bold text-xl md:text-3xl">
          Clean Cuts. <span className="text-yellow-500">Fresh Looks</span>
        </p>

        <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
          LAGOS FINEST <span className="text-yellow-500">BARBERSHOP</span>
        </h1>

        <p className="text-base md:text-2xl font-medium text-gray-300">
          <span className="text-yellow-500">Premium grooming</span> experience in the heart of Lagos
        </p>

        <div className="pt-2">
          <a
            href="#Contact"
            className="inline-block bg-yellow-600 px-6 py-3 rounded-md hover:bg-yellow-500 transition"
          >
            Book Appointment
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;