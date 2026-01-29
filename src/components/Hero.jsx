import React from 'react'
import { useEffect } from 'react';
import { observeElements } from '../animations';
import zwilt from '../images/zwilt-tba-1-01 2.png';

const Hero = () => {
  useEffect(() => {
    // Start observing sections when the page loads
    observeElements('.hero, .avatar1');
  }, []);

  return (
    <div className="hero">
        <h1>Finding the right fit<span>
         <img src={zwilt} className="avatar1" alt="logo" />
            </span>has <br className='break3'/>
             never been easier.
        </h1>
        <p className="heroText">
            With our rigorous pre-vetting process, you'll never have to <br class="break3"/>
            worry about finding the ideal candidate ever again.
        </p>
    </div>
  )
}

export default Hero