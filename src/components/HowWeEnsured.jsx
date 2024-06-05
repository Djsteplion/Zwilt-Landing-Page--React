import React from 'react';
import step1 from '../images/Frame 626623 (2).png';
import step2 from '../images/Frame 626623 (1).png';


const HowWeEnsured = () => {
  return (
    <div>
    
    <div className="howWeEnsure">
        <div className="howWeEnsureHeader">
            <h1>
                How we ensure you're<br/> in good hands.
            </h1>
            <p>
                With our comprehensive screening process, we hand-pick highly<br/>
                skilled candidates so you can onboard them in a matter of days.
            </p>
        </div>
        <div className="howWeEnsureContent">
            <div className="step1">
                <img src={step1} alt=""/>
                <p><span className="hlight">Step 1:</span>Resume Screening</p>
            </div>
            <div className="step2">
                <div className="step2Header">
                    <img src={step2} alt=""/>
                    <p><span className="hlight">Step 2:</span>Video Interview</p> 
                </div>
                <div className="step2content">
                    Candidates are accessed through skill based questions in a virtual setting<br />
                    Allowing you to guage personality and cultural fit.
                </div>
            </div>
            <div className="step3">
                <img src={step1} alt=""/>
                <p><span className="hlight">Step 3:</span>Technical Evaluation</p>
            </div>
            <div className="step4">
                <img src={step1} alt=""/>
                <p><span className="hlight">Step 4:</span>Application Review</p>
            </div>
            <div className="step5">
                <img src={step1} alt=""/>
                <p><span className="hlight">Step 5:</span>Let's get to work</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default HowWeEnsured