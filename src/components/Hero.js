import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      {/* ✅ Main Hero Image */}
      <img src="/hero.jpg" alt="Hero Background" className="hero-img" />

      {/* ✅ Overlay Image - Positioned Separately */}
      <img src="/overlay.png" alt="Overlay" className="hero-overlay" />

      {/* ✅ Text Inside Hero */}
      <h2>We'll Let the Light In!</h2>
    </section>
  );
};

export default Hero;


