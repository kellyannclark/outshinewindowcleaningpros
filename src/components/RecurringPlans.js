import React from "react";

const plans = [
  {
    name: "Quarterly",
    discount: "$100 OFF",
    frequency: "Per Cleaning",
  },
  {
    name: "Biannual",
    discount: "$50 OFF",
    frequency: "Per Cleaning",
  },
];

const includedBenefits = [
  "7-Day Rain Guarantee",
  "FREE Hard Water Removal",
  "FREE Screen Cleaning",
  "FREE Track Cleaning",
];

const RecurringPlans = () => {
  const handleQuoteClick = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="recurring-plans-section">
      <div className="recurring-plans-heading">
        <p className="services-eyebrow">Recurring Service</p>

        <h2 className="recurring-plans-title">
          Save More. Shine All Year.
        </h2>

        <p className="recurring-plans-intro">
          Choose a recurring cleaning plan and enjoy exclusive savings and
          valuable services included with every cleaning.
        </p>
      </div>

      <div className="recurring-plans-grid recurring-plans-grid-two">
        {plans.map((plan) => (
          <article className="recurring-plan-card" key={plan.name}>
            <p className="recurring-plan-name">{plan.name}</p>

            <h3>{plan.discount}</h3>

            <p className="recurring-plan-subtitle">{plan.frequency}</p>

            <ul className="recurring-plan-features">
              {includedBenefits.map((benefit) => (
                <li className="included" key={benefit}>
                  <span aria-hidden="true">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="recurring-plan-button"
              onClick={handleQuoteClick}
            >
              Get Your Quote
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecurringPlans;