import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";  
import './App.css';
import './index.css';
import CardSlider from "./components/Card-slider"; 
import ContactForm from "./components/ContactForm"; // if you have it as a separate file

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const topBar = document.querySelector('.top-bar');
      if (!topBar) return;

      if (window.scrollY > 30) {
        topBar.classList.add('hidden');
      } else {
        topBar.classList.remove('hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />

      <div className="site-container">
        {/* Our Services Header */}
        <section id="services" className="services-header">
          <h2 className="services-title">Our Services</h2>
        </section>

        <CardSlider />

        <div className="video-wrapper">
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/mMh0BPsMjuA?si=k7_tUCsRJkgVtcX6"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Contact Form Section */}
        <section id="contact" style={{ padding: "80px 20px", backgroundColor: "#f5fafe" }}>
          <h2 className="text-4xl text-center font-bold mb-8">CONTACT US</h2>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}

export default App;
