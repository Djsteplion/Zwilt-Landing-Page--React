import React from 'react'
import number1 from '../images/1.png';
import join from '../images/Frame 626644.png';
import nextStar from '../images/Group 1094.png';

const NextPerformer = () => {
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
                            Explore the vast Zwilt marketplace to find the candidate<br/>
                            that meets your needs.
                        </p>
                        <div className="jN">
                            <img src={join} alt=""/>
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