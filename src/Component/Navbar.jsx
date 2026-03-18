import React from "react";
import logo from "../assets/Images/modern_clipper_logo.svg";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center border-b border-gray-800 text-white">
      <div className="flex">
        <img src={logo} alt="Website Logo" className="w-20" />
        <h1 className="text-3xl font-serif font-semibold">LINGO</h1>
      </div>
      <nav className="space-x-6 hidden md:block">
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
        <a href="#" className="hover:text-yellow-500">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
