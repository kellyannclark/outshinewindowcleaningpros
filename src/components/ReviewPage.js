import React from "react";
import ReviewsSection from "./ReviewsSection";
import "./ReviewPage.css";

function ReviewPage() {
  return (
    <main className="review-page">
      <section className="review-page-hero">
        <img
          src="/reviews-hero.jpg"
          alt="Outshine Window Cleaning customer home"
          className="review-page-hero-image"
        />

        <div className="review-page-overlay"></div>

        <div className="review-page-hero-inner">
          <div className="review-page-trust">
            <img
              src="/google-reviews.png"
              alt="Google Reviews"
              className="review-page-google-logo"
            />

            <div>
              <strong>100+ Verified Google Reviews</strong>
              <span>Five-star service from local homeowners</span>
            </div>
          </div>

          <p className="review-page-eyebrow">
            Trusted by Homeowners Across Utah
          </p>

          <h1 className="review-page-title">
            Real Reviews.
            <span className="outshine-word">
              {" "}
              Real Outshine Results.
            </span>
          </h1>

          <p className="review-page-description">
            See why homeowners throughout Utah County, Salt Lake County, and
            Summit County trust Outshine Window Cleaning Pros to care for their
            homes with professionalism, dependability, and attention to detail.
          </p>
        </div>
      </section>

      <ReviewsSection />
    </main>
  );
}

export default ReviewPage;