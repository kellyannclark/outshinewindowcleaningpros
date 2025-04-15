import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Outshine Window Cleaning Pros. All rights reserved.</p>
        <p>Serving Utah, Salt Lake, & Wasatch Counties</p>
        <p>
          <a href="tel:8016618232">📞 (801) 661-8232</a> |{" "}
          <a href="mailto:outshinewindowpros@gmail.com">✉️ outshinewindowpros@gmail.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
