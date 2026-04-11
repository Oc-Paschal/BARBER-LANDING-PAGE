import React from "react";
import { motion } from "framer-motion";
import data from "../data.json";

const Feature = () => {
  const { tagline, title, description, buttonText, rightImage, leftImage } =
    data.features;

  return (
    <motion.section
      className="bg-[#2C2C2C] text-white my-9 px-4 md:px-10 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10">

        {/* Left Image */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-[300px]  flex justify-center"
        >
          <img
            src={rightImage}
            alt="Feature"
            className="w-[300px] rounded-md object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/3 text-center space-y-4"
        >
          <p className="text-lg font-semibold">{tagline}</p>

          <h1 className="text-2xl md:text-3xl font-bold leading-tight">
            {title}
          </h1>

          <p className="text-gray-300 text-sm md:text-base">
            {description}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-600 hover:bg-yellow-500 px-6 py-3 rounded-md cursor-pointer transition"
          >
            {buttonText}
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/3 flex justify-center"
        >
          <img
            src={leftImage}
            alt="Feature"
            className="w-[300px] rounded-md object-cover"
          />
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Feature;