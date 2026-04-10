import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/images/barber_logo_yellow.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center border-b border-gray-800 text-white px-4 md:px-10 py-3 bg-transparent"
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Website Logo" className="w-12 md:w-16" />
        <h1 className="text-xl md:text-3xl font-serif font-semibold text-yellow-500">
          FERGS
        </h1>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 font-medium">
        <a href="#Home" className="hover:text-yellow-500">
          Home
        </a>
        <a href="#Services" className="hover:text-yellow-500">
          Services
        </a>
        <a href="#Feature" className="hover:text-yellow-500">
          Feature
        </a>
        <a href="#Gallery" className="hover:text-yellow-500">
          Gallery
        </a>
        <a href="#Testimonials" className="hover:text-yellow-500">
          Testimonials
        </a>
      </nav>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <a
          href="#Contact"
          className="bg-yellow-600 px-4 py-2 rounded-md hover:bg-yellow-500 transition"
        >
          Contact Us
        </a>
      </div>

      {/* Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-gray-800 flex flex-col items-center space-y-4 py-6 md:hidden">
          <a href="#Home" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#Services" onClick={() => setIsOpen(false)}>
            Services
          </a>
          <a href="#Feature" onClick={() => setIsOpen(false)}>
            Feature
          </a>
          <a href="#Gallery" onClick={() => setIsOpen(false)}>
            Gallery
          </a>
          <a href="#Testimonials" onClick={() => setIsOpen(false)}>
            Testimonials
          </a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#Contact"
            className="bg-yellow-600 px-6 py-2 rounded-md hover:bg-yellow-500"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </motion.a>
        </div>
      )}
    </motion.header>
  );
};

export default Navbar;
