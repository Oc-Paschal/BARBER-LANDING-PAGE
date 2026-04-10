import React, { useState } from "react";
import { motion } from "framer-motion";

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
    <motion.div
      id="Contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black text-white px-4 py-16"
    >
      {/* HEADER */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-yellow-500 text-lg font-semibold uppercase tracking-widest">
          Get In Touch
        </p>
        <h1 className="text-4xl font-bold mt-2">Contact Us</h1>
        <p className="text-gray-400 mt-3 text-sm">
          Book an appointment or send us a message — we'd love to hear from you.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          {[
            {
              title: "📞 Phone & Email",
              content: [
                "📱 +234 800 000 0000",
                "✉️ hello@barbershop.com",
              ],
            },
            {
              title: "📍 Location",
              content: ["123 Barber Street,", "Lagos, Nigeria"],
            },
            {
              title: "🕐 Working Hours",
              content: [
                "Monday - Friday: 8:00 AM – 8:00 PM",
                "Saturday: 9:00 AM – 6:00 PM",
                "Sunday: Closed",
              ],
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#2C2C2C] p-6 rounded-md"
            >
              <h2 className="text-xl font-bold mb-4 text-yellow-500">
                {item.title}
              </h2>
              {item.content.map((text, idx) => (
                <p key={idx} className="text-gray-300 mb-1">
                  {text}
                </p>
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#2C2C2C] p-8 rounded-md"
        >
          <h2 className="text-xl font-bold mb-6 text-yellow-500">
            ✉️ Send a Message
          </h2>

          <div className="flex flex-col gap-4">
            {["name", "email", "phone"].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                placeholder={`Your ${field}`}
                value={formData[field]}
                onChange={handleChange}
                className="bg-black border border-gray-600 text-white p-3 rounded-md focus:outline-none focus:border-yellow-500 w-full"
              />
            ))}

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="bg-black border border-gray-600 text-white p-3 rounded-md focus:outline-none focus:border-yellow-500 w-full resize-none"
            />

            <motion.button
              onClick={handleSubmit}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold p-3 rounded-md cursor-pointer transition-colors duration-200 w-full"
            >
              Send Message
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactUs;