import React from "react";

const AboutHero = () => {
  return (
    <section className="hero">
      <img
        src="/abouthero.png"
        alt="Weston Clark, owner of Outshine Window Cleaning Pros"
        className="hero-img"
      />

      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-review">
            <span className="hero-stars" aria-hidden="true">
              ★★★★★
            </span>

            <span>Family-Owned • Trusted Throughout Utah County</span>
          </div>

          <h1>
            Our Mission
            <span>
              Is Crystal{" "}
              <span className="disappear-word">Clear.</span>
            </span>
          </h1>

          <p>
            We believe exceptional service begins with excellent communication,
            careful workmanship, and treating every home like it’s our own.
          </p>
          <div className="hero-buttons">
                <button
                type="button"
                className="header-quote-button about-hero-call-button"
                onClick={() => (window.location.href = "tel:8016618232")}
                >
                <svg
                    className="button-phone-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.35 1.78.68 2.62a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.45-1.19a2 2 0 0 1 2.11-.45c.84.33 1.72.56 2.62.68A2 2 0 0 1 22 16.92z" />
                </svg>

                <span>CALL US</span>
                </button>
    </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;