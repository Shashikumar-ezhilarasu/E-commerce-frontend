import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
  return (
    <div className='newsletter'> 
      <h1>Get Exclusive offers On Your Email</h1>
      <p>Subsribe to our Newsletter and stay updated</p>
      <div>
        <input type='email' placeholder='Your Email id'/>
        <button>Subscribe</button>
      </div>
    </div>
    
  )
}

export default Newsletter
