import React from 'react'
import Frame55 from '../images/Frame 55.png';

const Header = () => {
  return (
    <div>
         <div>
         <div className="header">
         <img src={Frame55} className="logo" alt="logo" />
        <div classNameName="headerBtns">
            <span className="Hbtn">
                Find Work
            </span>
            <span className="Hbtn">
                Find Talent
            </span>
            <span className="Hbtn">
                Articles
            </span>
            <span className="Hbtn">
                About Us
            </span>
            <span className="Hbtn">
                Contact Us
            </span>
        </div>
        <div className="CallToAction">
            <span className="login">
                Log In
            </span>
            <span className="joinNow">
                Join Now
            </span>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Header
