import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      {/* Overlay container for badge + tagline */}
      <div className="hero-overlay">
        <img src="/fivestar.png" alt="5 Star Badge" className="fivestar-badge" />
        <img src="/tagline.png" alt="Tagline" className="hero-tagline" />
      </div>

      {/* Background image */}
      <img src="/hero.png" alt="Hero Background" className="hero-img" />
    </section>
  );
};

export default Hero;
