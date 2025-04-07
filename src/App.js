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
      <section style={{ paddingTop: "40px" }} className="pb-8 bg-white text-center">
        <h2 className="!text-6xl font-bold text-black">Our Services</h2>
      </section>

      <CardSlider />

      {/* 👇 Contact Form Section */}
      <section id="contact" style={{ padding: "80px 20px", backgroundColor: "#f5fafe" }}>
        <h2 className="text-4xl text-center font-bold mb-8">Contact Us</h2>
        <ContactForm />
      </section>

    </div>
  );
}


export default App;
