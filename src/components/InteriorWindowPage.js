import React from "react";
import { useNavigate } from "react-router-dom";
import RecurringPlans from "./RecurringPlans";
import ReviewsSection from "./ReviewsSection";
import "./InteriorWindowPage.css";

function InteriorWindowPage() {
  const navigate = useNavigate();

  return (
    <main className="interior-window-page">
      {/* HERO */}
      <section className="interior-window-hero">
        <img
          src="/interior-window-hero.jpg"
          alt="Professionally cleaned interior windows in a bright Utah home"
          className="interior-window-hero-image"
        />

        <div
          className="interior-window-hero-overlay"
          aria-hidden="true"
        />

        <div className="interior-window-hero-content">
          <p className="interior-window-eyebrow">
            Interior Window Cleaning
          </p>

          <h1 className="interior-window-title">
            Cleaner Glass.
            <span className="outshine-word"> Brighter Living.</span>
          </h1>

          <p className="interior-window-description">
            Professional interior window cleaning that removes fingerprints,
            dust, smudges, pet marks, and everyday buildup so your home feels
            brighter, cleaner, and more inviting.
          </p>

          <div className="interior-window-hero-actions">
            <button
              type="button"
              className="interior-window-primary-button"
              onClick={() => navigate("/quote")}
            >
              Get a Free Quote
              <span aria-hidden="true">→</span>
            </button>

            <a
              href="tel:8016618232"
              className="interior-window-secondary-button"
            >
              Call 801-661-8232
            </a>
          </div>

          <div className="interior-window-trust-row">
            <span>✓ Respectful In-Home Service</span>
            <span>✓ Locally Owned</span>
            <span>✓ Professional Results</span>
          </div>
        </div>
      </section>

      {/* RECURRING SERVICE INTRO */}
      <section className="interior-recurring-intro">
        <div className="interior-recurring-intro-inner">
          <p className="interior-section-eyebrow">
            Keep Your Home Feeling Bright
          </p>

          <h2>
            Beautiful Windows Deserve
            <span className="outshine-word"> Year-Round Care.</span>
          </h2>

          <p>
            Fingerprints, dust, cooking residue, pets, children, and everyday
            life can quickly leave interior windows looking cloudy. Our
            recurring cleaning plans make it easier to maintain a bright,
            polished home throughout the year.
          </p>
        </div>
      </section>

      <RecurringPlans />

      {/* REVIEWS */}
      <ReviewsSection />

      {/* INTERIOR WINDOW CLEANING DETAILS */}
      <section className="interior-window-details">
        <div className="interior-window-details-grid">
          <div className="interior-window-details-image-wrapper">
            <img
              src="/interior-window-cleaning-detail.jpg"
              alt="Professional interior window cleaning inside a home"
              className="interior-window-details-image"
            />
          </div>

          <div className="interior-window-details-content">
            <p className="interior-section-eyebrow">
              Professional Interior Window Cleaning
            </p>

            <h2>
              Let More Light
              <span className="outshine-word"> Into Every Room.</span>
            </h2>

            <p>
              Interior windows collect fingerprints, dust, pet marks,
              fingerprints, cooking residue, and other buildup that can make
              your glass appear cloudy—even when the outside has already been
              cleaned.
            </p>

            <p>
              Outshine Window Cleaning Pros carefully cleans the inside surface
              of your windows to restore clarity and help natural light move
              freely through your home. We work respectfully inside your space
              and pay close attention to the details that create a polished,
              professional finish.
            </p>

            <p>
              Interior window cleaning is ideal for regular home maintenance,
              seasonal cleaning, preparing for guests, selling a home, or
              simply making your rooms feel brighter and more refreshed.
            </p>

            <ul className="interior-window-benefits">
              <li>
                <span>✓</span>
                Removes fingerprints, dust, smudges, and pet marks
              </li>

              <li>
                <span>✓</span>
                Improves natural light throughout the home
              </li>

              <li>
                <span>✓</span>
                Creates a cleaner, brighter indoor atmosphere
              </li>

              <li>
                <span>✓</span>
                Careful and respectful service inside your home
              </li>

              <li>
                <span>✓</span>
                Available with exterior or recurring window cleaning
              </li>
            </ul>

            <button
              type="button"
              className="interior-details-button"
              onClick={() => navigate("/quote")}
            >
              Request Interior Window Cleaning
            </button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="interior-window-cta">
        <div className="interior-window-cta-content">
          <p className="interior-window-cta-eyebrow">
            A Brighter Home Starts Here
          </p>

          <h2>
            Ready to Make Your Dirty Windows
            <span className="outshine-word"> Disappear?</span>
          </h2>

          <p>
            Request a free quote and experience how professionally cleaned
            interior windows can make your entire home feel brighter.
          </p>

          <div className="interior-window-cta-actions">
            <button
              type="button"
              className="interior-window-primary-button"
              onClick={() => navigate("/quote")}
            >
              Get a Free Quote
              <span aria-hidden="true">→</span>
            </button>

            <a
              href="tel:8016618232"
              className="interior-window-cta-phone"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default InteriorWindowPage;