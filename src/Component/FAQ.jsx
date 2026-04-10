import React, { useState } from "react";
import {motion} from "framer-motion";
import data from "../data.json";

const Faq = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <motion.div className="bg-black text-white sm:py-5 md:py-16 px-6">
      <div className="text-center mb-10">
        <p className="text-[#D4A017] text-sm tracking-widest uppercase">
          Got Questions?
        </p>
        <h1 className="text-3xl font-bold mt-1">Frequently Asked Questions</h1>
      </div>

      <div className="max-w-2xl mx-auto flex flex-col gap-3">
        {data.faq.map((item) => (
          <div
            key={item.id}
            className="bg-[#2C2C2C] rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <span className="font-semibold">{item.question}</span>
              <span className="text-[#D4A017] text-xl">
                {openId === item.id ? "−" : "+"}
              </span>
            </button>

            {openId === item.id && (
              <div className="px-5 pb-5 text-gray-300 text-sm leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Faq;
