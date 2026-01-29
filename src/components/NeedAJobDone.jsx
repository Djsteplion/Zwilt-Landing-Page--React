import React from 'react';
//import vector12 from '../images/Frame 626644.png';
import JoinNowArrow from './JoinNowArrow';
import frame55 from '../images/Frame 55.png';
import { useEffect } from 'react';
import { observeElements } from '../animations';

const NeedAJobDone = () => {

useEffect(() => {
    // Start observing sections when the page loads
    observeElements('.needAjobDoneHeader, .footer1, .footer2');
}, []);

  return (
    <div className="slant6">
    <div className="needajobdone">
        <div className="needAjobDoneHeader">
            <div className="needAjobDoneText">
                <h1>
                    Need a job  done, and done <br className='break3'/>
                    well? Get started
                </h1>
                <JoinNowArrow />
            </div>
        </div>
      
        <div className="footer" id='contactus'>
            <div className="footer1">
                <img src={frame55} alt=""/>
                <p className="f1text">
                    We take complex hiring  <br className='break3'/>
                    processes - and simplify them. <br className='break3'/>
                    Connecting you to the world's  <br className='break3'/>
                    highly qualified talent pool.
                </p>
                <p className="landr">
                    LINKS AND REDIRECTS
                </p>
                <div className="links">
                    <span className="link1">Hire now</span>
                    <span className="link2">Apply now</span>
                </div>
            </div>
            <div className="footer2">
                <div className="footer2header">
                    <h1>
                        Connecting the right people to <br className='break3'/> the right businesses.
                    </h1>
                </div>    
                    <div className="otherlinks">
                        <div className="link3">
                            <p className="otherlinkheader">
                                PLATFORM
                            </p>
                            <p>Find Work</p>
                            <p>Find Talent</p>
                            <p>Categories</p>
                            <p>About Us</p>
                        </div>
                        <div className="link4">
                            <p className="otherlinkheader">
                                CATEGORIES
                            </p>
                            <p>Data Science</p>
                            <p>IT & Networking</p>
                            <p>Web & Mobile</p>
                        </div>
                        <div className="link5">
                            <p className="otherlinkheader">
                                HELP
                            </p>
                            <p>FAQ'S</p>
                            <p>Contact Us</p>
                        </div>
                        <div className="link6">
                            <p className="otherlinkheader">
                                GET IN TOUCH @
                            </p>
                            <p>Instagram</p>
                            <p>Linkedln</p>
                            <p>Twitter</p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default NeedAJobDone