import React from "react";

const serviceAreas = [
  {
    county: "Utah County",
    label: "Primary Service Area",
    cities:
      "Spanish Fork, Provo, Orem, Springville, Mapleton, Payson, Santaquin, Lehi, American Fork, Pleasant Grove, Highland, Alpine, Eagle Mountain, Saratoga Springs, and surrounding communities.",
    featured: true,
  },
  {
    county: "Salt Lake County",
    label: "Extended Service Area",
    cities:
      "Select homes and properties throughout Salt Lake County. Contact us to confirm availability in your neighborhood.",
    featured: false,
  },
  {
    county: "Summit County",
    label: "Extended Service Area",
    cities:
      "Select residential and specialty projects throughout Summit County, including the Park City area.",
    featured: false,
  },
];

const ServiceAreasSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="service-areas-section">
      <div className="service-areas-heading">
        <p className="service-areas-eyebrow">
          Local Service You Can Count On
        </p>

        <h2 className="service-areas-title">
          Proudly Serving{" "}
          <span className="outshine-word">UTAH.</span>
        </h2>

        <p className="service-areas-intro">
          Outshine provides professional window cleaning and exterior home
          care throughout Utah County, with select service available in Salt
          Lake and Summit counties.
        </p>
      </div>

      <div className="service-areas-layout">
        <div className="service-areas-map">
          <iframe
            title="Outshine Window Cleaning Pros service area map"
            src="https://www.google.com/maps?q=Utah+County,+Utah&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="service-areas-content">
          <div className="service-areas-state-heading">
            <span className="service-areas-state-mark" aria-hidden="true">
              ✦
            </span>

            <div>
              <p>Our Utah Service Area</p>
              <h3>Counties We Serve</h3>
            </div>
          </div>

          <div className="service-area-list">
            {serviceAreas.map((area) => (
              <article
                className={`service-area-card ${
                  area.featured ? "service-area-card-featured" : ""
                }`}
                key={area.county}
              >
                <div className="service-area-card-heading">
                  <div>
                    <span className="service-area-label">
                      {area.label}
                    </span>

                    <h4>{area.county}</h4>
                  </div>

                  {area.featured && (
                    <span className="service-area-primary-badge">
                      Main Area
                    </span>
                  )}
                </div>

                <p>{area.cities}</p>
              </article>
            ))}
          </div>

          <div className="service-areas-footer">
            <p>
              Not sure whether your home is within our service area?
              We’re happy to check.
            </p>

            <button
              type="button"
              className="service-areas-button"
              onClick={scrollToContact}
            >
              Check Your Location
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;