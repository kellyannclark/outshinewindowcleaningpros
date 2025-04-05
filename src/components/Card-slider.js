import React, { useRef } from 'react';


const CardSlider = () => {
  const sliderRef = useRef();

  const scrollCards = (direction) => {
    const container = sliderRef.current;
    const scrollAmount = container.offsetWidth * 0.25 * 4;

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const cardData = [
    {
      title: "Residential Window Cleaning",
      text: "We bring professional-grade shine to your home’s windows with our spotless, streak-free cleaning system — inside and out.",
      image: "/card-slider1.jpg",
    },
    {
      title: "Commercial Window Cleaning",
      text: "From storefronts to offices, we deliver immaculate windows that impress clients and customers — with flexible scheduling.",
      image: "/card-slider2.jpg",
    },
    
    {
      title: "Spot-Free Cleaning System",
      text: "We use a spot-free cleaning systen and good old-fashioned elbow grease to deliver streak-free, chemical-free window cleaning.",
      image: "/card-slider3.jpg",
    },
          
    {
      title: "Pressure Washing",
      text: "We blast away dirt, mold, and grime on driveways, patios, and more — instantly restoring your property's curb appeal.",
      image: "/card-slider4.jpg",
    },
    {
      title: "Soft Washing for Homes",
      text: "A safe, low-pressure solution for siding, stucco, and delicate surfaces — tough on grime, gentle on your home.",
      image: "/card-slider5.jpg",
    },
    {
      title: "Gutter Cleaning & Detailing",
      text: "We remove debris and restore flow, protecting your home from water damage while boosting its clean look.",
      image: "/card-slider6.jpg",
    },
  ];
  

  return (
    <section className="card-slider-section">
      <button className="slider-arrow left" onClick={() => scrollCards('left')}>
        &#9664;
      </button>

      <div className="card-slider-container" ref={sliderRef}>
            {cardData.map((card, i) => (
        <div className="slider-card" key={i}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
        </div>
        ))}

      </div>

      <button className="slider-arrow right" onClick={() => scrollCards('right')}>
        &#9654;
      </button>
    </section>
  );
};

export default CardSlider;
