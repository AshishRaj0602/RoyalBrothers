import React from "react";
import "./Home.css";
import Navbar from "../components/nav/Navbar";
import FleetCard from "../components/card/FleetCard";
import Carousel from "../components/carousel/Carousel";
import BookingCard from "../components/card/BookingCard";
import Mobile from "../components/card/Mobile";

const Home = () => {
  
  
  const slides = [
    {
      image: 'https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/slide-two-152ea05aae51c961ff3777509bd1e8c0f5d66fa663f8dd91625581ef7f70a264.webp',
      caption: 'We’re socially celebrated',
      para:"Our customer centric approach has got us amazing reviews. Be it any platform, you will see many users recommending our service."
    },
    {
      image: 'https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/slide-three-4fb40ac9520409dd84fd281555d8546af4bac62d70f8ef8879e050c056f717d1.webp',
      caption: 'Ready to serve you in 40+ cities!',
      para:"Think of a city & we are mostly there. The next time you plan on exploring a city, know that your means of transport is sorted with Royal Brothers.",
    },
    {
      image: 'https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/slide-one-1a7d9a00252d397c615e4d3f9e14c1f8950ad546171c0d778494fb196bd31c5d.webp',
      caption: 'Bikes maintained so good',
      para:"We obsess on giving you the best possible experience. This is not only with well serviced bikes but also with a 24/7 support team available just a call away."
    },
  ];
  return (
    <>
      <Navbar />
      <section id="section-hero">
        <div className="carousel">
          <div className="carousel_fixed_item">
          <Mobile/>
          </div>
        </div>
      </section>
      <BookingCard/>
      <section className="features">
        <div className="features-service-tags">
          <div className="features-service-tags--child">
            <img style={{height:'34px'}} src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/sanitized_vehicle-ffa9a8ac4750ddf94bc778791fe3fb1658bbbeaf4e31c9fe1287e734081664c4.svg" alt="24/7 Roadside Assistance" />
            <p className="features-service-tags--child-tagline">Sanitized Vehicles</p>
          </div>
          <div className="features-service-tags--child">
            <img style={{height:'34px'}} src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/insurance-9bc77c524af240ca419056a77d7cb140615e3d0711d1755959ec75a4c99f8c9b.svg" alt="24/7 Roadside Assistance" />
            <p className="features-service-tags--child-tagline">Vehicle Insurance</p>
          </div>
          <div className="features-service-tags--child">
            <img style={{height:'34px'}} src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/roadside_assistance-1e15e6c14e688dd300a3d18351d66b01d3876b0099a4f1fa6478fbfd62d11286.svg" alt="24/7 Roadside Assistance" />
            <p className="features-service-tags--child-tagline">24/7 Roadside Assistance</p>
          </div>
          <div className="features-service-tags--child">
            <img style={{height:'34px'}} src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/maintenance-7db03a0fa7cd8a4539e0719125fd898907c22716fbe5c8d11d8f0559f8512644.svg" alt="24/7 Roadside Assistance" />
            <p className="features-service-tags--child-tagline">Bike Maintenance</p>
          </div>
        </div>
      </section>
      <section className="airport">
        <div className="airport_items">
          <a href="https://www.royalbrothers.com/bangalore/bike-rentals/long-term">
            <div className="airport_img">
              <img style={{width:"100vw"}} src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/RBX_carousel_one-28428c3dcd0abc261dddcf1074eae711ce396a0e33584d435385a12b57796955.webp" alt="airport" />
            </div>
          </a>
        </div>
      </section>

      <section className="our-fleet">
        <div className="our-fleet--heading-container">
        <div className="our-fleet--heading">
          Our Fleet
        </div>
        </div>
        <div className="our-fleet--heading-container">
          <div className="our-fleet--duration">
            <label htmlFor="duration" className="duration">Duration</label>
            <select name="duration" id="duration">
              <option value="">Hourly</option>
            </select>
          </div>
        <div className="our-fleet-bikeFleets">
          <div className="fleet-gride">
            <FleetCard/>
            <FleetCard/>
            <FleetCard/>
            <FleetCard/>
          </div>
        </div>
        </div>
      </section>
      <section>
      <Carousel slides={slides} autoScrollInterval={3000} />
      </section>
    </>
  );
};

export default Home;
