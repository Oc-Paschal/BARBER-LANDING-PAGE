import React from "react";
import logs from "../assets/Images/barber_script_logo_F.svg";
import beardShaving from "../assets/Images/Vintage_Barbershop_Crossed_Hands___Royalty-Free_Vector___VectorStock-removebg-preview.png";
import haircutImage from "../assets/Images/download__2_-removebg-preview.png";
import hairColouring from "../assets/Images/Hair_Coloring_Hairbrush_Hair_Care_PNG-removebg-preview.png";
import accessories from "../assets/Images/Hair_Stylist_Tools_Logo_SVG__PNG__Hairdressing_Monogram_Frame__Barber_Shop__Beauty_Business__T-Shirt_Design__Cut_File__Instant_Download-removebg-preview.png";

const Services = () => {
  return (
    <div className=" text-white">
      <div>
        <div className="flex items-center justify-center">
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
        <div className=" bg-[#2C2C2C] rounded-md">
          <div className="flex items-center justify-center">
          <img
            src={haircutImage}
            className="[filter:invert(72%)_sepia(75%)_saturate(280%)_hue-rotate(5deg)] w-25"
          /></div>
          <h1 className=" flex items-center justify-center text-xl font-bold">HAIRCUTS</h1>
          <p className="break-keep">
            Sharp Cuts, Clean Finish From classic fades to modern styles, our
            barbers deliver precision cuts that suit your face shape and
            personality. Every visit leaves you looking sharp, confident, and
            ready to take on the world.
          </p>
        </div>
        <div className="p-4 bg-[#2C2C2C] rounded-md">
          <div className="flex items-center justify-center">
          <img
            src={beardShaving}
            alt="haircutImage"
            className="[filter:invert(72%)_sepia(75%)_saturate(700%)_hue-rotate(5deg)] w-25"
          /></div>
          <h1 className=" flex items-center justify-center text-xl font-bold">BEARD SHAVING</h1>
          <p className="w-72 flex word-wrap">
            The Perfect Shave, Every Time Whether you prefer a clean shave or a
            well-defined beard, our barbers use the finest tools and techniques
            to shape, trim, and sculpt your facial hair to absolute perfection.
            A true gentleman's experience.
          </p>
        </div>
        <div className="p-4 bg-[#2C2C2C] rounded-md">
          <div className="flex items-center justify-center">
          <img
            src={hairColouring}
            alt="Hair colouring image"
            className="[filter:invert(72%)_sepia(75%)_saturate(700%)_hue-rotate(5deg)] w-40"
          /></div>
          <h1 className=" flex items-center justify-center text-xl font-bold">HAIR COLOURING</h1>
          <p className="w-72 flex word-wrap">
            Bold Colour, Flawless Results From subtle highlights to full
            transformations, our expert colourists bring your vision to life. We
            use premium products that protect your hair while delivering rich,
            long-lasting colour that commands attention.
          </p>
        </div>
        <div className="p-4 bg-[#2C2C2C] rounded-md">
          <div className="flex items-center justify-center">
          <img
            src={accessories}
            alt="Accwssoriesn_image "
            className="[filter:invert(72%)_sepia(75%)_saturate(700%)_hue-rotate(5deg)] w-25"
          /></div>
          <h1 className=" flex items-center justify-center text-xl font-bold">ACCESSORIES</h1>
          <p>
            Everything a Gentleman Needs Complete your grooming routine with our
            carefully curated range of premium barbershop accessories. From
            quality razors and combs to styling products, we stock everything
            you need to maintain your look at home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
