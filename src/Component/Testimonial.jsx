import React, { useState } from "react";
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
    <div id="Testimonials" className="bg-black text-white py-16 px-6">
      <div className="text-center mb-12">
        <p className="text-[#D4A017] text-sm tracking-widest uppercase">
          What They Say
        </p>
        <h1 className="text-3xl font-bold mt-1">Customer Testimonials</h1>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-[#2C2C2C] rounded-2xl p-8 flex flex-col gap-6 text-center">
          <div className="flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`text-xl ${i < active.rating ? "text-[#D4A017]" : "text-gray-600"}`}
              >
                ★
              </span>
            ))}
          </div>

          <p className="text-gray-300 text-base leading-relaxed italic">
            "{active.review}"
          </p>

          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-[#D4A017] flex items-center justify-center text-black font-bold text-lg">
              {active.name.charAt(0)}
            </div>
            <p className="font-bold text-white">{active.name}</p>
            <p className="text-gray-400 text-sm">{active.role}</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-[#D4A017] text-[#D4A017] flex items-center justify-center hover:bg-[#D4A017] hover:text-black transition-all duration-300"
          >
            ‹
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-[#D4A017] w-6" : "bg-gray-600"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-[#D4A017] text-[#D4A017] flex items-center justify-center hover:bg-[#D4A017] hover:text-black transition-all duration-300"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
