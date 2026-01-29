import React from 'react';
import SwiperPage from '../components/SwiperPage';
import { useEffect } from 'react';
import { observeElements } from '../animations';

const WhyChooseZiltContainer = () => {

useEffect(() => {
    // Start observing sections when the page loads
    observeElements('.whyChooseQuestion, .zwiltSwiperPage');
}, []);
    

  return (
    <div className="whyChooseZwilt" id='aboutus'>
        <div className="whyChooseQuestion">
            <h1>
                Why choose <br className='break3'/>
                Zwilt? 
            </h1>
            <p>
                We take complex hiring
                processes - and simplify them.
                Connecting you to the world's
                highly qualified talent pool.
            </p>
        </div>
        <div className="zwiltSwiperPage">
            <SwiperPage />
        </div>
    </div>
  )
}

export default WhyChooseZiltContainer