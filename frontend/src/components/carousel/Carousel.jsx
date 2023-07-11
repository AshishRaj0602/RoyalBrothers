import React, { useState, useEffect } from 'react';
import './crousel.css'
const Carousel = ({ slides, autoScrollInterval }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, autoScrollInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [slides.length, autoScrollInterval]);

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <div className="carousel-caption">
          <div className="carousel-caption-heading">{slide.caption}</div>
          <p>{slide?.para}</p>
          </div>
          <img src={slide.image} alt={slide.caption} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;

