import React from "react";
import { useNavigate } from "react-router-dom";
import RecurringPlans from "./RecurringPlans";
import ReviewsSection from "./ReviewsSection";
import "./SolarPanelCleaningPage.css";

function SolarPanelCleaningPage() {
  const navigate = useNavigate();

  return (
    <main className="solar-cleaning-page">
      {/* HERO */}
      <section className="solar-cleaning-hero">
        <img
          src="/solar-panel-cleaning-hero.jpg"
          alt="Professional solar panel cleaning on a Utah home"
          className="solar-cleaning-hero-image"
        />

        <div
          className="solar-cleaning-hero-overlay"
          aria-hidden="true"
        />

        <div className="solar-cleaning-hero-content">
          <p className="solar-cleaning-eyebrow">
            Professional Solar Panel Cleaning
          </p>

          <h1 className="solar-cleaning-title">
            Cleaner Panels.
            <span className="outshine-word"> More Sunshine.</span>
          </h1>

          <p className="solar-cleaning-description">
            Dirt, dust, pollen, bird droppings, and mineral residue can cover
            your solar panels and reduce the amount of sunlight reaching their
            surface. Our professional cleaning service helps keep your panels
            clear, clean, and working at their best.
          </p>

          <div className="solar-cleaning-hero-actions">
            <button
              type="button"
              className="solar-cleaning-primary-button"
              onClick={() => navigate("/quote")}
            >
              Get a Free Quote
              <span aria-hidden="true">→</span>
            </button>

            <a
              href="tel:8016618232"
              className="solar-cleaning-secondary-button"
            >
              Call 801-661-8232
            </a>
          </div>

          <div className="solar-cleaning-trust-row">
            <span>✓ Careful Cleaning</span>
            <span>✓ Professional Equipment</span>
            <span>✓ Locally Owned</span>
          </div>
        </div>
      </section>

      {/* RECURRING SERVICE INTRO */}
      <section className="solar-recurring-intro">
        <div className="solar-recurring-intro-inner">
          <p className="solar-section-eyebrow">
            Protect Your Solar Investment
          </p>

          <h2>
            Let Your Panels Capture
            <span className="outshine-word"> More Sunlight.</span>
          </h2>

          <p>
            Utah dust, pollen, wind, construction debris, bird droppings, and
            mineral-heavy water can leave solar panels coated with buildup.
            Regular professional cleaning helps maintain a clear surface so
            your system can receive as much sunlight as possible.
          </p>
        </div>
      </section>

      <RecurringPlans />

      {/* REVIEWS */}
      <ReviewsSection />

      {/* SOLAR PANEL CLEANING DETAILS */}
      <section className="solar-cleaning-details">
        <div className="solar-cleaning-details-grid">
          <div className="solar-cleaning-details-image-wrapper">
            <img
              src="/solar-panel-cleaning-detail.jpg"
              alt="Solar panels being professionally cleaned"
              className="solar-cleaning-details-image"
            />
          </div>

          <div className="solar-cleaning-details-content">
            <p className="solar-section-eyebrow">
              Professional Solar Panel Cleaning
            </p>

            <h2>
              Clear Away the Buildup.
              <span className="outshine-word"> Let the Sunshine In.</span>
            </h2>

            <p>
              Solar panels are constantly exposed to the elements. Dust,
              pollen, dirt, bird droppings, leaves, smoke residue, and minerals
              from sprinkler water can gradually create a layer of buildup on
              the surface.
            </p>

            <p>
              Outshine Window Cleaning Pros carefully cleans accessible solar
              panels using professional tools and methods designed to remove
              surface debris without leaving behind distracting residue.
            </p>

            <p>
              Professional solar panel cleaning can improve the appearance of
              your home while helping your panels receive clearer, more direct
              sunlight. It is especially valuable after dusty seasons, nearby
              construction, wildfire smoke, or long periods without rain.
            </p>

            <ul className="solar-cleaning-benefits">
              <li>
                <span>✓</span>
                Removes dust, pollen, dirt, and surface debris
              </li>

              <li>
                <span>✓</span>
                Cleans bird droppings and mineral residue
              </li>

              <li>
                <span>✓</span>
                Helps panels receive clearer sunlight
              </li>

              <li>
                <span>✓</span>
                Improves the clean appearance of your roofline
              </li>

              <li>
                <span>✓</span>
                Available as a seasonal or recurring service
              </li>
            </ul>

            <button
              type="button"
              className="solar-details-button"
              onClick={() => navigate("/quote")}
            >
              Request Solar Panel Cleaning
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUTSHINE */}
      <section className="solar-cleaning-why">
        <div className="solar-cleaning-why-inner">
          <p className="solar-section-eyebrow">
            Why Choose Outshine?
          </p>

          <h2>
            Professional Care for Your
            <span className="outshine-word"> Solar Investment.</span>
          </h2>

          <div className="solar-cleaning-why-grid">
            <article className="solar-cleaning-why-card">
              <span className="solar-cleaning-card-number">01</span>
              <h3>Careful Service</h3>
              <p>
                We use a careful process designed for cleaning accessible solar
                panels and surrounding surfaces.
              </p>
            </article>

            <article className="solar-cleaning-why-card">
              <span className="solar-cleaning-card-number">02</span>
              <h3>Professional Equipment</h3>
              <p>
                Our equipment helps remove dirt and buildup while producing a
                cleaner, more polished finish.
              </p>
            </article>

            <article className="solar-cleaning-why-card">
              <span className="solar-cleaning-card-number">03</span>
              <h3>Seasonal Maintenance</h3>
              <p>
                Cleaning after dusty weather, pollen season, or construction
                can help keep panels clear throughout the year.
              </p>
            </article>

            <article className="solar-cleaning-why-card">
              <span className="solar-cleaning-card-number">04</span>
              <h3>Locally Owned</h3>
              <p>
                We provide friendly and professional service throughout Utah
                County and nearby communities.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="solar-cleaning-cta">
        <div className="solar-cleaning-cta-content">
          <p className="solar-cleaning-cta-eyebrow">
            Clear Panels. Brighter Results.
          </p>

          <h2>
            Give Your Solar Panels
            <span className="outshine-word"> A Clearer View of the Sun.</span>
          </h2>

          <p>
            Request a free quote for professional solar panel cleaning and help
            keep your system looking clean, clear, and well maintained.
          </p>

          <div className="solar-cleaning-cta-actions">
            <button
              type="button"
              className="solar-cleaning-primary-button"
              onClick={() => navigate("/quote")}
            >
              Get a Free Quote
              <span aria-hidden="true">→</span>
            </button>

            <a
              href="tel:8016618232"
              className="solar-cleaning-cta-phone"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SolarPanelCleaningPage;