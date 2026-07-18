import React from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Exterior Window Cleaning",
    text: "Streak-free exterior window cleaning that restores brightness and curb appeal.",
    image: "/exterior-window-cleaning.jpg",
    path: "/exterior-window-cleaning",
    featured: true,
  },
  {
    title: "Interior Window Cleaning",
    text: "Crystal-clear views and a fresher, brighter feeling in every room.",
    image: "/interior-window-cleaning.jpg",
    path: "/interior-window-cleaning",
    featured: true,
  },
  {
    title: "Screen Cleaning Services",
    text: "Remove dust, pollen, and buildup from your window screens.",
    image: "/screen-cleaning.jpg",
    path: "/screen-cleaning-services",
  },
  {
    title: "Track Detailing",
    text: "Deep cleaning for tracks, frames, corners, and hard-to-reach buildup.",
    image: "/track-detailing.jpg",
    path: "/track-detailing",
  },
  {
    title: "Solar Panel Cleaning",
    text: "Clear away dirt and residue that can limit solar panel performance.",
    image: "/solar-panel-cleaning.jpg",
    path: "/solar-panel-cleaning",
  },
  {
    title: "Gutter Cleaning",
    text: "Clear debris and restore proper water flow around your home.",
    image: "/gutter-cleaning.jpg",
    path: "/gutter-cleaning",
  },
  {
    title: "Pressure Washing",
    text: "Restore driveways, walkways, patios, and other durable surfaces.",
    image: "/pressure-washing.jpg",
    path: "/pressure-washing",
  },
  {
    title: "Christmas Light Installation",
    text: "Beautiful professional holiday lighting without the stress.",
    image: "/christmas-light-installation.jpg",
    path: "/christmas-light-installation",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  const featuredServices = services.filter((service) => service.featured);
  const additionalServices = services.filter((service) => !service.featured);

  return (
    <section id="services" className="services-section">
      <div className="services-heading">
       
        <h2 className="services-title">Our Services</h2>
      </div>

      <div className="services-grid">
        <div className="featured-services-grid">
          {featuredServices.map((service) => (
            <article
              key={service.title}
              className="service-card service-card-featured"
              onClick={() => navigate(service.path)}
            >
              <img src={service.image} alt={service.title} />

              <div className="service-card-shade" />

              <div className="service-card-content">
                <h3>{service.title}</h3>
                <p>{service.text}</p>

                <span className="service-card-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="small-services-grid">
          {additionalServices.map((service) => (
            <article
              key={service.title}
              className="service-card service-card-small"
              onClick={() => navigate(service.path)}
            >
              <img src={service.image} alt={service.title} />

              <div className="service-card-shade" />

              <div className="service-card-content">
                <h3>{service.title}</h3>

                <span className="service-card-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;