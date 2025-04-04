// Hero.tsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const images = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <AnimatePresence>
      <motion.img
        key={images[index]}
        src={images[index]}
        alt="Hero Slide"
        className="hero-img"
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />

      </AnimatePresence>

      {/* Overlay content (e.g. badge + tagline) */}
      <div className="hero-overlay">
      <img src="/tagline.png" alt="Tagline" className="hero-tagline" />
      <img src="/tagline2.png" alt="Secondary Tagline" className="tagline2" />
    </div>

    </section>
  );
};

export default Hero;

