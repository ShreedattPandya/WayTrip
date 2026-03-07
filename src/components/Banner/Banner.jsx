import React from "react";
import { Carousel } from "react-bootstrap";
import sliderImg1 from "../../assets/images/slider/gen_hero_1.png";
import sliderImg2 from "../../assets/images/slider/gen_hero_2.png";
import sliderImg3 from "../../assets/images/slider/gen_hero_3.png";
import sliderImg4 from "../../assets/images/slider/gen_hero_4.png";
import "./banner.css";

const Banner = () => {
  return (
    <section className="hero-section">
      <Carousel fade indicators={false} controls={false} interval={4000} pause={false}>
        <Carousel.Item>
          <div className="hero-img-wrapper">
            <img src={sliderImg1} className="d-block w-100" alt="Tropical Beach" />
          </div>
          <Carousel.Caption className="hero-caption">
            <div className="hero-content">
              <span className="hero-subtitle">Discover the majestic beauty of</span>
              <h1 className="hero-title">PARADISE</h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="hero-img-wrapper">
            <img src={sliderImg2} className="d-block w-100" alt="Mountain Night" />
          </div>
          <Carousel.Caption className="hero-caption">
            <div className="hero-content">
              <span className="hero-subtitle">Experience the breathtaking heights of</span>
              <h1 className="hero-title">ADVENTURE</h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="hero-img-wrapper">
            <img src={sliderImg3} className="d-block w-100" alt="Ancient Temple" />
          </div>
          <Carousel.Caption className="hero-caption">
            <div className="hero-content">
              <span className="hero-subtitle">Uncover the spiritual mysteries of</span>
              <h1 className="hero-title">HERITAGE</h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="hero-img-wrapper">
            <img src={sliderImg4} className="d-block w-100" alt="Green Valley Tea Garden" />
          </div>
          <Carousel.Caption className="hero-caption">
            <div className="hero-content">
              <span className="hero-subtitle">Breathe in the tranquility of</span>
              <h1 className="hero-title">NATURE</h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Bottom Categories Navigation */}
      <div className="hero-categories">
        <a href="https://www.incredibleindia.gov.in/en/destinations" target="_blank" rel="noreferrer" className="category-item text-decoration-none">Destinations</a>
        <div className="category-divider"></div>
        <a href="https://www.incredibleindia.gov.in/en/nature" target="_blank" rel="noreferrer" className="category-item text-decoration-none">Nature</a>
        <div className="category-divider"></div>
        <a href="https://www.incredibleindia.gov.in/en/heritage" target="_blank" rel="noreferrer" className="category-item text-decoration-none">Heritage</a>
        <div className="category-divider"></div>
        <a href="https://www.incredibleindia.gov.in/en/spiritual" target="_blank" rel="noreferrer" className="category-item text-decoration-none">Spiritual</a>
      </div>
      <div className="hero-bottom-gradient"></div>
    </section>
  );
};

export default Banner;
