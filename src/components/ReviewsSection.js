import React from "react";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Outshine+Window+Cleaning+Pros/@40.0963997,-111.6128211,16.58z/data=!4m8!3m7!1s0x4880d484dc1b5fbd:0xf1bb598fcb2f9367!8m2!3d40.0968693!4d-111.6087199!9m1!1b1!16s%2Fg%2F11t29t_k4z?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D";

const reviews = [
  {
    name: "Hillary H.",
    text: "We hired Outshine to clean 20+ windows. The attention to detail and his ability to make the glass invisible is remarkable! They do outshine anyone else we have used before. The water spots are gone—I don't know anyone else who knows how to remove those. Weston himself was knowledgeable, punctual, a clear communicator, and all at a great price. We are now regulars. 10/10 recommend!",
    link: "https://maps.app.goo.gl/eNyUSsAVdrYS6RF48",
  },
  {
    name: "Shea N.",
    text: "Outshine Window Cleaning was incredible! Booking was super easy and convenient, and Weston was amazing to work with—so professional and friendly. Our windows have never looked better—they’re absolutely sparkling inside and out! I 100% recommend this company and will definitely be using them again.",
    link: "",
  },
  {
    name: "Michelle M.",
    text: "Outshine windows did a fantastic job on my windows! Weston is very professional, super respectful, very nice to talk, quick to send me the quote, and to find a good schedule for me. My windows look amazing! I’m very satisfied with this company, and I’ll definitely work with him again. I highly recommend Outshine to everyone.",
    link: "https://maps.app.goo.gl/RDvL4fz7hJA8Drrw7",
  },
];

const ReviewsSection = () => {
  return (
    <section className="reviews-section">
      <div className="reviews-heading">
      <p className="reviews-eyebrow">Trusted Throughout Utah County</p>

      <h2 className="reviews-title">
        HOMEOWNERS LOVE THE{" "}
        <span className="outshine-word">OUTSHINE</span>{" "}
        DIFFERENCE.
      </h2>

        <div className="reviews-rating">
          <span className="reviews-stars" aria-hidden="true">
            ★★★★★
          </span>

          <img
            src="/google-reviews.png"
            alt="Google Reviews"
            className="google-reviews-logo"
          />

          <span className="reviews-rating-text">
            5-Star Google Rated by Utah Homeowners
          </span>
        </div>
      </div>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <a
            key={review.name}
            href={review.link || GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="review-card"
            aria-label={`Read ${review.name}'s verified Google review`}
          >
            <div className="review-card-stars" aria-hidden="true">
              ★★★★★
            </div>

            <p>{review.text}</p>

            <div className="review-card-footer">
              <div className="review-author">
                <h3>{review.name}</h3>

                <span className="verified-google-review">
                  <img
                    src="/google-reviews.png"
                    alt=""
                    aria-hidden="true"
                    className="verified-google-logo"
                  />

                  <span>Verified Google Review</span>
                </span>
              </div>

              <span className="google-review-link">
                Read on Google →
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="reviews-actions">
        <button
          type="button"
          className="reviews-page-button"
          onClick={() =>
            window.open(
              GOOGLE_REVIEWS_URL,
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          <div className="reviews-button-text">
            <span className="reviews-button-title">
              Read All 100+ Reviews
            </span>
          </div>

          <img
            src="/google-reviews.png"
            alt="Google Reviews"
            className="reviews-button-logo"
          />
        </button>
      </div>
    </section>
  );
};

export default ReviewsSection;