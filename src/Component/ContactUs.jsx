import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div id="Contact" className="bg-black text-white px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-yellow-500 text-lg font-semibold uppercase tracking-widest">
          Get In Touch
        </p>
        <h1 className="text-4xl font-bold mt-2">Contact Us</h1>
        <p className="text-gray-400 mt-3 text-sm">
          Book an appointment or send us a message — we'd love to hear from you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left — Info */}
        <div className="flex flex-col gap-8">
          {/* Phone & Email */}
          <div className="bg-[#2C2C2C] p-6 rounded-md">
            <h2 className="text-xl font-bold mb-4 text-yellow-500">📞 Phone & Email</h2>
            <p className="text-gray-300 mb-2">📱 +234 800 000 0000</p>
            <p className="text-gray-300">✉️ hello@barbershop.com</p>
          </div>

          {/* Location */}
          <div className="bg-[#2C2C2C] p-6 rounded-md">
            <h2 className="text-xl font-bold mb-4 text-yellow-500">📍 Location</h2>
            <p className="text-gray-300">123 Barber Street,</p>
            <p className="text-gray-300">Lagos, Nigeria</p>
          </div>

          {/* Working Hours */}
          <div className="bg-[#2C2C2C] p-6 rounded-md">
            <h2 className="text-xl font-bold mb-4 text-yellow-500">🕐 Working Hours</h2>
            <div className="flex justify-between text-gray-300 mb-1">
              <span>Monday - Friday</span>
              <span>8:00 AM – 8:00 PM</span>
            </div>
            <div className="flex justify-between text-gray-300 mb-1">
              <span>Saturday</span>
              <span>9:00 AM – 6:00 PM</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Sunday</span>
              <span className="text-red-400">Closed</span>
            </div>
          </div>
        </div>

        {/* Right — Contact Form */}
        <div className="bg-[#2C2C2C] p-8 rounded-md">
          <h2 className="text-xl font-bold mb-6 text-yellow-500">✉️ Send a Message</h2>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-black border border-gray-600 text-white p-3 rounded-md focus:outline-none focus:border-yellow-500 w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-black border border-gray-600 text-white p-3 rounded-md focus:outline-none focus:border-yellow-500 w-full"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="bg-black border border-gray-600 text-white p-3 rounded-md focus:outline-none focus:border-yellow-500 w-full"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="bg-black border border-gray-600 text-white p-3 rounded-md focus:outline-none focus:border-yellow-500 w-full resize-none"
            />
            <button
              onClick={handleSubmit}
              className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold p-3 rounded-md cursor-pointer transition-colors duration-200 w-full"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;