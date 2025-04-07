import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
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
        <p>📍 Serving Utah County — Professional Window & Exterior Cleaning</p>
      </div>

      {/* ✅ Main Header */}
      <header className="header">
        <div className="header-container">
          <img src="/logo1.png" alt="Outshine Window Cleaning" className="logo" />

          <div className="phone-number">
            <a href="tel:8016618232">(801) 661-8232</a>
          </div>

          <button 
            className="menu-toggle" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <nav ref={menuRef} className={`nav ${menuOpen ? "active" : ""}`}>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
