import React from "react";
import logo from "../assets/Images/barber_logo_yellow.png";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center border-b border-gray-800 text-white pt-2 pr-2">
      <div className="flex">
        <img src={logo} alt="Website Logo" className="w-20" />
        <h1 className="text-3xl font-serif font-semibold">FEGS</h1>
      </div>
      <nav className="space-x-6 hidden md:block font-medium">
        <a href="#" className="hover:text-yellow-500">
          Home
        </a>
        <a href="#" className="hover:text-yellow-500">
          Services
        </a>
        <a href="#" className="hover:text-yellow-500">
          Gallery
        </a>
        <a href="#" className="hover:text-yellow-500">
          Testimonials
        </a>
       
      </nav>
      <div>
         <a href="#" className="hover: bg-yellow-600 p-3 w-20 rounded-md hover:bg-yellow-500 cursor-pointer">
          Contact Us
        </a>

      </div>
    </header>
  );
};

export default Navbar;
