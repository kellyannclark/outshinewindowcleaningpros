import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOutsideMenu =
        menuRef.current && !menuRef.current.contains(event.target);

      const clickedOutsideToggle =
        toggleRef.current && !toggleRef.current.contains(event.target);

      if (clickedOutsideMenu && clickedOutsideToggle) {
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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    closeMenus();
  };

  return (
    <>


      <header className="header">
        <div className="header-container">
          <a
            href="/"
            className="logo-link"
            aria-label="Outshine Window Cleaning Pros home"
          >
            <img
              src="/logo1.png"
              alt="Outshine Window Cleaning Pros"
              className="logo"
            />
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <button
              type="button"
              className="nav-link"
              onClick={() => scrollToSection("about")}
            >
              About Us
            </button>

            <div className="desktop-services-menu">
              <button
                type="button"
                className="nav-link services-trigger"
                onClick={() => setServicesOpen((current) => !current)}
                aria-expanded={servicesOpen}
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
                className={`services-dropdown ${
                  servicesOpen ? "services-dropdown-active" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => scrollToSection("exterior-window-cleaning")}
                >
                  Exterior Window Cleaning
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("interior-window-cleaning")}
                >
                  Interior Window Cleaning
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("screen-cleaning")}
                >
                  Screen Cleaning Services
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("track-detailing")}
                >
                  Track Detailing
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("solar-panel-cleaning")}
                >
                  Solar Panel Cleaning
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("gutter-cleaning")}
                >
                  Gutter Cleaning
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("pressure-washing")}
                >
                  Pressure Washing
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("christmas-lights")}
                >
                  Christmas Light Installation
                </button>
              </div>
            </div>

            <button
              type="button"
              className="nav-link"
              onClick={() => scrollToSection("reviews")}
            >
              Reviews
            </button>

            <button
              type="button"
              className="header-quote-button"
              onClick={() => scrollToSection("contact")}
            >
              Get a Free Quote
            </button>
          </nav>

          <a className="header-phone" href="tel:8016618232">
            <span aria-hidden="true">☎</span>
            <span>(801) 661-8232</span>
          </a>

          <div className="mobile-menu-wrapper">
            <button
              type="button"
              className="menu-toggle"
              ref={toggleRef}
              onClick={() => {
                setMenuOpen((current) => !current);
                setServicesOpen(false);
              }}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>

            <nav
              ref={menuRef}
              className={`mobile-nav ${menuOpen ? "mobile-nav-active" : ""}`}
              aria-label="Mobile navigation"
            >
              <button
                type="button"
                onClick={() => scrollToSection("about")}
              >
                About Us
              </button>

              <button
                type="button"
                className="mobile-services-trigger"
                onClick={() => setServicesOpen((current) => !current)}
                aria-expanded={servicesOpen}
              >
                <span>Our Services</span>
                <span aria-hidden="true">{servicesOpen ? "−" : "+"}</span>
              </button>

              <div
                className={`mobile-services-list ${
                  servicesOpen ? "mobile-services-list-active" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => scrollToSection("exterior-window-cleaning")}
                >
                  Exterior Window Cleaning
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("interior-window-cleaning")}
                >
                  Interior Window Cleaning
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("screen-cleaning")}
                >
                  Screen Cleaning Services
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("track-detailing")}
                >
                  Track Detailing
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("solar-panel-cleaning")}
                >
                  Solar Panel Cleaning
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("gutter-cleaning")}
                >
                  Gutter Cleaning
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("pressure-washing")}
                >
                  Pressure Washing
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("christmas-lights")}
                >
                  Christmas Light Installation
                </button>
              </div>

              <button
                type="button"
                onClick={() => scrollToSection("reviews")}
              >
                Reviews
              </button>

            <button
              type="button"
              className="header-quote-button"
              onClick={() => window.location.href = "tel:8016618232"}
            >
              Call Us
            </button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;