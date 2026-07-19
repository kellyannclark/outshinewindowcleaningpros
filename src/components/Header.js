import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const desktopServicesRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOutsideMobileMenu =
        !menuRef.current || !menuRef.current.contains(event.target);

      const clickedOutsideToggle =
        !toggleRef.current || !toggleRef.current.contains(event.target);

      const clickedOutsideDesktopServices =
        !desktopServicesRef.current ||
        !desktopServicesRef.current.contains(event.target);

      if (
        clickedOutsideMobileMenu &&
        clickedOutsideToggle &&
        clickedOutsideDesktopServices
      ) {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMenus = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const navigateTo = (path) => {
    navigate(path);
    closeMenus();
  };

  const callOutshine = () => {
    window.location.href = "tel:8016618232";
    closeMenus();
  };

  return (
    <header className="header">
      <div className="header-container">
        <button
          type="button"
          className="logo-link"
          aria-label="Outshine Window Cleaning Pros home"
          onClick={() => navigateTo("/")}
        >
          <img
            src="/logo1.png"
            alt="Outshine Window Cleaning Pros"
            className="logo"
          />
        </button>

        <nav className="desktop-nav" aria-label="Main navigation">
          <button
            type="button"
            className="nav-link"
            onClick={() => navigateTo("/about")}
          >
            About Us
          </button>

          <div
            className="desktop-services-menu"
            ref={desktopServicesRef}
          >
            <button
              type="button"
              className="nav-link services-trigger"
              onClick={() => setServicesOpen((current) => !current)}
              aria-expanded={servicesOpen}
              aria-controls="desktop-services-dropdown"
            >
              Our Services

              <span
                className={`dropdown-arrow ${
                  servicesOpen ? "dropdown-arrow-open" : ""
                }`}
                aria-hidden="true"
              >
                ▾
              </span>
            </button>

            <div
              id="desktop-services-dropdown"
              className={`services-dropdown ${
                servicesOpen ? "services-dropdown-active" : ""
              }`}
            >
              <button
                type="button"
                onClick={() =>
                  navigateTo("/exterior-window-cleaning")
                }
              >
                Exterior Window Cleaning
              </button>

              <button
                type="button"
                onClick={() =>
                  navigateTo("/interior-window-cleaning")
                }
              >
                Interior Window Cleaning
              </button>

              <button
                type="button"
                onClick={() => navigateTo("/screen-cleaning")}
              >
                Screen Cleaning Services
              </button>

              <button
                type="button"
                onClick={() => navigateTo("/track-detailing")}
              >
                Track Detailing
              </button>

              <button
                type="button"
                onClick={() =>
                  navigateTo("/solar-panel-cleaning")
                }
              >
                Solar Panel Cleaning
              </button>

              <button
                type="button"
                onClick={() => navigateTo("/gutter-cleaning")}
              >
                Gutter Cleaning
              </button>

              <button
                type="button"
                onClick={() => navigateTo("/pressure-washing")}
              >
                Pressure Washing
              </button>

              <button
                type="button"
                onClick={() => navigateTo("/christmas-lights")}
              >
                Christmas Lights
              </button>
            </div>
          </div>

          <button
            type="button"
            className="nav-link"
            onClick={() => navigateTo("/reviews")}
          >
            Reviews
          </button>

          <button
            type="button"
            className="header-quote-button hero-call-button"
            onClick={callOutshine}
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

            <span>Call Us</span>
          </button>
        </nav>

        <div className="mobile-menu-wrapper">
          <button
            type="button"
            className="menu-toggle"
            ref={toggleRef}
            onClick={() => {
              setMenuOpen((current) => !current);
              setServicesOpen(false);
            }}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <nav
            ref={menuRef}
            className={`mobile-nav ${
              menuOpen ? "mobile-nav-active" : ""
            }`}
            aria-label="Mobile navigation"
          >
            <button
              type="button"
              onClick={() => navigateTo("/about")}
            >
              About Us
            </button>

            <button
              type="button"
              className="mobile-services-trigger"
              onClick={() =>
                setServicesOpen((current) => !current)
              }
              aria-expanded={servicesOpen}
              aria-controls="mobile-services-list"
            >
              <span>Our Services</span>

              <span aria-hidden="true">
                {servicesOpen ? "−" : "+"}
              </span>
            </button>

            <div
              id="mobile-services-list"
              className={`mobile-services-list ${
                servicesOpen
                  ? "mobile-services-list-active"
                  : ""
              }`}
            >
              <button
                type="button"
                onClick={() =>
                  navigateTo("/exterior-window-cleaning")
                }
              >
                Exterior Window Cleaning
              </button>

              <button
                type="button"
                onClick={() =>
                  navigateTo("/interior-window-cleaning")
                }
              >
                Interior Window Cleaning
              </button>

              <button
                type="button"
                onClick={() => navigateTo("/screen-cleaning")}
              >
                Screen Cleaning Services
              </button>

              <button
                type="button"
                onClick={() => navigateTo("/track-detailing")}
              >
                Track Detailing
              </button>

              <button
                type="button"
                onClick={() =>
                  navigateTo("/solar-panel-cleaning")
                }
              >
                Solar Panel Cleaning
              </button>

              <button
                type="button"
                onClick={() => navigateTo("/gutter-cleaning")}
              >
                Gutter Cleaning
              </button>

              <button
                type="button"
                onClick={() => navigateTo("/pressure-washing")}
              >
                Pressure Washing
              </button>

              <button
                type="button"
                onClick={() => navigateTo("/christmas-lights")}
              >
                Christmas Lights
              </button>
            </div>

            <button
              type="button"
              onClick={() => navigateTo("/reviews")}
            >
              Reviews
            </button>

            <button
              type="button"
              className="mobile-quote-button"
              onClick={() => navigateTo("/quote")}
            >
              Get a Free Quote
            </button>

            <button
              type="button"
              className="mobile-call-button"
              onClick={callOutshine}
            >
              Call Us
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;