import React from 'react';
import './Hero.css';
import Hand_icon from '../Assets/hand_icon.png';
import Arrow_icon from '../Assets/arrow.png';
import Hero_image from '../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2 className="hero-title">DISCOVER THE LATEST TRENDS</h2>
        <p className="hero-description">Welcome to the hub of fashion innovation! Explore the latest trends designed to captivate the vibrant essence of the Indian market.</p>
        <div className="handHandIcon">
          <h2 className="emoji">🌟</h2>
          <p className="highlight-text">Explore New Arrivals</p>
          {/* <img src={Hand_icon} alt="Hand Icon" /> */}
        </div>
        <p className="hero-description">Unveil the latest fashion trends tailored for the vibrant Indian market.</p>
        <div className="hero-categories">
         
        </div>
        <div className="hero-latest-btn">
          <div className="shop-now-btn">Shop Now</div>
          <img src={Arrow_icon} alt="Arrow Icon" />
        </div>
      </div>
      <div className="hero-right">
        <img src={Hero_image} alt="Hero Image" />
      </div>
    </div>
  );
}

export default Hero;
