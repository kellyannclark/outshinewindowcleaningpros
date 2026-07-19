import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        {/* BRAND */}
        <div className="footer-brand-column">
          <Link
            to="/"
            className="footer-logo-link"
            aria-label="Go to the Outshine homepage"
          >
            <img
              src="/logo1.png"
              alt="Outshine Window Cleaning Pros"
              className="footer-logo"
            />
          </Link>

          <p className="footer-brand-copy">
            Professional window cleaning and exterior property care that helps
            your home or business feel brighter, cleaner, and beautifully cared
            for.
          </p>

          <div className="footer-social-links">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Outshine on Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Outshine on Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M14 8h3V4h-3c-3 0-5 2-5 5v2H6v4h3v7h4v-7h3.2l.8-4H13V9c0-.7.3-1 1-1z"
                  fill="currentColor"
                />
              </svg>
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Outshine on YouTube"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M21 8.3a3 3 0 0 0-2.1-2.1C17 5.7 12 5.7 12 5.7s-5 0-6.9.5A3 3 0 0 0 3 8.3 31 31 0 0 0 2.5 12 31 31 0 0 0 3 15.7a3 3 0 0 0 2.1 2.1c1.9.5 6.9.5 6.9.5s5 0 6.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-3.7 31 31 0 0 0-.5-3.7z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <path
                  d="M10 9l5 3-5 3z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* COMPANY */}
        <div className="footer-column">
          <h3>Company</h3>

          <nav
            className="footer-links"
            aria-label="Company footer navigation"
          >
            <Link to="/about">About Us</Link>

            <Link to="/quote">Get a Free Quote</Link>

            <Link to="/reviews">Reviews</Link>

            <Link to="/exterior-window-cleaning">
              Our Services
            </Link>

            <a href="tel:8016618232">
              Call Us
            </a>

            <a href="mailto:outshinewindowcleaningpros@gmail.com">
              Contact
            </a>
          </nav>
        </div>

        {/* SERVICES */}
        <div className="footer-column">
          <h3>Services</h3>

          <nav
            className="footer-links"
            aria-label="Service footer navigation"
          >
            <Link to="/exterior-window-cleaning">
              Exterior Window Cleaning
            </Link>

            <Link to="/interior-window-cleaning">
              Interior Window Cleaning
            </Link>

            <Link to="/screen-cleaning">
              Screen Cleaning
            </Link>

            <Link to="/track-detailing">
              Track Detailing
            </Link>

            <Link to="/solar-panel-cleaning">
              Solar Panel Cleaning
            </Link>

            <Link to="/gutter-cleaning">
              Gutter Cleaning
            </Link>

            <Link to="/pressure-washing">
              Pressure Washing
            </Link>

            <Link to="/christmas-lights">
              Christmas Light Installation
            </Link>
          </nav>
        </div>

        {/* AREAS SERVED */}
        <div className="footer-column">
          <h3>Areas Served</h3>

          <div className="footer-links">
            <span>Utah County, UT</span>
            <span>Salt Lake County, UT</span>
            <span>Summit County, UT</span>
            <span>Wasatch County, UT</span>
            <span>Spanish Fork, UT</span>
            <span>Provo, UT</span>
            <span>Springville, UT</span>
            <span>Mapleton, UT</span>
            <span>Santaquin, UT</span>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} Outshine Window Cleaning Pros. All
            rights reserved.
          </p>

          <div className="footer-bottom-links">
            <Link to="/privacy-policy">
              Privacy Policy
            </Link>

            <Link to="/terms">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;