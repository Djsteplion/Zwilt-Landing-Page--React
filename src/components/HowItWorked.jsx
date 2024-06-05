import React from 'react';
import quote from '../images/comma.png';
import avatar1 from '../images/Frame 136.png';
import avatar2 from '../images/Group (2).png';
import leftArrow from '../images/Frame 626653.png';
import rightArrow from '../images/Frame 626624 (3).png';
import jason from '../images/Frame 626655.png';

const HowItWorked = () => {
  return (
    <div>
        <div className="slant2">
        <div className="quoteDiv">
            <img src={quote} />    
        </div>
        <div className="howItWorked">
            <div className="howIt1">
                <div className="howIt1Header">
                    <h1>
                        How it worked<br />
                        for Jason<span><img src={avatar1} alt="" className="avatar1" /></span> at<br />
                        <span><img src={avatar2} alt="" className="avatar2" /></span>
                    </h1>
                </div>
                <div className="howIt1Text">
                    Zwilt enabled us to deliver on time and they've<br />
                    been heavy hitters in our corner since.
                </div>
                <div className="howIt1Arrow">
                    <img src={leftArrow} alt="" className="leftArrow" />
                    <img src={rightArrow} alt="" className="rightArrow" />
                </div>
            </div>
            <div className="howIt2">
                <div className="JasonMakiProfile">
                    <div>
                        <img src={jason} alt="" />
                    </div>
                    <div className="jasonMakiName">
                        <h2 className="jason">Jason Maki</h2>
                        <p className="JasonJob">
                            Engineer at GROOVE<br />
                            San Francisco
                        </p>
                    </div>
                </div>
                <div className="JasonMakkiTestimony">
                    Zwilt enabled us to deliver on time and they've<br />
                    been heavy hitters in our corner since.Zwilt<br />
                    enabled us to deliver on time and they've been<br /> 
                    heavy hitters in our corner since.Zwilt enabled us<br />
                    to deliver on time and they've been heavy hitters.
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default HowItWorked