import React from "react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <img
        src="/hero3.jpg"
        alt="Professional residential window cleaning in Utah County"
        className="hero-img"
      />

      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-review">
            <span className="hero-stars" aria-hidden="true">
              ★★★★★
            </span>

            <span>5-Star Rated • Trusted by Utah County Homeowners</span>
          </div>

          <h1>
            Dirty Windows?
            <span>
              We Make Them{" "}
              <span className="disappear-word">Disappear.</span>
            </span>
          </h1>

          <p>
            Professional window cleaning in Utah County that restores clear
            views, brighter rooms, and a home you’re proud of.
          </p>


        </div>
      </div>
    </section>
  );
};

export default Hero;