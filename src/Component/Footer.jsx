import React from "react";
import data from "../data.json";

const Footer = () => {
  const { name, tagline, address, phone, email, links, socials } = data.footer;

  return (
    <footer className="bg-[#111111] text-white pt-16 pb-6 px-10">
      <div className="grid grid-cols-3 gap-10 mb-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-[#D4A017] text-3xl font-bold tracking-widest">
            {name}
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">{tagline}</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your trusted barbershop for premium grooming experiences. We deliver
            sharp cuts and clean finishes every single time.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-[#D4A017] text-sm font-bold tracking-widest uppercase">
            Quick Links
          </h2>
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="text-gray-400 text-sm hover:text-[#D4A017] transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-[#D4A017] text-sm font-bold tracking-widest uppercase">
            Contact Us
          </h2>
          <ul className="flex flex-col gap-2">
            <li className="text-gray-400 text-sm">📍 {address}</li>
            <li>
              <a
                href={`tel:${phone}`}
                className="text-gray-400 text-sm hover:text-[#D4A017] transition-colors duration-200"
              >
                📞 {phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${email}`}
                className="text-gray-400 text-sm hover:text-[#D4A017] transition-colors duration-200"
              >
                ✉️ {email}
              </a>
            </li>
          </ul>

          <h2 className="text-[#D4A017] text-sm font-bold tracking-widest uppercase mt-2">
            Follow Us
          </h2>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 text-sm border border-gray-700 px-3 py-1 rounded-full hover:border-[#D4A017] hover:text-[#D4A017] transition-all duration-200"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-gray-800 mb-6" />

      <div className="flex items-center justify-center text-gray-600 text-xs">
        <p>
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
