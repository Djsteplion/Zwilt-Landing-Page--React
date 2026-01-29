import React from 'react'
import Frame55 from '../images/Frame 55.png';

const Header = () => {
  return (
    <div className="header">
        <img src={Frame55} className="logo" alt="logo" />
        <div classNameName="headerBtns">
            <a className="Hbtn" href='#findwork'>
                Find Work
            </a>
            <a className="Hbtn" href='#findtalent'>
                Find Talent
            </a>
            <a className="Hbtn" href='#articles'>
                Articles
            </a>
            <a className="Hbtn" href='#aboutus'>
                About Us
            </a>
            <a className="Hbtn" href='#contactus'>
                Contact Us
            </a>
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
  )
}

export default Header
