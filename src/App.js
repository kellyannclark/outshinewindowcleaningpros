import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import About from "./components/About";
import RecurringPlans from "./components/RecurringPlans";
import ReviewsSection from "./components/ReviewsSection";
import "./App.css";
import "./index.css";

function HomePage() {
  return (
    <>
      <Hero />

      <div className="site-container">
        {/* Our Services Header */}


        <ServicesSection />
        <RecurringPlans />
        <ReviewsSection />

        <div className="video-wrapper">
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/mMh0BPsMjuA?si=k7_tUCsRJkgVtcX6"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        {/* Contact Form Section */}
        <section
          id="contact"
          style={{
            padding: "80px 20px",
            backgroundColor: "#f5fafe",
          }}
        >
          <h2 className="text-4xl text-center font-bold mb-8">
            CONTACT US
          </h2>

          <ContactForm />
        </section>
      </div>
    </>
  );
}

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const topBar = document.querySelector(".top-bar");

      if (!topBar) return;

      if (window.scrollY > 30) {
        topBar.classList.add("hidden");
      } else {
        topBar.classList.remove("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
   
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>

  );
}

export default App;