import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // ✅ Reference for detecting clicks outside

  // ✅ Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false); // ✅ Closes menu when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        {/* ✅ Logo */}
        <img src="/logo1.png" alt="Outshine Window Cleaning" className="logo" />

        {/* ✅ Phone Number */}
        <div className="phone-number">
          <a href="tel:8016618232">(801) 661-8232</a>
        </div>

        {/* ✅ Mobile Menu Button */}
        <button 
          className="menu-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰ {/* Hamburger Icon */}
        </button>

        {/* ✅ Navbar - Wrapped in `menuRef` for click detection */}
        <nav ref={menuRef} className={`nav ${menuOpen ? "active" : ""}`}>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
