import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";  
import './App.css';
import './index.css';
import CardSlider from "./components/Card-slider"; 



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
    </div>
  );
}


export default App;
