import React from 'react';
import point from '../images/Rectangle 3281.png';
import riskless from '../images/Group 626340.png';

const Slide1 = () => {
  return (
    <div>
        <div className="onboardWtoutRiskContainer">
            <div className="onboardWtoutRisk">
                <h1>
                    Onboard without<br/>
                    the risk
                </h1>
                <div className="pointsDiv">
                    <div className="point">
                        <div>
                            <img src={point} alt=""/>
                        </div>
                        <p> We pick the best for you to select</p>
                    </div>
                    <div className="point">
                        <div>
                            <img src={point} alt=""/>
                        </div>
                        <p> Thousands of vetted candidates in dozens of categories.</p>
                    </div>
                    <div className="point">
                        <div>
                            <img src={point} alt=""/>
                        </div>
                        <p> Risk free resource swapping for the best fit</p>
                    </div>
                </div>
                <div className="lN">
                    <img src={point} alt=""/>
                    <span className="learnMoreText">Learn More</span>
                </div>
            </div>
            <div className="onboardWtoutRiskImg">
                <img src={riskless} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Slide1