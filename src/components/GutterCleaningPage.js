import React from "react";
import { useNavigate } from "react-router-dom";
import RecurringPlans from "./RecurringPlans";
import ReviewsSection from "./ReviewsSection";
import "./GutterCleaningPage.css";

function GutterCleaningPage() {
  const navigate = useNavigate();

  return (
    <main className="gutter-cleaning-page">
      {/* HERO */}
      <section className="gutter-cleaning-hero">
        <img
          src="/gutter-cleaning-hero.jpg"
          alt="Professional gutter cleaning on a Utah home"
          className="gutter-cleaning-hero-image"
        />

        <div
          className="gutter-cleaning-hero-overlay"
          aria-hidden="true"
        />

        <div className="gutter-cleaning-hero-content">
          <p className="gutter-cleaning-eyebrow">
            Professional Gutter Cleaning
          </p>

          <h1 className="gutter-cleaning-title">
            Clean Gutters.
            <span className="outshine-word"> Protect Your Home.</span>
          </h1>

          <p className="gutter-cleaning-description">
            Clogged gutters can cause overflowing water, roof problems,
            stained siding, landscape erosion, and damage around your
            foundation. Our professional gutter cleaning service removes
            leaves, dirt, and debris so water can flow safely away from your
            home.
          </p>

          <div className="gutter-cleaning-hero-actions">
            <button
              type="button"
              className="gutter-cleaning-primary-button"
              onClick={() => navigate("/quote")}
            >
              Get a Free Quote
              <span aria-hidden="true">→</span>
            </button>

            <a
              href="tel:8016618232"
              className="gutter-cleaning-secondary-button"
            >
              Call 801-661-8232
            </a>
          </div>

          <div className="gutter-cleaning-trust-row">
            <span>✓ Removes Leaves & Debris</span>
            <span>✓ Helps Prevent Overflow</span>
            <span>✓ Protects Your Home</span>
          </div>
        </div>
      </section>

      {/* RECURRING SERVICE INTRO */}
      <section className="gutter-recurring-intro">
        <div className="gutter-recurring-intro-inner">
          <p className="gutter-section-eyebrow">
            Protect Your Home
          </p>

          <h2>
            Don’t Let Clogged Gutters
            <span className="outshine-word">
              {" "}
              Cause Expensive Damage.
            </span>
          </h2>

          <p>
            Gutters are designed to move rainwater safely away from your roof,
            siding, landscaping, and foundation. When leaves, pine needles,
            dirt, roof grit, and other debris collect inside them, water can
            overflow and create costly problems around your home.
          </p>
        </div>
      </section>

      <RecurringPlans />

      {/* REVIEWS */}
      <ReviewsSection />

      {/* GUTTER CLEANING DETAILS */}
      <section className="gutter-cleaning-details">
        <div className="gutter-cleaning-details-grid">
          <div className="gutter-cleaning-details-image-wrapper">
            <img
              src="/gutter-cleaning-detail.jpg"
              alt="Leaves and debris being removed from residential gutters"
              className="gutter-cleaning-details-image"
            />
          </div>

          <div className="gutter-cleaning-details-content">
            <p className="gutter-section-eyebrow">
              Professional Gutter Cleaning
            </p>

            <h2>
              Protect Your Home
              <span className="outshine-word">
                {" "}
                One Season at a Time.
              </span>
            </h2>

            <p>
              Gutters quietly protect one of your biggest investments. When
              they become clogged with leaves, twigs, dirt, roof grit, and
              other debris, rainwater may overflow instead of draining
              properly.
            </p>

            <p>
              Overflowing gutters can contribute to stained siding, damaged
              landscaping, roofline problems, standing water, and moisture
              collecting around your foundation. Routine gutter cleaning helps
              reduce these risks and keeps your drainage system functioning
              more effectively.
            </p>

            <p>
              Outshine Window Cleaning Pros carefully removes debris from
              accessible gutters and checks accessible drainage areas so water
              can move more freely during Utah rainstorms and snowmelt.
            </p>

            <ul className="gutter-cleaning-benefits">
              <li>
                <span>✓</span>
                Removes leaves, sticks, dirt, and loose debris
              </li>

              <li>
                <span>✓</span>
                Helps prevent overflowing gutters
              </li>

              <li>
                <span>✓</span>
                Supports better water drainage
              </li>

              <li>
                <span>✓</span>
                Helps protect siding, landscaping, and foundations
              </li>

              <li>
                <span>✓</span>
                Ideal for spring and fall home maintenance
              </li>
            </ul>

            <button
              type="button"
              className="gutter-details-button"
              onClick={() => navigate("/quote")}
            >
              Request Gutter Cleaning
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUTSHINE */}
      <section className="gutter-cleaning-why">
        <div className="gutter-cleaning-why-inner">
          <p className="gutter-section-eyebrow">
            Why Choose Outshine?
          </p>

          <h2>
            Professional Care That Helps
            <span className="outshine-word"> Protect Your Property.</span>
          </h2>

          <div className="gutter-cleaning-why-grid">
            <article className="gutter-cleaning-why-card">
              <span className="gutter-cleaning-card-number">01</span>
              <h3>Help Prevent Water Damage</h3>
              <p>
                Routine cleaning helps reduce overflowing gutters and unwanted
                water collecting around your home.
              </p>
            </article>

            <article className="gutter-cleaning-why-card">
              <span className="gutter-cleaning-card-number">02</span>
              <h3>Professional Service</h3>
              <p>
                We use professional tools and a careful process to clean
                accessible gutters and remove accumulated debris.
              </p>
            </article>

            <article className="gutter-cleaning-why-card">
              <span className="gutter-cleaning-card-number">03</span>
              <h3>Seasonal Maintenance</h3>
              <p>
                Spring and fall gutter cleaning can help keep your drainage
                system working throughout the year.
              </p>
            </article>

            <article className="gutter-cleaning-why-card">
              <span className="gutter-cleaning-card-number">04</span>
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
      <section className="gutter-cleaning-cta">
        <div className="gutter-cleaning-cta-content">
          <p className="gutter-cleaning-cta-eyebrow">
            Protect Your Investment
          </p>

          <h2>
            Keep Water Flowing
            <span className="outshine-word"> Where It Should.</span>
          </h2>

          <p>
            Schedule professional gutter cleaning and help protect your roof,
            siding, landscaping, and foundation from unnecessary water
            problems.
          </p>

          <div className="gutter-cleaning-cta-actions">
            <button
              type="button"
              className="gutter-cleaning-primary-button"
              onClick={() => navigate("/quote")}
            >
              Get a Free Quote
              <span aria-hidden="true">→</span>
            </button>

            <a
              href="tel:8016618232"
              className="gutter-cleaning-cta-phone"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default GutterCleaningPage;