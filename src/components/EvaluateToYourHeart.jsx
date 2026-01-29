import React from 'react';
import number2 from '../images/2.png';
//import join from '../images/Frame 626644.png';
import JoinNowArrow from './JoinNowArrow';
import evaluate from '../images/Group 626351.png';
import { useEffect } from 'react';
import { observeElements } from '../animations';

const EvaluateToYourHeart = () => {

    useEffect(() => {
        // Start observing sections when the page loads
        observeElements('.evaluateToHeart');
    }, []);

  return (
    <div>
        <div className="slant4">
            <div className="evaluateToHeart">
                <div className="nextStarText">
                    <div className="numberImage">
                        <img src={number2} alt=""/>
                    </div>
                    <div className="TextContent2">
                        <h1>
                            Evaluate to your<br/>
                            heart's content
                        </h1>
                        <p>
                            Assess the candidate through work history, transparent <br className='break3'/>
                            tests and video interviews.
                        </p>
                        <div className="jN">
                            <JoinNowArrow />
                            <span className="joinNowText">Join Now</span>
                        </div>
                    </div>
                </div>
                <div className="evaluateImagesDiv">
                    <img src={evaluate} alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EvaluateToYourHeart