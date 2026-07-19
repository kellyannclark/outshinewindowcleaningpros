import React from "react";
import { useNavigate } from "react-router-dom";
import RecurringPlans from "./RecurringPlans";
import ReviewsSection from "./ReviewsSection";
import "./TrackDetailingPage.css";

function TrackDetailingPage() {
  const navigate = useNavigate();

  return (
    <main className="track-detailing-page">
      {/* HERO */}
      <section className="track-detailing-hero">
        <img
          src="/track-detailing-hero.jpg"
          alt="Professional window track detailing in a Utah home"
          className="track-detailing-hero-image"
        />

        <div
          className="track-detailing-hero-overlay"
          aria-hidden="true"
        />

        <div className="track-detailing-hero-content">
          <p className="track-detailing-eyebrow">
            Professional Window Track Detailing
          </p>

          <h1 className="track-detailing-title">
            Cleaner Tracks.
            <span className="outshine-word"> A Better Finish.</span>
          </h1>

          <p className="track-detailing-description">
            Window tracks collect dirt, dust, insects, pet hair, moisture, and
            years of hidden buildup. Our detailed cleaning process helps
            restore the clean, finished appearance of your entire window.
          </p>

          <div className="track-detailing-hero-actions">
            <button
              type="button"
              className="track-detailing-primary-button"
              onClick={() => navigate("/quote")}
            >
              Get a Free Quote
              <span aria-hidden="true">→</span>
            </button>

            <a
              href="tel:8016618232"
              className="track-detailing-secondary-button"
            >
              Call 801-661-8232
            </a>
          </div>

          <div className="track-detailing-trust-row">
            <span>✓ Detailed Cleaning</span>
            <span>✓ Professional Results</span>
            <span>✓ Complete Window Care</span>
          </div>
        </div>
      </section>

      {/* RECURRING SERVICE INTRO */}
      <section className="track-recurring-intro">
        <div className="track-recurring-intro-inner">
          <p className="track-section-eyebrow">
            The Details Make the Difference
          </p>

          <h2>
            Clean Glass Deserves
            <span className="outshine-word"> Clean Tracks.</span>
          </h2>

          <p>
            Window tracks are one of the easiest areas of a home to overlook.
            Over time, dust, dirt, insects, pet hair, and moisture can collect
            in the corners and crevices. Track detailing helps complete the
            appearance of your professionally cleaned windows.
          </p>
        </div>
      </section>

      <RecurringPlans />

      {/* REVIEWS */}
      <ReviewsSection />

      {/* TRACK DETAILING DETAILS */}
      <section className="track-detailing-details">
        <div className="track-detailing-details-grid">
          <div className="track-detailing-details-image-wrapper">
            <img
              src="/track-detailing-detail.jpg"
              alt="Dirty window tracks being professionally detailed"
              className="track-detailing-details-image"
            />
          </div>

          <div className="track-detailing-details-content">
            <p className="track-section-eyebrow">
              Professional Track Detailing
            </p>

            <h2>
              A Truly Clean Window Goes
              <span className="outshine-word"> Beyond the Glass.</span>
            </h2>

            <p>
              Window tracks can become packed with dirt, dust, dead insects,
              pollen, pet hair, and moisture. Because the buildup settles into
              narrow corners and grooves, ordinary wiping often leaves much of
              it behind.
            </p>

            <p>
              Outshine Window Cleaning Pros uses a careful detailing process
              to loosen and remove debris from the accessible areas of your
              window tracks. We pay close attention to the edges, corners, and
              channels that are often missed during routine home cleaning.
            </p>

            <p>
              Track detailing is especially valuable for homes with pets,
              children, older windows, nearby construction, or significant
              dust and pollen exposure. It is also an excellent addition when
              preparing a home for guests or getting ready to sell.
            </p>

            <ul className="track-detailing-benefits">
              <li>
                <span>✓</span>
                Removes dirt, dust, insects, and loose debris
              </li>

              <li>
                <span>✓</span>
                Cleans accessible corners, grooves, and channels
              </li>

              <li>
                <span>✓</span>
                Creates a cleaner, more finished appearance
              </li>

              <li>
                <span>✓</span>
                Complements interior and exterior window cleaning
              </li>

              <li>
                <span>✓</span>
                Ideal for seasonal or recurring home maintenance
              </li>
            </ul>

            <button
              type="button"
              className="track-details-button"
              onClick={() => navigate("/quote")}
            >
              Request Track Detailing
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUTSHINE */}
      <section className="track-detailing-why">
        <div className="track-detailing-why-inner">
          <p className="track-section-eyebrow">
            Why Choose Outshine?
          </p>

          <h2>
            Professional Care for the
            <span className="outshine-word"> Details Others Miss.</span>
          </h2>

          <div className="track-detailing-why-grid">
            <article className="track-detailing-why-card">
              <span className="track-detailing-card-number">01</span>
              <h3>Detailed Attention</h3>
              <p>
                We focus on the narrow grooves and corners that ordinary
                cleaning often overlooks.
              </p>
            </article>

            <article className="track-detailing-why-card">
              <span className="track-detailing-card-number">02</span>
              <h3>Careful Process</h3>
              <p>
                We work carefully around your windows, frames, flooring, and
                surrounding surfaces.
              </p>
            </article>

            <article className="track-detailing-why-card">
              <span className="track-detailing-card-number">03</span>
              <h3>Complete Appearance</h3>
              <p>
                Clean tracks give your professionally cleaned windows a more
                polished and complete finish.
              </p>
            </article>

            <article className="track-detailing-why-card">
              <span className="track-detailing-card-number">04</span>
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
      <section className="track-detailing-cta">
        <div className="track-detailing-cta-content">
          <p className="track-detailing-cta-eyebrow">
            Complete Window Care
          </p>

          <h2>
            Don’t Let Dirty Tracks
            <span className="outshine-word"> Dull the Final Result.</span>
          </h2>

          <p>
            Add professional track detailing to your next window cleaning
            service for a cleaner, brighter, and more complete finish.
          </p>

          <div className="track-detailing-cta-actions">
            <button
              type="button"
              className="track-detailing-primary-button"
              onClick={() => navigate("/quote")}
            >
              Get a Free Quote
              <span aria-hidden="true">→</span>
            </button>

            <a
              href="tel:8016618232"
              className="track-detailing-cta-phone"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TrackDetailingPage;