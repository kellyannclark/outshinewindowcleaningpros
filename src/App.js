import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";  
import './App.css';
import './index.css';
import CardSlider from "./components/Card-slider"; 
import ContactForm from "./components/ContactForm"; // if you have it as a separate file

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />

{/* Our Services Header */}
      <section id="services" className="services-header">
        <h2 className="services-title">Our Services</h2>
      </section>


      <CardSlider />

      <div class="video-wrapper">
        <div class="video-container">
          <iframe
            src="https://www.youtube.com/embed/mMh0BPsMjuA?si=k7_tUCsRJkgVtcX6"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>



      {/* 👇 Contact Form Section */}
      <section id="contact" style={{ padding: "80px 20px", backgroundColor: "#f5fafe" }}>
        <h2 className="text-4xl text-center font-bold mb-8">CONTACT US</h2>
        <ContactForm />
      </section>

    </div>
  );
}


export default App;
