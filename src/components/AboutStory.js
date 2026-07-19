import React from "react";
import "./AboutStory.css";

function AboutStory() {
  return (
    <section className="about-story-section">
      <div className="about-story-inner">
        <div className="about-story-images">
          <div className="about-story-image about-story-image-large">
            <img
              src="/weston-kelly-1.jpg"
              alt="Weston and Kelly Clark, owners of Outshine Window Cleaning Pros"
            />
          </div>

          <div className="about-story-image about-story-image-small">
            <img
              src="/weston-kelly-2.jpg"
              alt="Weston and Kelly Clark serving their community"
            />
          </div>
        </div>

        <div className="about-story-content">
          <p className="about-story-eyebrow">A Note From Weston</p>

          <h2 className="about-story-title">
            More Than Clean Windows.
            <span className="outshine-word"> More Light.</span>
          </h2>

          <p>
            Outshine Window Cleaning Pros is more than a business to me—it’s a
            reflection of the life Kelly and I have built together. It’s built
            on hard work, honesty, service, family, and a belief that every
            person deserves to be treated with kindness and respect.
          </p>

          <p>
            Outside of Outshine, Kelly and I have the privilege of serving
            together as missionaries in the Addiction Recovery Program for The
            Church of Jesus Christ of Latter-day Saints. Walking alongside
            individuals and families as they rebuild their lives has
            strengthened my belief that everyone deserves hope, compassion,
            and the opportunity for a fresh start.
          </p>

          <blockquote className="about-story-quote">
            “I’ve learned that sometimes the smallest acts of service can make
            the biggest difference.”
          </blockquote>

          <p>
            A little encouragement, a little extra care, or simply showing up
            when you say you will can help restore confidence and brighten
            someone’s day.
          </p>

          <p>
            That perspective carries into every home we visit. Whether we’re
            cleaning a few windows or caring for an entire property, my goal is
            for every customer to feel valued, respected, and confident that
            we’ve treated their home as if it were our own.
          </p>

          <p>
            To me, clean windows have always represented more than just a
            service. They let in more light. They change the way a home feels
            from the inside out. That’s what Outshine is really about—not just
            making windows shine, but helping people enjoy the place they call
            home.
          </p>

          <p>Thank you for trusting our family with yours.</p>

          <div className="about-story-signature">
            <strong>Weston Clark</strong>
            <span>Owner, Outshine Window Cleaning Pros</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutStory;