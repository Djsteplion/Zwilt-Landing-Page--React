import React from 'react';
import ZwiltAccordion from './ZwiltAccordion'; 
import { useEffect } from 'react';
import { observeElements } from '../animations';


const HowWeEnsured = () => {

 useEffect(() => {
       // Start observing sections when the page loads
       observeElements('.howWeEnsureHeader, .howWeEnsureContent');
   }, []);   

  return (
    <div>
    <div className="howWeEnsure">
        <div className="howWeEnsureHeader">
            <h1>
                How we ensure you're<br/> in good hands.
            </h1>
            <p>
                With our comprehensive screening process, we hand-pick highly <br className='break3'/>
                skilled candidates so you can onboard them in a matter of days.
            </p>
        </div>
        <div className="howWeEnsureContent">
            <ZwiltAccordion />
        </div>
    </div>
    </div>
  )
}

export default HowWeEnsured