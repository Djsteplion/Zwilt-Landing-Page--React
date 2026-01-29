import React from 'react'
import number3 from '../images/3.png';
//import join from '../images/Frame 626644.png';
import JoinNowArrow from './JoinNowArrow';
import start from '../images/Group 626358.png';
import { useEffect } from 'react';
import { observeElements } from '../animations';

const StartBuilding = () => {

     useEffect(() => {
            // Start observing sections when the page loads
            observeElements('.startBuilding');
        }, []);

  return (
    <div>
         <div className="slant5">
            <div className="startBuilding">
                <div className="nextStarText">
                    <div className="numberImage">
                        <img src={number3} alt=""/>
                    </div>
                    <div className="TextContent3">
                        <h1>
                            Start building <br/>
                            your team.
                        </h1>
                        <p>
                            Onboard your candidate right away and start <br className='break3'/>
                            creating the next big thing.
                        </p>
                        <div className="jN">
                            <JoinNowArrow />
                            <span className="joinNowText">Join Now</span>
                        </div>
                    </div>
                </div>
                <div className="startBuildingImagesDiv">
                    <img src={start} alt=""/>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default StartBuilding