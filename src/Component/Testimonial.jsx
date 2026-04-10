import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "../data.json";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const testimonials = data.testimonials;

  const prev = () =>
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);

  const next = () =>
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);

  const active = testimonials[current];

  return (
    <motion.div
      id="Testimonials"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black text-white py-16 px-6"
    >
      {/* HEADER */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-[#D4A017] text-sm tracking-widest uppercase">
          What They Say
        </p>
        <h1 className="text-3xl font-bold mt-1">
          Customer Testimonials
        </h1>
      </motion.div>

      {/* TESTIMONIAL CARD */}
      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="bg-[#2C2C2C] rounded-2xl p-8 flex flex-col gap-6 text-center"
          >
            {/* STARS */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center gap-1"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`text-xl ${
                    i < active.rating
                      ? "text-[#D4A017]"
                      : "text-gray-600"
                  }`}
                >
                  ★
                </span>
              ))}
            </motion.div>

            {/* REVIEW */}
            <p className="text-gray-300 text-base leading-relaxed italic">
              "{active.review}"
            </p>

            {/* USER */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-12 h-12 rounded-full bg-[#D4A017] flex items-center justify-center text-black font-bold text-lg">
                {active.name.charAt(0)}
              </div>
              <p className="font-bold text-white">{active.name}</p>
              <p className="text-gray-400 text-sm">{active.role}</p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* CONTROLS */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="w-10 h-10 rounded-full border border-[#D4A017] text-[#D4A017] flex items-center justify-center hover:bg-[#D4A017] hover:text-black transition-all duration-300"
          >
            ‹
          </motion.button>

          {/* DOTS */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrent(i)}
                animate={{
                  width: i === current ? 24 : 8,
                  backgroundColor:
                    i === current ? "#D4A017" : "#4B5563",
                }}
                transition={{ duration: 0.3 }}
                className="h-2 rounded-full"
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="w-10 h-10 rounded-full border border-[#D4A017] text-[#D4A017] flex items-center justify-center hover:bg-[#D4A017] hover:text-black transition-all duration-300"
          >
            ›
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;