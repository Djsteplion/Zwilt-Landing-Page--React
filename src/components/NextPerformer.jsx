import React from 'react'
import number1 from '../images/1.png';
import JoinNowArrow from './JoinNowArrow';
import nextStar from '../images/Group 1094.png';
import { useEffect } from 'react';
import { observeElements } from '../animations';


const NextPerformer = () => {

useEffect(() => {
    // Start observing sections when the page loads
    observeElements('.nextStarPerformer');
}, []);

  return (
    <div>
         <div className="slant3">
            <div className="nextStarPerformer">
                <div className="nextStarText">
                    <div className="numberImage">
                        <img src={number1} alt=""/>
                    </div>
                    <div className="TextContent1">
                        <h1>
                            Find your next star<br/>
                            performer
                        </h1>
                        <p>
                            Explore the vast Zwilt marketplace to find the candidate <br className='break3'/>
                            that meets your needs.
                        </p>
                        <div className="jN">
                            <JoinNowArrow />
                            <span className="joinNowText">Join Now</span>
                        </div>
                    </div>
                </div>
                <div className="nextStarImagesDiv">
                    <img src={nextStar} alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NextPerformer