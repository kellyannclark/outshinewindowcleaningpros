import React from "react";
import { useNavigate } from "react-router-dom";
import RecurringPlans from "./RecurringPlans";
import ReviewsSection from "./ReviewsSection";
import "./PressureWashingPage.css";

function PressureWashingPage() {
  const navigate = useNavigate();

  return (
    <main className="pressure-cleaning-page">
      {/* HERO */}
      <section className="pressure-cleaning-hero">
        <img
          src="/pressure-washing-hero.jpg"
          alt="Professional pressure washing of a residential driveway in Utah"
          className="pressure-cleaning-hero-image"
        />

        <div
          className="pressure-cleaning-hero-overlay"
          aria-hidden="true"
        />

        <div className="pressure-cleaning-hero-content">
          <p className="pressure-cleaning-eyebrow">
            Residential & Commercial Exterior Cleaning
          </p>

          <h1 className="pressure-cleaning-title">
            Wash Away the Grime.
            <span className="outshine-word"> Bring Back the Shine.</span>
          </h1>

          <p className="pressure-cleaning-description">
            We soft wash home exteriors, pressure wash driveways, patios,
            sidewalks, and other durable surfaces, and provide professional
            commercial pressure washing for businesses throughout Utah County.
          </p>

          <div className="pressure-cleaning-hero-actions">
            <button
              type="button"
              className="pressure-cleaning-primary-button"
              onClick={() => navigate("/quote")}
            >
              Get a Free Quote
              <span aria-hidden="true">→</span>
            </button>

            <a
              href="tel:8016618232"
              className="pressure-cleaning-secondary-button"
            >
              Call 801-661-8232
            </a>
          </div>

          <div className="pressure-cleaning-trust-row">
            <span>✓ House Soft Washing</span>
            <span>✓ Concrete Pressure Washing</span>
            <span>✓ Commercial Cleaning</span>
          </div>
        </div>
      </section>

      {/* SERVICE INTRO */}
      <section className="pressure-recurring-intro">
        <div className="pressure-recurring-intro-inner">
          <p className="pressure-section-eyebrow">
            Complete Exterior Cleaning
          </p>

          <h2>
            The Right Cleaning Method
            <span className="outshine-word"> For Every Surface.</span>
          </h2>

          <p>
            Not every exterior surface should be cleaned the same way. We use
            lower-pressure soft washing for home siding and pressure washing
            for durable surfaces such as concrete driveways, patios, sidewalks,
            and many commercial areas.
          </p>
        </div>
      </section>

      <RecurringPlans />

      {/* REVIEWS */}
      <ReviewsSection />

      {/* PRESSURE WASHING DETAILS */}
      <section className="pressure-cleaning-details">
        <div className="pressure-cleaning-details-grid">
          <div className="pressure-cleaning-details-image-wrapper">
            <img
              src="/pressure-washing-detail.jpg"
              alt="Dirty concrete driveway being professionally pressure washed"
              className="pressure-cleaning-details-image"
            />
          </div>

          <div className="pressure-cleaning-details-content">
            <p className="pressure-section-eyebrow">
              Residential Exterior Cleaning
            </p>

            <h2>
              A Cleaner Exterior.
              <span className="outshine-word"> A Brighter Property.</span>
            </h2>

            <p>
              Dirt, algae, mildew, grime, automotive residue, and weather
              buildup can leave your home and concrete surfaces looking dull,
              stained, and neglected. Professional exterior cleaning helps
              restore a cleaner and more cared-for appearance.
            </p>

            <p>
              For home exteriors, we use a soft-washing approach that combines
              appropriate cleaning solutions with lower water pressure. This
              allows us to clean siding more gently than traditional
              high-pressure washing.
            </p>

            <p>
              For durable surfaces such as driveways, patios, walkways, and
              sidewalks, pressure washing can loosen and remove layers of dirt,
              grime, algae, and surface buildup.
            </p>

            <ul className="pressure-cleaning-benefits">
              <li>
                <span>✓</span>
                Soft washing for home siding and exterior surfaces
              </li>

              <li>
                <span>✓</span>
                Pressure washing for concrete driveways and sidewalks
              </li>

              <li>
                <span>✓</span>
                Cleaning for patios, walkways, and outdoor living spaces
              </li>

              <li>
                <span>✓</span>
                Removes dirt, algae, mildew, and surface grime
              </li>

              <li>
                <span>✓</span>
                Improves curb appeal and property appearance
              </li>
            </ul>

            <button
              type="button"
              className="pressure-details-button"
              onClick={() => navigate("/quote")}
            >
              Request Exterior Cleaning
            </button>
          </div>
        </div>
      </section>

      {/* SERVICE TYPES */}
      <section className="pressure-cleaning-why">
        <div className="pressure-cleaning-why-inner">
          <p className="pressure-section-eyebrow">
            Our Exterior Cleaning Services
          </p>

          <h2>
            Professional Cleaning for
            <span className="outshine-word">
              {" "}
              Homes and Businesses.
            </span>
          </h2>

          <div className="pressure-cleaning-why-grid">
            <article className="pressure-cleaning-why-card">
              <span className="pressure-cleaning-card-number">01</span>

              <h3>House Soft Washing</h3>

              <p>
                A lower-pressure exterior cleaning method designed to remove
                dirt, algae, mildew, and organic buildup from home siding.
              </p>
            </article>

            <article className="pressure-cleaning-why-card">
              <span className="pressure-cleaning-card-number">02</span>

              <h3>Driveways & Concrete</h3>

              <p>
                Pressure washing helps remove embedded dirt, grime, algae, and
                surface buildup from durable concrete areas.
              </p>
            </article>

            <article className="pressure-cleaning-why-card">
              <span className="pressure-cleaning-card-number">03</span>

              <h3>Patios & Walkways</h3>

              <p>
                Refresh patios, sidewalks, entryways, and outdoor living areas
                for a cleaner and more inviting appearance.
              </p>
            </article>

            <article className="pressure-cleaning-why-card">
              <span className="pressure-cleaning-card-number">04</span>

              <h3>Commercial Pressure Washing</h3>

              <p>
                Professional exterior cleaning for storefronts, sidewalks,
                building exteriors, common areas, and other commercial
                properties.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* COMMERCIAL SECTION */}
      <section className="pressure-commercial-section">
        <div className="pressure-commercial-grid">
          <div className="pressure-commercial-content">
            <p className="pressure-section-eyebrow">
              Commercial Pressure Washing
            </p>

            <h2>
              Help Your Business Make a
              <span className="outshine-word">
                {" "}
                Cleaner First Impression.
              </span>
            </h2>

            <p>
              The exterior of your business is one of the first things
              customers, tenants, and visitors notice. Dirty sidewalks,
              stained concrete, grimy entrances, and neglected exterior
              surfaces can affect the way people view your property.
            </p>

            <p>
              Outshine Window Cleaning Pros provides commercial pressure
              washing and exterior cleaning for businesses, retail properties,
              offices, townhome communities, property managers, and other
              commercial locations.
            </p>

            <ul className="pressure-commercial-benefits">
              <li>
                <span>✓</span>
                Storefront and building exterior cleaning
              </li>

              <li>
                <span>✓</span>
                Sidewalks, entrances, and common areas
              </li>

              <li>
                <span>✓</span>
                Commercial concrete and hard-surface cleaning
              </li>

              <li>
                <span>✓</span>
                One-time and recurring service options
              </li>
            </ul>

            <button
              type="button"
              className="pressure-details-button"
              onClick={() => navigate("/quote")}
            >
              Request a Commercial Quote
            </button>
          </div>

          <div className="pressure-commercial-image-wrapper">
            <img
              src="/commercial-pressure-washing.jpg"
              alt="Commercial property being professionally pressure washed"
              className="pressure-commercial-image"
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUTSHINE */}
      <section className="pressure-cleaning-why pressure-why-outshine">
        <div className="pressure-cleaning-why-inner">
          <p className="pressure-section-eyebrow">
            Why Choose Outshine?
          </p>

          <h2>
            Professional Care for a
            <span className="outshine-word"> Cleaner Exterior.</span>
          </h2>

          <div className="pressure-cleaning-why-grid">
            <article className="pressure-cleaning-why-card">
              <span className="pressure-cleaning-card-number">01</span>

              <h3>Surface-Specific Cleaning</h3>

              <p>
                We choose between soft washing and pressure washing based on
                the surface being cleaned.
              </p>
            </article>

            <article className="pressure-cleaning-why-card">
              <span className="pressure-cleaning-card-number">02</span>

              <h3>Professional Equipment</h3>

              <p>
                Our professional tools help remove stubborn exterior dirt and
                buildup more effectively.
              </p>
            </article>

            <article className="pressure-cleaning-why-card">
              <span className="pressure-cleaning-card-number">03</span>

              <h3>Residential & Commercial</h3>

              <p>
                We provide exterior cleaning solutions for homes, businesses,
                property managers, and commercial properties.
              </p>
            </article>

            <article className="pressure-cleaning-why-card">
              <span className="pressure-cleaning-card-number">04</span>

              <h3>Locally Owned</h3>

              <p>
                We provide friendly and dependable service throughout Utah
                County and nearby communities.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pressure-cleaning-cta">
        <div className="pressure-cleaning-cta-content">
          <p className="pressure-cleaning-cta-eyebrow">
            Residential & Commercial Cleaning
          </p>

          <h2>
            Wash Away the Dirt.
            <span className="outshine-word"> Reveal the Difference.</span>
          </h2>

          <p>
            Request a free quote for house soft washing, driveway cleaning,
            patio cleaning, or professional commercial pressure washing.
          </p>

          <div className="pressure-cleaning-cta-actions">
            <button
              type="button"
              className="pressure-cleaning-primary-button"
              onClick={() => navigate("/quote")}
            >
              Get a Free Quote
              <span aria-hidden="true">→</span>
            </button>

            <a
              href="tel:8016618232"
              className="pressure-cleaning-cta-phone"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PressureWashingPage;