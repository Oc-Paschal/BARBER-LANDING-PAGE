import React from "react";
import { motion } from "framer-motion";
import data from "../data.json";
import logs from "../../public/images/barber_script_logo_F.svg";

const Services = () => {
  return (
    <motion.section
      id="Services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black text-white px-4 py-12"
    >
      {/* Top Text */}
      <div className="space-y-3">
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img src={logs} alt="logo" className="w-40 md:w-60" />
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-lg md:text-xl font-medium"
        >
          WE'RE A PERFECT GENTLEMEN'S CHOICE
        </motion.p>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-2xl md:text-3xl font-bold"
        >
          YOU LOOK GREAT, HOW WE MAKE IT PERFECT
        </motion.h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
        {data.services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="p-5 bg-[#2C2C2C] rounded-md"
          >
            <img
              src={service.images}
              alt={service.title}
              className="w-20 mx-auto [filter:invert(72%)_sepia(75%)_saturate(280%)_hue-rotate(5deg)]"
            />

            <h1 className="text-lg md:text-xl font-bold text-center mt-3">
              {service.title}
            </h1>

            <p className="text-center text-sm mt-2 text-gray-300">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;