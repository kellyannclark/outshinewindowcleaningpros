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
      <CardSlider /> 
    </div>
  );
}

export default App;
