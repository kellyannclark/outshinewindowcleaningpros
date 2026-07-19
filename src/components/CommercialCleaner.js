import React from "react";
import { useNavigate } from "react-router-dom";
import ReviewsSection from "./ReviewsSection";
import "./CommercialCleaner.css";

const CommercialCleaner = () => {
  const navigate = useNavigate();

  return (
    <main className="commercial-cleaner-page">
      {/* HERO */}
      <section className="commercial-cleaner-hero">
        <img
          src="/commercial-cleaning-hero.jpg"
          alt="Professional commercial window cleaning for a Utah business"
          className="commercial-cleaner-hero-image"
        />

        <div
          className="commercial-cleaner-hero-overlay"
          aria-hidden="true"
        />

        <div className="commercial-cleaner-hero-content">
          <p className="commercial-cleaner-eyebrow">
            Commercial Exterior Cleaning
          </p>

          <h1>
            A Cleaner Business Makes a
            <span> Brighter First Impression.</span>
          </h1>

          <p className="commercial-cleaner-description">
            Outshine provides professional commercial window cleaning,
            pressure washing, gutter cleaning, solar panel cleaning, and
            exterior property care for businesses throughout Utah.
          </p>

          <div className="commercial-cleaner-hero-actions">
            <button
              type="button"
              className="commercial-primary-button"
              onClick={() => navigate("/quote")}
            >
              Request a Commercial Quote
              <span aria-hidden="true">→</span>
            </button>

            <a
              href="tel:8016618232"
              className="commercial-secondary-button"
            >
              Call 801-661-8232
            </a>
          </div>

          <div className="commercial-cleaner-trust-row">
            <span>✓ Professional Service</span>
            <span>✓ Flexible Scheduling</span>
            <span>✓ Custom Commercial Plans</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="commercial-cleaner-intro">
        <div className="commercial-cleaner-intro-inner">
          <p className="commercial-section-eyebrow">
            Commercial Cleaning Services
          </p>

          <h2>
            Help Your Business Look
            <span> Clean, Professional, and Welcoming.</span>
          </h2>

          <p>
            Your building is often one of the first things customers, tenants,
            employees, and visitors notice. Dirty windows, stained concrete,
            dusty entryways, and neglected exterior surfaces can affect the
            impression your property makes.
          </p>

          <p>
            Outshine Window Cleaning Pros helps commercial properties maintain
            a bright, clean, and professional appearance with reliable exterior
            and interior cleaning services designed around the needs of each
            business.
          </p>
        </div>
      </section>

      {/* REVIEWS */}
      <ReviewsSection />

      {/* DETAILS */}
      <section className="commercial-cleaner-details">
        <div className="commercial-cleaner-details-grid">
          <div className="commercial-cleaner-image-wrapper">
            <img
              src="/commercial-window-cleaning.jpg"
              alt="Commercial window cleaner servicing a business property"
              className="commercial-cleaner-details-image"
            />
          </div>

          <div className="commercial-cleaner-details-content">
            <p className="commercial-section-eyebrow">
              Complete Property Care
            </p>

            <h2>
              More Than Commercial
              <span> Window Cleaning.</span>
            </h2>

            <p>
              We provide both exterior and interior window cleaning for
              commercial businesses, helping remove dirt, fingerprints, dust,
              water spots, and buildup from the glass that customers and
              employees see every day.
            </p>

            <p>
              Our commercial services can also include pressure washing,
              gutter cleaning, screen cleaning, track detailing, solar panel
              cleaning, and other exterior property-care services.
            </p>

            <p>
              Whether you need a one-time deep cleaning or an ongoing service
              schedule, we can create a plan that fits your property, operating
              hours, and budget.
            </p>

            <ul className="commercial-cleaner-benefits">
              <li>
                <span>✓</span>
                Exterior commercial window cleaning
              </li>

              <li>
                <span>✓</span>
                Interior commercial window cleaning
              </li>

              <li>
                <span>✓</span>
                Pressure washing for concrete and exterior surfaces
              </li>

              <li>
                <span>✓</span>
                Commercial gutter cleaning
              </li>

              <li>
                <span>✓</span>
                Screen cleaning and track detailing
              </li>

              <li>
                <span>✓</span>
                Commercial solar panel cleaning
              </li>

              <li>
                <span>✓</span>
                One-time and recurring service plans
              </li>
            </ul>

            <button
              type="button"
              className="commercial-details-button"
              onClick={() => navigate("/quote")}
            >
              Request Commercial Pricing
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="commercial-cleaner-services">
        <div className="commercial-cleaner-services-inner">
          <p className="commercial-section-eyebrow">
            Commercial Services
          </p>

          <h2>
            Professional Cleaning for
            <span> Every Part of Your Property.</span>
          </h2>

          <div className="commercial-cleaner-services-grid">
            <article className="commercial-cleaner-service-card">
              <span className="commercial-card-number">01</span>

              <h3>Exterior Window Cleaning</h3>

              <p>
                Remove dirt, dust, water spots, and exterior buildup from the
                windows customers see when they approach your business.
              </p>
            </article>

            <article className="commercial-cleaner-service-card">
              <span className="commercial-card-number">02</span>

              <h3>Interior Window Cleaning</h3>

              <p>
                Keep interior glass clean and clear by removing fingerprints,
                smudges, dust, and everyday buildup.
              </p>
            </article>

            <article className="commercial-cleaner-service-card">
              <span className="commercial-card-number">03</span>

              <h3>Pressure Washing</h3>

              <p>
                Refresh sidewalks, entryways, patios, concrete areas, and
                suitable exterior surfaces around your commercial property.
              </p>
            </article>

            <article className="commercial-cleaner-service-card">
              <span className="commercial-card-number">04</span>

              <h3>Recurring Maintenance</h3>

              <p>
                Create a dependable cleaning schedule that helps your business
                maintain a consistently polished appearance.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="commercial-property-types">
        <div className="commercial-property-types-inner">
          <div className="commercial-property-content">
            <p className="commercial-section-eyebrow">
              Properties We Serve
            </p>

            <h2>
              Commercial Cleaning Built Around
              <span> Your Business.</span>
            </h2>

            <p>
              We work with many types of commercial properties and customize
              our service based on the building, access requirements, traffic,
              and desired cleaning schedule.
            </p>
          </div>

          <div className="commercial-property-grid">
            <div>Office Buildings</div>
            <div>Retail Stores</div>
            <div>Restaurants</div>
            <div>Medical Offices</div>
            <div>Property Managers</div>
            <div>Townhome Communities</div>
            <div>HOAs</div>
            <div>Schools and Churches</div>
            <div>Warehouses</div>
            <div>Professional Offices</div>
            <div>Apartment Communities</div>
            <div>Small Businesses</div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUTSHINE */}
      <section className="commercial-cleaner-why">
        <div className="commercial-cleaner-why-inner">
          <p className="commercial-section-eyebrow">
            Why Choose Outshine?
          </p>

          <h2>
            Dependable Service That Helps
            <span> Your Business Outshine.</span>
          </h2>

          <div className="commercial-cleaner-why-grid">
            <article className="commercial-cleaner-why-card">
              <span className="commercial-card-number">01</span>

              <h3>Customized Service</h3>

              <p>
                We build each commercial cleaning plan around your property,
                priorities, schedule, and budget.
              </p>
            </article>

            <article className="commercial-cleaner-why-card">
              <span className="commercial-card-number">02</span>

              <h3>Flexible Scheduling</h3>

              <p>
                We work to provide scheduling options that minimize disruption
                to customers, tenants, and employees.
              </p>
            </article>

            <article className="commercial-cleaner-why-card">
              <span className="commercial-card-number">03</span>

              <h3>Consistent Results</h3>

              <p>
                Our goal is to provide dependable service and a clean,
                professional result each time we visit.
              </p>
            </article>

            <article className="commercial-cleaner-why-card">
              <span className="commercial-card-number">04</span>

              <h3>Multiple Services</h3>

              <p>
                Window cleaning, pressure washing, gutters, solar panels, and
                other services can be coordinated through one local company.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="commercial-cleaner-cta">
        <div className="commercial-cleaner-cta-content">
          <p className="commercial-cleaner-cta-eyebrow">
            Commercial Cleaning in Utah
          </p>

          <h2>
            Give Your Customers a
            <span> Brighter First Impression.</span>
          </h2>

          <p>
            Request a custom commercial quote for window cleaning, pressure
            washing, gutter cleaning, solar panel cleaning, or recurring
            property maintenance.
          </p>

          <div className="commercial-cleaner-cta-actions">
            <button
              type="button"
              className="commercial-primary-button"
              onClick={() => navigate("/quote")}
            >
              Request a Commercial Quote
              <span aria-hidden="true">→</span>
            </button>

            <a
              href="tel:8016618232"
              className="commercial-cta-phone"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CommercialCleaner;