import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img src="/logo.png" alt="Outshine Window Cleaning" className="logo" />


        {/* Navigation Links */}
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
