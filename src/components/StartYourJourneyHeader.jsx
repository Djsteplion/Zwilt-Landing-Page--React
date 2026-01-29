import React from 'react';
import { useEffect } from 'react';
import { observeElements } from '../animations';

const StartYourJourneyHeader = () => {

  useEffect(() => {
      // Start observing sections when the page loads
      observeElements('.startJ');
  }, []);

  return (
    <div>
        <div className="startJ">
        <h1>
            Start your journey today.
        </h1>
    </div>
    </div>
  )
}

export default StartYourJourneyHeader