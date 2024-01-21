import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow_icon.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div classname='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hand-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collections</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">

        </div>
    </div>
    
  )
}

export default Hero
