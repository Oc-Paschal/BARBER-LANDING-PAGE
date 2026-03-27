import React from "react";
import data from "../data.json";

const Pricing = () => {
  return (
    <div id="Pricing" className="bg-black text-white sm:py-6 md:py-16 px-6">
      <div className="text-center mb-10">
        <p className="text-[#D4A017] text-sm tracking-widest uppercase">
          Our Prices
        </p>
        <h1 className="text-3xl font-bold mt-1">
          Simple & Transparent Pricing
        </h1>
      </div>

      <div className="grid sm:grid-rows-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {data.pricing.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-2xl p-6 flex flex-col gap-4 ${
              plan.popular
                ? "bg-[#D4A017] text-black"
                : "bg-[#2C2C2C] text-white"
            }`}
          >
            {plan.popular && (
              <span className="bg-black text-[#D4A017] text-xs font-bold px-3 py-1 rounded-full self-start">
                Most Popular
              </span>
            )}

            <div>
              <h2 className="text-xl font-bold">{plan.title}</h2>
              <p
                className={`text-sm mt-1 ${plan.popular ? "text-black/70" : "text-gray-400"}`}
              >
                {plan.duration}
              </p>
            </div>

            <div className="flex items-end gap-1">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span
                className={`text-sm mb-1 ${plan.popular ? "text-black/70" : "text-gray-400"}`}
              >
                / session
              </span>
            </div>

            <hr
              className={`${plan.popular ? "border-black/20" : "border-white/10"}`}
            />

            <ul className="flex flex-col gap-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <span
                    className={`text-lg ${plan.popular ? "text-black" : "text-[#D4A017]"}`}
                  >
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`mt-auto py-2 px-4 rounded-full font-bold text-sm transition-all duration-300 ${
                plan.popular
                  ? "bg-black text-[#D4A017] hover:bg-black/80"
                  : "border border-[#D4A017] text-[#D4A017] hover:bg-[#D4A017] hover:text-black"
              }`}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
