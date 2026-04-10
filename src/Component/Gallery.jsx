import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "../data.json";

const Gallery = () => {
  const [showMore, setShowMore] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (src) => setSelectedImage(src);
  const closeModal = () => setSelectedImage(null);

  const imgClass =
    "w-full h-full object-cover object-top cursor-pointer hover:scale-105 transition-transform duration-300";

  const visibleImages = data.gallery.slice(0, 4);
  const hiddenImages = data.gallery.slice(4);

  return (
    <motion.div
      id="Gallery"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black h-full p-5"
    >
      {/* HEADER */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <p className="text-[#D4A017] text-sm font-medium tracking-widest uppercase">
          Our Work
        </p>
        <h1 className="text-white text-3xl font-bold mt-1">
          THE GALLERY
        </h1>
      </motion.div>

      {/* GRID (UNCHANGED) */}
      <div
        className="gap-3"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(2, 240px)",
        }}
      >
        {/* Image 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          style={{ gridColumn: "1", gridRow: "1 / 3" }}
          className="rounded-2xl overflow-hidden"
        >
          <img
            src={visibleImages[0]?.image}
            alt={visibleImages[0]?.alt}
            className={imgClass}
            onClick={() => openModal(visibleImages[0]?.image)}
          />
        </motion.div>

        {/* Image 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ gridColumn: "2", gridRow: "1" }}
          className="rounded-2xl overflow-hidden"
        >
          <img
            src={visibleImages[1]?.image}
            alt={visibleImages[1]?.alt}
            className={imgClass}
            onClick={() => openModal(visibleImages[1]?.image)}
          />
        </motion.div>

        {/* Image 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ gridColumn: "3 / 5", gridRow: "1" }}
          className="rounded-2xl overflow-hidden"
        >
          <img
            src={visibleImages[2]?.image}
            alt={visibleImages[2]?.alt}
            className={imgClass}
            onClick={() => openModal(visibleImages[2]?.image)}
          />
        </motion.div>

        {/* Image 4 + overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          style={{ gridColumn: "2 / 5", gridRow: "2" }}
          className="rounded-2xl overflow-hidden relative"
        >
          <img
            src={visibleImages[3]?.image}
            alt={visibleImages[3]?.alt}
            className={imgClass}
            onClick={() => openModal(visibleImages[3]?.image)}
          />

          {!showMore && (
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3 pointer-events-none">
              <p className="text-white text-sm tracking-widest uppercase">
                +7 more photos
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowMore(true);
                }}
                className="bg-[#D4A017] text-black font-bold text-sm px-6 py-2 rounded-full pointer-events-auto"
              >
                View More
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>

      {/* SECOND GRID */}
      <AnimatePresence>
        {showMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="gap-3 mt-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "repeat(3, 240px)",
            }}
          >
            {hiddenImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl overflow-hidden"
              >
                <img
                  src={img.image}
                  alt={img.alt}
                  className={imgClass}
                  onClick={() => openModal(img.image)}
                />
              </motion.div>
            ))}

            <div style={{ gridColumn: "1 / 5" }} className="flex justify-center pt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowMore(false)}
                className="border border-[#D4A017] text-[#D4A017] font-bold text-sm px-6 py-2 rounded-full hover:bg-[#D4A017] hover:text-black"
              >
                Show Less
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;