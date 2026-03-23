import React from "react";
import data from "../data.json";
import logs from "../../public/images/barber_script_logo_F.svg";

const Services = () => {
  return (
    <div className="bg-black h-screen text-white">
      <div>
        <div className="flex items-center justify-center ">
          <img src={logs} alt="logs image" className="w-60 " />
        </div>
        <div className="flex items-center justify-center text-xl font-medium ">
          <p>WE'RE A PERFECT GENTLEMEN'S CHOICE</p>
        </div>
        <div className="flex items-center justify-center text-2xl font-bold">
          <h1>YOU LOOK GREAT, HOW WE MAKE IT PERFECT</h1>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 pt-6">
        {data.services.map((service) => (
          <div key={service.id} className="p-4 bg-[#2C2C2C] rounded-md">
            <img
              src={service.images}
              alt={service.title}
              className={`w-24 mx-auto [filter:invert(72%)_sepia(75%)_saturate(280%)_hue-rotate(5deg)]`}
            />
            <h1 className="text-xl font-bold text-center">{service.title}</h1>
            <p className="text-center text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
