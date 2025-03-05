import React from "react";

const Hero = () => {
  return (
    <section 
      className="hero" 
      style={{ backgroundImage: "url('/hero.jpg')" }} // ✅ Fix background image
    >
      <h2>We'll Let the Light In!</h2>
    </section>
  );
};

export default Hero;
