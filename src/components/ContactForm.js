import React, { useState } from "react";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  city: "",
  service: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // This currently logs the information.
    // Connect this to your email provider or form service before publishing.
    console.log("Quote request submitted:", formData);

    setSubmitted(true);
    setFormData(initialFormData);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-section-inner">
        <div className="contact-heading">
          <p className="contact-eyebrow">Your Brighter Home Starts Here</p>

          <h2 className="contact-title">
            Ready to Let Your Home{" "}
            <span className="outshine-word">OUTSHINE?</span>
          </h2>

          <p className="contact-intro">
            Tell us a little about your home and the services you need. Our
            team will reach out with the next steps for your personalized
            quote.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-details-panel">
            <div className="contact-details-content">
              <span className="contact-details-label">
                The Outshine Difference
              </span>

              <h3>Clear communication from quote to clean.</h3>

              <p>
                We make requesting professional window cleaning simple,
                personal, and pressure-free.
              </p>

              <ul className="contact-benefits">
                <li>
                  <span className="contact-check" aria-hidden="true">
                    ✓
                  </span>

                  <span>Fast, personalized quotes</span>
                </li>

                <li>
                  <span className="contact-check" aria-hidden="true">
                    ✓
                  </span>

                  <span>Professional, dependable service</span>
                </li>

                <li>
                  <span className="contact-check" aria-hidden="true">
                    ✓
                  </span>

                  <span>7-Day Rain Guarantee</span>
                </li>

                <li>
                  <span className="contact-check" aria-hidden="true">
                    ✓
                  </span>

                  <span>Serving Utah, Salt Lake, and Summit counties</span>
                </li>
              </ul>

              <div className="contact-trust">
                <img
                  src="/google-reviews.png"
                  alt="Google Reviews"
                  className="contact-google-logo"
                />

                <div>
                  <strong>100+ Five-Star Reviews</strong>
                  <span>Trusted by Utah homeowners</span>
                </div>
              </div>

              <div className="contact-call-box">
                <span>Prefer to speak with us?</span>

                <a href="tel:8016618232">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="contact-phone-icon"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2
                      19.79 19.79 0 0 1-8.63-3.07
                      19.5 19.5 0 0 1-6-6
                      19.79 19.79 0 0 1-3.07-8.67
                      A2 2 0 0 1 4.11 2h3
                      a2 2 0 0 1 2 1.72
                      12.84 12.84 0 0 0 .7 2.81
                      2 2 0 0 1-.45 2.11L8.09 9.91
                      a16 16 0 0 0 6 6l1.27-1.27
                      a2 2 0 0 1 2.11-.45
                      12.84 12.84 0 0 0 2.81.7
                      A2 2 0 0 1 22 16.92z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span>(801) 661-8232</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="contact-form-heading">
              <span>Request Your Quote</span>
              <h3>How can we help your home shine?</h3>
            </div>

            {submitted && (
              <div className="contact-success" role="status" aria-live="polite">
                <span className="contact-success-icon" aria-hidden="true">
                  ✓
                </span>

                <div>
                  <strong>Thank you!</strong>
                  <p>
                    Your request has been received. We’ll be in touch shortly.
                  </p>
                </div>
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Name</label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-phone">Phone</label>

                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="(801) 555-0123"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-email">Email</label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-city">City</label>

                  <input
                    id="contact-city"
                    type="text"
                    name="city"
                    placeholder="Spanish Fork"
                    autoComplete="address-level2"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-service">
                  Which service are you interested in?
                </label>

                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="Exterior Window Cleaning">
                    Exterior Window Cleaning
                  </option>

                  <option value="Interior Window Cleaning">
                    Interior Window Cleaning
                  </option>

                  <option value="Interior and Exterior Window Cleaning">
                    Interior and Exterior Window Cleaning
                  </option>

                  <option value="Screen Cleaning">
                    Screen Cleaning
                  </option>

                  <option value="Track Detailing">
                    Track Detailing
                  </option>

                  <option value="Hard Water Removal">
                    Hard Water Removal
                  </option>

                  <option value="Solar Panel Cleaning">
                    Solar Panel Cleaning
                  </option>

                  <option value="Gutter Cleaning">Gutter Cleaning</option>

                  <option value="Pressure Washing">Pressure Washing</option>

                  <option value="Christmas Light Installation">
                    Christmas Light Installation
                  </option>

                  <option value="Recurring Cleaning Plan">
                    Recurring Cleaning Plan
                  </option>

                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">
                  Tell us about your project
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about your home, approximately how many windows you have, and anything else you would like us to know."
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                />
              </div>

              <button type="submit" className="contact-submit-button">
                <span>Request My Quote</span>

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="contact-arrow-icon"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <p className="contact-privacy-note">
                By submitting this form, you agree to be contacted about your
                quote request. We respect your privacy and never sell your
                information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;