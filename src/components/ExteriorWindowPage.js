import React from "react";
import { useNavigate } from "react-router-dom";
import RecurringPlans from "./RecurringPlans";
import ReviewsSection from "./ReviewsSection";
import "./ExteriorWindowPage.css";

function ExteriorWindowPage() {
  const navigate = useNavigate();

  return (
    <main className="exterior-window-page">
      {/* HERO */}
      <section className="exterior-window-hero">
        <img
          src="/exterior-window-hero.jpg"
          alt="Professional exterior window cleaning on a Utah home"
          className="exterior-window-hero-image"
        />

        <div
          className="exterior-window-hero-overlay"
          aria-hidden="true"
        />

        <div className="exterior-window-hero-content">
          <p className="exterior-window-eyebrow">
            Exterior Window Cleaning
          </p>

          <h1 className="exterior-window-title">
            Clearer Windows.
            <span className="outshine-word"> Brighter Views.</span>
          </h1>

          <p className="exterior-window-description">
            Professional exterior window cleaning that removes dirt, dust,
            fingerprints, water spots, and buildup so more natural light can
            shine through your home.
          </p>

          <div className="exterior-window-hero-actions">
            <button
              type="button"
              className="exterior-window-primary-button"
              onClick={() => navigate("/quote")}
            >
              Get a Free Quote
              <span aria-hidden="true">→</span>
            </button>

            <a
              href="tel:8016618232"
              className="exterior-window-secondary-button"
            >
              Call 801-661-8232
            </a>
          </div>

          <div className="exterior-window-trust-row">
            <span>✓ Locally Owned</span>
            <span>✓ Professional Service</span>
            <span>✓ 7-Day Rain Guarantee</span>
          </div>
        </div>
      </section>

      {/* RECURRING SERVICE */}
      <section className="exterior-recurring-intro">
        <div className="exterior-recurring-intro-inner">
          <p className="exterior-section-eyebrow">
            Keep the View Beautiful
          </p>

          <h2>
            Clean Windows Shouldn’t Be a
            <span className="outshine-word"> Once-a-Year Event.</span>
          </h2>

          <p>
            Utah dust, wind, rain, pollen, sprinklers, and changing seasons can
            quickly leave exterior windows looking cloudy again. Our recurring
            cleaning options make it easier to keep your home looking bright
            throughout the year.
          </p>
        </div>
      </section>

      <RecurringPlans />

      {/* REVIEWS */}
      <ReviewsSection />

      {/* EXTERIOR WINDOW CLEANING COPY */}
      <section className="exterior-window-details">
        <div className="exterior-window-details-grid">
          <div className="exterior-window-details-image-wrapper">
            <img
              src="/exterior-window-cleaning-detail.jpg"
              alt="Exterior windows being professionally cleaned"
              className="exterior-window-details-image"
            />
          </div>

          <div className="exterior-window-details-content">
            <p className="exterior-section-eyebrow">
              Professional Exterior Window Cleaning
            </p>

            <h2>
              Give Your Home a
              <span className="outshine-word"> Brighter First Impression.</span>
            </h2>

            <p>
              Your windows are one of the first things people notice about your
              home. Dirt, dust, pollen, fingerprints, sprinkler residue, and
              mineral buildup can make even a beautiful home look dull.
            </p>

            <p>
              Outshine Window Cleaning Pros carefully cleans the outside
              surfaces of your windows to restore clarity and help more natural
              light enter your home. Our professional process is designed to
              deliver a clean, polished finish without leaving distracting
              streaks or residue behind.
            </p>

            <p>
              Whether you are preparing for guests, maintaining your home,
              getting ready to sell, or simply want to enjoy a clearer view,
              professional exterior window cleaning can make an immediate
              difference.
            </p>

            <ul className="exterior-window-benefits">
              <li>
                <span>✓</span>
                Removes dirt, dust, pollen, and exterior buildup
              </li>

              <li>
                <span>✓</span>
                Improves natural light and visibility
              </li>

              <li>
                <span>✓</span>
                Enhances your home’s curb appeal
              </li>

              <li>
                <span>✓</span>
                Helps protect and maintain your windows
              </li>

              <li>
                <span>✓</span>
                Available as a one-time or recurring service
              </li>
            </ul>

            <button
              type="button"
              className="exterior-details-button"
              onClick={() => navigate("/quote")}
            >
              Request Exterior Window Cleaning
            </button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="exterior-window-cta">
        <div className="exterior-window-cta-content">
          <p className="exterior-window-cta-eyebrow">
            Let More Light In
          </p>

          <h2>
            Ready to Make Your Dirty Windows
            <span className="outshine-word"> Disappear?</span>
          </h2>

          <p>
            Request a free quote and discover how much brighter your home can
            feel with professionally cleaned exterior windows.
          </p>

          <div className="exterior-window-cta-actions">
            <button
              type="button"
              className="exterior-window-primary-button"
              onClick={() => navigate("/quote")}
            >
              Get a Free Quote
              <span aria-hidden="true">→</span>
            </button>

            <a
              href="tel:8016618232"
              className="exterior-window-cta-phone"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ExteriorWindowPage;