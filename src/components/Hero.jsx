import React from 'react'
import { useState, useEffect } from 'react';
import zwilt from '../images/zwilt-tba-1-01 2.png';
import animate from 'animate.css';
import 'animate.css/animate.min.css';

const Hero = () => {
  return (
    <div className='animate__animated animate_bounce'>
    <div className="hero animate__animated animate_bounce">
        <h1 className='animate__animated animate_bounce'>Finding the right fit<span>
         <img src={zwilt} className="avatar1" alt="logo" />
            </span>has<br />
            never been easier.
        </h1>
        <p className="heroText">
            With our rigorous pre-vetting process, you'll never have to <br />
            worry about finding the ideal candidate ever again.
        </p>
    </div>
    </div>
  )
}

export default Hero