import React from 'react';
import { useEffect } from 'react';
import { observeElements } from '../animations';

const ITDevelopment = () => {
    useEffect(() => {
    // Start observing sections when the page loads
    observeElements('.ItAndDesign');
    }, []);

  return (
    <div>
        <div className="ItAndDesign" id='findwork'>
        <div className="ItAnDesign">
            <div className="ItAnDesHeader">
                <div className="ItAndDev">
                    IT & Development
                </div>
                <div className="designAndCreative">
                    Design and Creative
                </div>
            </div>
            <div className="ItRoles">
                <div className="roleRow1">
                    <span className="role">Python Developer</span>
                    <span className="role">Data Scientist</span>
                    <span className="role">Shopify Developer</span>
                     <span className="role">Python Developer</span>
                </div>
                <div className="roleRow2">
                    <span className="role">Shopify Developer</span>
                    <span className="role">Front End Developer</span>
                    <span className="role">Python Developer</span>
                    <span className="role">Full Stack Developer</span>
                </div>
                <div className="roleRow3">
                    <span className="role">MERN Stack Developer</span>
                    <span className="role">Shopify Developer</span>
                    <span className="role">Full Stack Developer</span>
                    <span className="srole">Explore More</span>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ITDevelopment