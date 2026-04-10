import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center text-white px-4 md:px-10"
    >
      <div className="max-w-3xl text-center space-y-4 md:space-y-6">
        <p className="font-bold text-xl md:text-3xl">
          Clean Cuts. <span className="text-yellow-500">Fresh Looks</span>
        </p>

        <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
          LAGOS FINEST <span className="text-yellow-500">BARBERSHOP</span>
        </h1>

        <p className="text-base md:text-2xl font-medium text-gray-300">
          <span className="text-yellow-500">Premium grooming</span> experience
          in the heart of Lagos
        </p>

        <div className="pt-2">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#Contact"
            className="inline-block bg-yellow-600 px-6 py-3 rounded-md hover:bg-yellow-500 transition"
          >
            Book Appointment
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
