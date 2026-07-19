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
import ServiceAreasSection from "./components/ServiceAreasSection";
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
        <ServiceAreasSection />



        {/* Contact Form Section */}
        <section
          id="contact"
          style={{
            padding: "80px 20px",
            backgroundColor: "#f5fafe",
          }}
        >



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