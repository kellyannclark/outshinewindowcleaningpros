import React from "react";
import { useNavigate } from "react-router-dom";
import ReviewsSection from "./ReviewsSection";
import "./ChristmasLightPage.css";

function ChristmasLightPage() {
  const navigate = useNavigate();

  return (
    <main className="christmas-light-page">
      {/* HERO */}
      <section className="christmas-light-hero">
        <img
          src="/christmas-light-hero.jpg"
          alt="Professionally designed Christmas lights on a Utah home"
          className="christmas-light-hero-image"
        />

        <div
          className="christmas-light-hero-overlay"
          aria-hidden="true"
        />

        <div className="christmas-light-hero-content">
          <p className="christmas-light-eyebrow">
            Residential & Commercial Christmas Lighting
          </p>

          <h1 className="christmas-light-title">
            Your Home.
            <span className="christmas-highlight">
              {" "}
              The Brightest on the Block.
            </span>
          </h1>

          <p className="christmas-light-description">
            From custom roofline lighting and beautifully wrapped trees to
            complete residential and commercial displays, Outshine designs and
            installs Christmas lights that make your property feel magical,
            festive, and unforgettable.
          </p>

          <div className="christmas-light-hero-actions">
            <button
              type="button"
              className="christmas-light-primary-button"
              onClick={() => navigate("/quote")}
            >
              Request a Christmas Light Quote
              <span aria-hidden="true">→</span>
            </button>

            <a
              href="tel:8016618232"
              className="christmas-light-secondary-button"
            >
              Call 801-661-8232
            </a>
          </div>

          <div className="christmas-light-trust-row">
            <span>✓ Custom Lighting Design</span>
            <span>✓ Professional Installation</span>
            <span>✓ Residential & Commercial</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="christmas-light-intro">
        <div className="christmas-light-intro-inner">
          <p className="christmas-section-eyebrow">
            Complete Christmas Light Service
          </p>

          <h2>
            We Design the Magic.
            <span className="christmas-highlight">
              {" "}
              You Enjoy the Season.
            </span>
          </h2>

          <p>
            Decorating for Christmas should feel joyful, not stressful. Our
            team helps create a custom lighting design for your property,
            installs the display, maintains it throughout the season, and
            removes the lights when the holidays are over.
          </p>
        </div>
      </section>

      {/* REVIEWS */}
      <ReviewsSection />

      {/* RESIDENTIAL DETAILS */}
      <section className="christmas-light-details">
        <div className="christmas-light-details-grid">
          <div className="christmas-light-details-image-wrapper">
            <img
              src="/christmas-light-home.jpg"
              alt="Custom Christmas light installation on a residential home"
              className="christmas-light-details-image"
            />
          </div>

          <div className="christmas-light-details-content">
            <p className="christmas-section-eyebrow">
              Residential Christmas Lights
            </p>

            <h2>
              A Custom Display Designed
              <span className="christmas-highlight">
                {" "}
                Just for Your Home.
              </span>
            </h2>

            <p>
              Every home is different, which is why we do not believe in a
              one-size-fits-all lighting package. We design your Christmas
              lighting around your roofline, architecture, trees, landscaping,
              and personal style.
            </p>

            <p>
              Whether you want a timeless warm-white roofline, colorful holiday
              lights, wrapped trees, illuminated peaks, or a complete
              coordinated display, we help bring your vision to life.
            </p>

            <p>
              Our professional installation lets you enjoy a beautiful display
              without climbing ladders, untangling lights, or spending your
              holiday season troubleshooting burned-out strands.
            </p>

            <ul className="christmas-light-benefits">
              <li>
                <span>✓</span>
                Custom roofline and architectural lighting
              </li>

              <li>
                <span>✓</span>
                Tree trunks, branches, columns, and railing wraps
              </li>

              <li>
                <span>✓</span>
                Warm-white, multicolor, and coordinated designs
              </li>

              <li>
                <span>✓</span>
                Professional installation and seasonal removal
              </li>

              <li>
                <span>✓</span>
                Service and maintenance throughout the season
              </li>
            </ul>

            <button
              type="button"
              className="christmas-details-button"
              onClick={() => navigate("/quote")}
            >
              Design My Christmas Display
            </button>
          </div>
        </div>
      </section>

      {/* SERVICE TYPES */}
      <section className="christmas-light-services">
        <div className="christmas-light-services-inner">
          <p className="christmas-section-eyebrow">
            Christmas Lighting Services
          </p>

          <h2>
            Every Detail Designed to
            <span className="christmas-highlight">
              {" "}
              Make the Season Shine.
            </span>
          </h2>

          <div className="christmas-light-services-grid">
            <article className="christmas-light-service-card">
              <span className="christmas-light-card-number">01</span>

              <h3>Custom Home Lighting</h3>

              <p>
                We design lighting around your home's roofline, peaks,
                columns, windows, and architectural features.
              </p>
            </article>

            <article className="christmas-light-service-card">
              <span className="christmas-light-card-number">02</span>

              <h3>Tree Wrapping</h3>

              <p>
                Add warmth and sparkle to your property with professionally
                wrapped tree trunks, branches, bushes, and landscaping.
              </p>
            </article>

            <article className="christmas-light-service-card">
              <span className="christmas-light-card-number">03</span>

              <h3>Seasonal Maintenance</h3>

              <p>
                We help keep your display shining by addressing lighting
                problems that may occur during the holiday season.
              </p>
            </article>

            <article className="christmas-light-service-card">
              <span className="christmas-light-card-number">04</span>

              <h3>Removal After Christmas</h3>

              <p>
                When the season ends, our team returns to carefully remove the
                lighting from your property.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* TREE WRAPPING */}
      <section className="christmas-tree-section">
        <div className="christmas-tree-grid">
          <div className="christmas-tree-content">
            <p className="christmas-section-eyebrow">
              Professional Tree Wrapping
            </p>

            <h2>
              Turn Your Trees Into
              <span className="christmas-highlight">
                {" "}
                Something Magical.
              </span>
            </h2>

            <p>
              Wrapped trees create warmth, depth, and dimension throughout a
              Christmas display. They can transform ordinary landscaping into
              a beautiful focal point that looks stunning from the street.
            </p>

            <p>
              We can wrap trunks, larger branches, smaller ornamental trees,
              columns, railings, bushes, and other suitable landscape features
              to coordinate with the rest of your lighting design.
            </p>

            <ul className="christmas-tree-benefits">
              <li>
                <span>✓</span>
                Tree trunk and branch wrapping
              </li>

              <li>
                <span>✓</span>
                Bush, column, and railing lighting
              </li>

              <li>
                <span>✓</span>
                Coordinated colors and spacing
              </li>

              <li>
                <span>✓</span>
                Residential and commercial properties
              </li>
            </ul>

            <button
              type="button"
              className="christmas-details-button"
              onClick={() => navigate("/quote")}
            >
              Request Tree-Wrapping Pricing
            </button>
          </div>

          <div className="christmas-tree-image-wrapper">
            <img
              src="/christmas-tree-wrapping.jpg"
              alt="Trees wrapped with professional Christmas lights"
              className="christmas-tree-image"
            />
          </div>
        </div>
      </section>

      {/* COMMERCIAL */}
      <section className="christmas-commercial-section">
        <div className="christmas-commercial-grid">
          <div className="christmas-commercial-image-wrapper">
            <img
              src="/commercial-christmas-lights.jpg"
              alt="Professional commercial Christmas light display"
              className="christmas-commercial-image"
            />
          </div>

          <div className="christmas-commercial-content">
            <p className="christmas-section-eyebrow">
              Commercial Christmas Lighting
            </p>

            <h2>
              Create a Holiday Display
              <span className="christmas-highlight">
                {" "}
                Customers Remember.
              </span>
            </h2>

            <p>
              Professional Christmas lighting can transform your business,
              office, storefront, community, or commercial property into a
              welcoming destination during the holiday season.
            </p>

            <p>
              Outshine provides custom commercial Christmas lighting for
              businesses, retail properties, offices, HOAs, townhome
              communities, property managers, and other commercial locations.
            </p>

            <ul className="christmas-commercial-benefits">
              <li>
                <span>✓</span>
                Storefront and building roofline lighting
              </li>

              <li>
                <span>✓</span>
                Entrances, columns, trees, and landscaping
              </li>

              <li>
                <span>✓</span>
                Community and common-area displays
              </li>

              <li>
                <span>✓</span>
                Installation, maintenance, and removal
              </li>
            </ul>

            <button
              type="button"
              className="christmas-details-button"
              onClick={() => navigate("/quote")}
            >
              Request a Commercial Quote
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUTSHINE */}
      <section className="christmas-light-why">
        <div className="christmas-light-why-inner">
          <p className="christmas-section-eyebrow">
            Why Choose Outshine?
          </p>

          <h2>
            A Beautiful Display Without
            <span className="christmas-highlight">
              {" "}
              the Holiday Stress.
            </span>
          </h2>

          <div className="christmas-light-why-grid">
            <article className="christmas-light-why-card">
              <span className="christmas-light-card-number">01</span>

              <h3>Custom Design</h3>

              <p>
                Your lighting plan is designed around your property,
                architecture, landscaping, and vision.
              </p>
            </article>

            <article className="christmas-light-why-card">
              <span className="christmas-light-card-number">02</span>

              <h3>Professional Installation</h3>

              <p>
                Our team handles the ladders, rooflines, trees, and installation
                details so you do not have to.
              </p>
            </article>

            <article className="christmas-light-why-card">
              <span className="christmas-light-card-number">03</span>

              <h3>Seasonal Support</h3>

              <p>
                We provide support during the season to help keep your display
                looking bright and beautiful.
              </p>
            </article>

            <article className="christmas-light-why-card">
              <span className="christmas-light-card-number">04</span>

              <h3>Complete Removal</h3>

              <p>
                After the holidays, we return to take down the display and
                finish the season for you.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="christmas-light-cta">
        <div className="christmas-light-cta-content">
          <p className="christmas-light-cta-eyebrow">
            Let Your Property Shine This Christmas
          </p>

          <h2>
            Make This Holiday Season
            <span className="christmas-highlight">
              {" "}
              Impossible to Forget.
            </span>
          </h2>

          <p>
            Request a custom quote for residential lighting, tree wrapping, or
            commercial Christmas light installation.
          </p>

          <div className="christmas-light-cta-actions">
            <button
              type="button"
              className="christmas-light-primary-button"
              onClick={() => navigate("/quote")}
            >
              Request a Christmas Light Quote
              <span aria-hidden="true">→</span>
            </button>

            <a
              href="tel:8016618232"
              className="christmas-light-cta-phone"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ChristmasLightPage;