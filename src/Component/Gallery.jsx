import React, { useState } from "react";
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
    <div id="Gallery" className="bg-black h-full p-5">
      <div className="text-center mb-8">
        <p className="text-[#D4A017] text-sm font-medium tracking-widest uppercase">
          Our Work
        </p>
        <h1 className="text-white text-3xl font-bold mt-1">THE GALLERY</h1>
      </div>
 
     
      <div
        className="gap-3"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(2, 240px)",
        }}
      >
        {/* Image 1 — tall */}
        <div style={{ gridColumn: "1", gridRow: "1 / 3" }} className="rounded-2xl overflow-hidden">
          <img
            src={visibleImages[0]?.image}
            alt={visibleImages[0]?.alt}
            className={imgClass}
            onClick={() => openModal(visibleImages[0]?.image)}
          />
        </div>
 
        {/* Image 2 — normal */}
        <div style={{ gridColumn: "2", gridRow: "1" }} className="rounded-2xl overflow-hidden">
          <img
            src={visibleImages[1]?.image}
            alt={visibleImages[1]?.alt}
            className={imgClass}
            onClick={() => openModal(visibleImages[1]?.image)}
          />
        </div>
 
        {/* Image 3 — wide */}
        <div style={{ gridColumn: "3 / 5", gridRow: "1" }} className="rounded-2xl overflow-hidden">
          <img
            src={visibleImages[2]?.image}
            alt={visibleImages[2]?.alt}
            className={imgClass}
            onClick={() => openModal(visibleImages[2]?.image)}
          />
        </div>
 
        {/* Image 4 — wide with View More overlay */}
        <div style={{ gridColumn: "2 / 5", gridRow: "2" }} className="rounded-2xl overflow-hidden relative">
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
              <button
                onClick={(e) => { e.stopPropagation(); setShowMore(true); }}
                className="bg-[#D4A017] text-black font-bold text-sm px-6 py-2 rounded-full hover:bg-yellow-400 transition-all duration-300 pointer-events-auto"
              >
                View More
              </button>
            </div>
          )}
        </div>
      </div>
 
      {/* Second Bento Grid — remaining 7 images */}
      {showMore && (
        <div
          className="gap-3 mt-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(3, 240px)",
          }}
        >
          {/* Image 5 — wide */}
          <div style={{ gridColumn: "1 / 3", gridRow: "1" }} className="rounded-2xl overflow-hidden">
            <img
              src={hiddenImages[0]?.image}
              alt={hiddenImages[0]?.alt}
              className={imgClass}
              onClick={() => openModal(hiddenImages[0]?.image)}
            />
          </div>
 
          {/* Image 6 — normal */}
          <div style={{ gridColumn: "3", gridRow: "1" }} className="rounded-2xl overflow-hidden">
            <img
              src={hiddenImages[1]?.image}
              alt={hiddenImages[1]?.alt}
              className={imgClass}
              onClick={() => openModal(hiddenImages[1]?.image)}
            />
          </div>
 
          {/* Image 7 — tall */}
          <div style={{ gridColumn: "4", gridRow: "1 / 3" }} className="rounded-2xl overflow-hidden">
            <img
              src={hiddenImages[2]?.image}
              alt={hiddenImages[2]?.alt}
              className={imgClass}
              onClick={() => openModal(hiddenImages[2]?.image)}
            />
          </div>
 
          {/* Image 8 — normal */}
          <div style={{ gridColumn: "1", gridRow: "2" }} className="rounded-2xl overflow-hidden">
            <img
              src={hiddenImages[3]?.image}
              alt={hiddenImages[3]?.alt}
              className={imgClass}
              onClick={() => openModal(hiddenImages[3]?.image)}
            />
          </div>
 
          {/* Image 9 — wide */}
          <div style={{ gridColumn: "2 / 4", gridRow: "2" }} className="rounded-2xl overflow-hidden">
            <img
              src={hiddenImages[4]?.image}
              alt={hiddenImages[4]?.alt}
              className={imgClass}
              onClick={() => openModal(hiddenImages[4]?.image)}
            />
          </div>
 
          {/* Image 10 — wide */}
          <div style={{ gridColumn: "1 / 3", gridRow: "3" }} className="rounded-2xl overflow-hidden">
            <img
              src={hiddenImages[5]?.image}
              alt={hiddenImages[5]?.alt}
              className={imgClass}
              onClick={() => openModal(hiddenImages[5]?.image)}
            />
          </div>
 
          {/* Image 11 — wide */}
          <div style={{ gridColumn: "3 / 5", gridRow: "3" }} className="rounded-2xl overflow-hidden">
            <img
              src={hiddenImages[6]?.image}
              alt={hiddenImages[6]?.alt}
              className={imgClass}
              onClick={() => openModal(hiddenImages[6]?.image)}
            />
          </div>
 
          {/* Show Less button */}
          <div style={{ gridColumn: "1 / 5" }} className="flex items-center justify-center pt-2">
            <button
              onClick={() => setShowMore(false)}
              className="border border-[#D4A017] text-[#D4A017] font-bold text-sm px-6 py-2 rounded-full hover:bg-[#D4A017] hover:text-black transition-all duration-300"
            >
              Show Less
            </button>
          </div>
        </div>
      )}
 
      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-5 right-6 text-white text-4xl font-light hover:text-[#D4A017] transition-colors duration-200"
          >
            &times;
          </button>
          <img
            src={selectedImage}
            alt="full view"
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
 
export default Gallery;