import React from "react";
import { Link } from "react-router-dom";

const FinalCTASection = () => {
  return (
    <section
      className="final-cta-section"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/hero3.jpg)`,
      }}
    >
      <div className="final-cta-overlay" />

      <div className="final-cta-content">
        <p className="final-cta-eyebrow">
          Professional Window Cleaning in Utah
        </p>

        <h2 className="final-cta-title">
          Ready to Let Your Home{" "}
          <span className="outshine-word">OUTSHINE?</span>
        </h2>

        <p className="final-cta-description">
          Whether you need a one-time cleaning or year-round maintenance,
          we’ll make your windows sparkle with professional service you can
          trust.
        </p>

        <div className="final-cta-buttons">
          <Link
            to="/quote"
            className="final-cta-primary"
            aria-label="Get a free window cleaning quote"
          >
            Get My Free Quote

            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="final-cta-arrow"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <a
            href="tel:8016618232"
            className="final-cta-secondary"
            aria-label="Call Outshine Window Cleaning Pros at 801-661-8232"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="final-cta-phone-icon"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2
                19.79 19.79 0 0 1-8.63-3.07
                19.5 19.5 0 0 1-6-6
                19.79 19.79 0 0 1-3.07-8.67
                A2 2 0 0 1 4.11 2h3
                a2 2 0 0 1 2 1.72
                12.84 12.84 0 0 0 .7 2.81
                2 2 0 0 1-.45 2.11L8.09 9.91
                a16 16 0 0 0 6 6l1.27-1.27
                a2 2 0 0 1 2.11-.45
                12.84 12.84 0 0 0 2.81.7
                A2 2 0 0 1 22 16.92z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            Call (801) 661-8232
          </a>
        </div>

        <div className="final-cta-trust-row">
          <div className="final-cta-trust-item">
            <span className="final-cta-check">✓</span>
            <span>100+ Google Reviews</span>
          </div>

          <div className="final-cta-trust-item">
            <span className="final-cta-check">✓</span>
            <span>Professional Service</span>
          </div>

          <div className="final-cta-trust-item">
            <span className="final-cta-check">✓</span>
            <span>7-Day Rain Guarantee</span>
          </div>

          <div className="final-cta-trust-item">
            <span className="final-cta-check">✓</span>
            <span>Free Estimates</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;