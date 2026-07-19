import React from "react";
import { useNavigate } from "react-router-dom";
import RecurringPlans from "./RecurringPlans";
import ReviewsSection from "./ReviewsSection";
import "./ScreenCleaningPage.css";

function ScreenCleaningPage() {
  const navigate = useNavigate();

  return (
    <main className="screen-cleaning-page">
      {/* HERO */}
      <section className="screen-cleaning-hero">
        <img
          src="/screen-cleaning-hero.jpg"
          alt="Professional window screen cleaning for a Utah home"
          className="screen-cleaning-hero-image"
        />

        <div
          className="screen-cleaning-hero-overlay"
          aria-hidden="true"
        />

        <div className="screen-cleaning-hero-content">
          <p className="screen-cleaning-eyebrow">
            Professional Screen Cleaning
          </p>

          <h1 className="screen-cleaning-title">
            Fresh Air.
            <span className="outshine-word"> Cleaner Screens.</span>
          </h1>

          <p className="screen-cleaning-description">
            Dirty window screens collect dust, pollen, cobwebs, bugs, and
            debris that can block airflow and make even clean windows look
            dirty. Our professional screen cleaning service restores the
            fresh, clean appearance of your entire window system.
          </p>

          <div className="screen-cleaning-hero-actions">
            <button
              type="button"
              className="screen-cleaning-primary-button"
              onClick={() => navigate("/quote")}
            >
              Get a Free Quote
              <span aria-hidden="true">→</span>
            </button>

            <a
              href="tel:8016618232"
              className="screen-cleaning-secondary-button"
            >
              Call 801-661-8232
            </a>
          </div>

          <div className="screen-cleaning-trust-row">
            <span>✓ Deep Screen Cleaning</span>
            <span>✓ Better Airflow</span>
            <span>✓ Professional Results</span>
          </div>
        </div>
      </section>

      {/* RECURRING SERVICE INTRO */}
      <section className="screen-recurring-intro">
        <div className="screen-recurring-intro-inner">
          <p className="screen-section-eyebrow">
            More Than Clean Glass
          </p>

          <h2>
            Don’t Forget
            <span className="outshine-word"> Your Screens.</span>
          </h2>

          <p>
            Even perfectly cleaned windows can still look dirty when the
            screens are covered with pollen, dust, and years of buildup. We
            clean your screens so your entire window looks its absolute best.
          </p>
        </div>
      </section>

      <RecurringPlans />

      {/* REVIEWS */}
      <ReviewsSection />

      {/* SCREEN CLEANING DETAILS */}
      <section className="screen-cleaning-details">
        <div className="screen-cleaning-details-grid">
          <div className="screen-cleaning-details-image-wrapper">
            <img
              src="/screen-cleaning-detail.jpg"
              alt="Window screen being professionally cleaned"
              className="screen-cleaning-details-image"
            />
          </div>

          <div className="screen-cleaning-details-content">
            <p className="screen-section-eyebrow">
              Professional Screen Cleaning
            </p>

            <h2>
              Fresh Air Starts With
              <span className="outshine-word"> Clean Screens.</span>
            </h2>

            <p>
              Window screens act like air filters for your home. They trap
              dust, pollen, insects, cottonwood, spider webs, and everyday
              debris. Over time, this buildup not only looks dirty but can
              reduce airflow and make your windows appear cloudy even after
              the glass has been cleaned.
            </p>

            <p>
              At Outshine Window Cleaning Pros, we carefully remove, clean,
              inspect, and reinstall your screens. Our process helps improve
              airflow while restoring the clean, finished appearance of your
              windows.
            </p>

            <p>
              Professional screen cleaning is one of the most overlooked home
              services, yet it can create a dramatic visual difference when
              paired with professionally cleaned glass.
            </p>

            <ul className="screen-cleaning-benefits">
              <li>
                <span>✓</span>
                Removes dust, pollen, cobwebs, and debris
              </li>

              <li>
                <span>✓</span>
                Helps restore cleaner airflow
              </li>

              <li>
                <span>✓</span>
                Makes the entire window look cleaner
              </li>

              <li>
                <span>✓</span>
                Uses a careful, professional cleaning process
              </li>

              <li>
                <span>✓</span>
                Pairs perfectly with recurring window cleaning
              </li>
            </ul>

            <button
              type="button"
              className="screen-details-button"
              onClick={() => navigate("/quote")}
            >
              Request Screen Cleaning
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUTSHINE */}
      <section className="screen-cleaning-why">
        <div className="screen-cleaning-why-inner">
          <p className="screen-section-eyebrow">
            Why Choose Outshine?
          </p>

          <h2>
            Complete Care for
            <span className="outshine-word"> Every Part of Your Window.</span>
          </h2>

          <div className="screen-cleaning-why-grid">
            <article className="screen-cleaning-why-card">
              <span className="screen-cleaning-card-number">01</span>
              <h3>Careful Removal</h3>
              <p>
                We handle your screens carefully while removing and
                reinstalling them.
              </p>
            </article>

            <article className="screen-cleaning-why-card">
              <span className="screen-cleaning-card-number">02</span>
              <h3>Thorough Cleaning</h3>
              <p>
                We remove the dust, pollen, cobwebs, insects, and buildup that
                ordinary wiping can leave behind.
              </p>
            </article>

            <article className="screen-cleaning-why-card">
              <span className="screen-cleaning-card-number">03</span>
              <h3>Finished Appearance</h3>
              <p>
                Clean screens help your professionally cleaned windows look
                brighter, sharper, and more complete.
              </p>
            </article>

            <article className="screen-cleaning-why-card">
              <span className="screen-cleaning-card-number">04</span>
              <h3>Locally Owned</h3>
              <p>
                We provide friendly, professional service to homeowners
                throughout Utah County.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="screen-cleaning-cta">
        <div className="screen-cleaning-cta-content">
          <p className="screen-cleaning-cta-eyebrow">
            Complete Window Care
          </p>

          <h2>
            Beautiful Windows Start With
            <span className="outshine-word"> Clean Screens.</span>
          </h2>

          <p>
            Add professional screen cleaning to your next service and enjoy
            brighter views, cleaner airflow, and a home that truly shines.
          </p>

          <div className="screen-cleaning-cta-actions">
            <button
              type="button"
              className="screen-cleaning-primary-button"
              onClick={() => navigate("/quote")}
            >
              Get a Free Quote
              <span aria-hidden="true">→</span>
            </button>

            <a
              href="tel:8016618232"
              className="screen-cleaning-cta-phone"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ScreenCleaningPage;