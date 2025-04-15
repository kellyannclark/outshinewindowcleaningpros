import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null); // <== NEW: hamburger button ref

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* ✅ Top Bar Section */}
      <div className="top-bar">
        <p>📍 Serving Utah, Salt Lake & Wasatch County — Call (801) 661-8232</p>
      </div>

      {/* ✅ Main Header */}
      <header className="header">
        <div className="header-container">
          <img src="/logo1.png" alt="Outshine Window Cleaning" className="logo" />
          <div className="header-sparkle-overlay"></div>

          <div className="phone-number">
            <a href="tel:8016618232">
              <span className="phone-icon" role="img" aria-label="phone">📞</span>
              (801) 661-8232
            </a>
          </div>

          {/* ✅ Hamburger + Dropdown Wrapper */}
          <div className="menu-wrapper" style={{ position: "relative" }}>
            <button
              className="menu-toggle"
              ref={toggleRef} // <== assign the ref here
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>

            <nav
              ref={menuRef}
              className={`dropdown-menu ${menuOpen ? "active" : ""}`}
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("services");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                    setMenuOpen(false);
                  }
                }}
              >
                Services
              </a>

              <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
