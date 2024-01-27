import React from 'react';
import './Hero.css';
import Hand_icon from '../Assets/hand_icon.png';
import Arrow_icon from '../Assets/arrow.png';
import Hero_image from '../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="handHandIcon">
          {/* Adjusted the layout for better alignment */}
          <h2></h2>
          <p>new</p>
          <img src={Hand_icon} alt="" />
        </div>
        <p>collections</p>
        <p>for everyone</p>
        <div className="hero-latest-btn">
          <div>Latest Collections</div>
          <img src={Arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={Hero_image} alt="" />
      </div>
    </div>
  );
}

export default Hero;


