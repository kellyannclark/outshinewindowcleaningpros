import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import RecurringPlans from "./components/RecurringPlans";
import ReviewsSection from "./components/ReviewsSection";
import ServiceAreasSection from "./components/ServiceAreasSection";
import FinalCTASection from "./components/FinalCTASection";

import About from "./components/About";
import QuotePage from "./components/QuotePage";
import ReviewPage from "./components/ReviewPage";
import ExteriorWindowPage from "./components/ExteriorWindowPage";
import InteriorWindowPage from "./components/InteriorWindowPage";
import ScreenCleaningPage from "./components/ScreenCleaningPage";
import TrackDetailingPage from "./components/TrackDetailingPage";
import SolarPanelCleaningPage from "./components/SolarPanelCleaningPage";
import GutterCleaningPage from "./components/GutterCleaningPage";
import PressureWashingPage from "./components/PressureWashingPage";
import ChristmasLightPage from "./components/ChristmasLightPage";
import CommercialCleaner from "./components/CommercialCleaner";

import "./App.css";
import "./index.css";

function HomePage() {
  return (
    <>
      <Hero />

      <div className="site-container">
        <ServicesSection />
        <RecurringPlans />
        <ReviewsSection />
        <ServiceAreasSection />
        <FinalCTASection />
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/reviews" element={<ReviewPage />} />

        <Route
          path="/exterior-window-cleaning"
          element={<ExteriorWindowPage />}
        />

        <Route
          path="/interior-window-cleaning"
          element={<InteriorWindowPage />}
        />

        <Route
          path="/screen-cleaning"
          element={<ScreenCleaningPage />}
        />

        <Route
        path="/track-detailing"
        element={<TrackDetailingPage />}
      />

      <Route
        path="/solar-panel-cleaning"
        element={<SolarPanelCleaningPage />}
      />

      <Route
        path="/gutter-cleaning"
        element={<GutterCleaningPage />}
      />

      <Route
        path="/pressure-washing"
        element={<PressureWashingPage />}
      />

      <Route
        path="/christmas-lights"
        element={<ChristmasLightPage />}
      />
      <Route
        path="/commercial-cleaning"
        element={<CommercialCleaner />}
      />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;