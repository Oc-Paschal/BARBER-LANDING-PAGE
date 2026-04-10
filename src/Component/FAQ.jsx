import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "../data.json";

const Faq = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black text-white sm:py-5 md:py-16 px-6"
    >
      {/* Header */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="text-[#D4A017] text-sm tracking-widest uppercase">
          Got Questions?
        </p>
        <h1 className="text-3xl font-bold mt-1">
          Frequently Asked Questions
        </h1>
      </motion.div>

      {/* FAQ LIST */}
      <div className="max-w-2xl mx-auto flex flex-col gap-3">
        {data.faq.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              className="bg-[#2C2C2C] rounded-xl overflow-hidden"
            >
              {/* QUESTION */}
              <button
                onClick={() => toggle(item.id)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold">{item.question}</span>

                {/* ICON ANIMATION */}
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#D4A017] text-xl"
                >
                  {isOpen ? "−" : "+"}
                </motion.span>
              </button>

              {/* ANSWER */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5 text-gray-300 text-sm leading-relaxed overflow-hidden"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Faq;