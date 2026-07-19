import React from "react";
import ReviewsSection from "./ReviewsSection";
import "./ReviewPage.css";

function ReviewPage() {
  return (
    <main className="review-page">
      <section className="review-page-hero">
        <div className="review-page-hero-inner">
          <p className="review-page-eyebrow">
            Trusted by Homeowners Across Utah
          </p>

          <h1 className="review-page-title">
            Real Reviews.
            <span className="outshine-word"> Real Outshine Results.</span>
          </h1>

          <p className="review-page-description">
            See why homeowners throughout Utah County, Salt Lake County, and
            Summit County trust Outshine Window Cleaning Pros to care for their
            homes with professionalism, dependability, and attention to detail.
          </p>

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
        </div>
      </section>

      <ReviewsSection />
    </main>
  );
}

export default ReviewPage;