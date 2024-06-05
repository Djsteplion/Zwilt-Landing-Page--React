import React from 'react'
import cinemaicon from '../images/Frame 626618 (1).png';
import unreal from '../images/Frame 626622 (1).png';
import metric1 from '../images/Vector (9).png';
import metricImg from '../images/Vector (10).png';
import anothermetricimage from '../images/Vector (11).png';
import metricimage from '../images/Vector (9).png';
import metric2 from '../images/Vector (9).png';
import nextoffer from '../images/Frame 626624 (1).png';
import shopify from '../images/Frame 626618.png';
import magento from '../images/Frame 626619.png';
import metrics3 from '../images/Vector (10).png';
import datascience from '../images/Frame 626620.png';
import webflow from '../images/Frame 626621.png';
import dotnet from '../images/Frame 626622.png';
import explore from '../images/Frame 626623.png';
import exploreMore from '../images/Frame 626624 (2).png';
import uxdesign from '../images/Frame 626619 (1).png';
import graphics from '../images/Frame 626620 (1).png';
import illustration from '../images/Frame 626621 (1).png';

const MaketPlace = () => {
  return (
    <div>
        

<div className="slant1">
        <div className="markePlace">
            <div className="marketPlaceHeading">
                <h1 className="mph">
                    Your one-stop marketplace for finding<br /> 
                    the talent your business needs.
                </h1>
            </div>
            
            <div className="marketPlaceOffersAndImages">
                <div className="marketOffers">
                    <div className="offer1">
                        <h2 className="offerHeader">
                            Find Dev and IT professionals to<br />
                            scale your business.
                        </h2>
                        <div className="metrics">
                            <div className="metricsBox1">
                                <div className="metric1">
                                    <img src={metric1} className='' />     
                                    <span className="metricText">989 skills</span>
                                </div>
                                <div className="metric3">
                                    <img src={metricImg} alt="" />
                                    <span className="metricText">1011 Profiles</span>
                                </div>
                            </div>
                            <div className="metricsBox2">
                                <div className="metric2">
                                    <img src={anothermetricimage} alt=""/>
                                    <span className="metricText">45 Sub-Categories</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offer2">
                        <h2 className="offerHeader">
                            Explore Creative indidviduals with a<br />
                            keen eye for detail.
                        </h2>
                        <div className="metrics">
                            <div className="metricsBox1">
                                <div className="metric1">
                                    <img src={metricimage} alt="" />
                                    <span className="metricText">989 skills</span>
                                </div>
                                <div className="metric3">
                                    <img src={metrics3} alt=""/>
                                    <span className="metricText">1011 Profiles</span>
                                </div>
                            </div>
                            <div className="metricsBox2">
                                <div className="metric2">
                                    <img src={metric2} alt=""/>
                                    <span className="metricText">45 Sub-Categories</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nextOffers">
                        <img src={nextoffer} alt=""/>
                        <span className="exploreMore">
                            Explore More
                        </span>
                    </div>
                </div>
                <div className="marketOfferImages">
                    <div className="itandDev">
                        <div className="itAnDevHeader">
                            IT & Development
                        </div>
                        <div className="ItAndDevContainer">
                            <div className="icon1 shopify">
                                <img src={shopify} alt=""/>
                                <span className="iconText">Shopify<br /> Developer</span>
                            </div>
                            <div className="icon1 magento">
                                <img src={magento} alt=""/>
                                <span className="iconText">Magento<br /> Developer</span>
                            </div>
                            <div className="icon1 dataScience">
                                <img src={datascience} alt=""/>
                                <span className="iconText">Data<br /> Scientist</span>
                            </div>
                            <div className="icon1 webflow">
                                <img src={webflow} alt=""/>
                                <span className="iconText">Webflow<br /> Developer</span>
                            </div>
                            <div className="icon1 dotNet">
                                <img src={dotnet} alt=""/>
                                <span className="iconText">Dot Net<br /> Developer</span>
                            </div>
                            <div className="icon1 exploreMore">
                                <img src={explore} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="desAndCreative">
                        <div className="designAndCreativeHeader">
                            Design & Creative
                        </div>
                        <div className="designAndCreativeContainer">
                            <div className="icon1 exploreMore">
                                <img src={exploreMore} alt="" />
                            </div>
                            <div className="icon1 uxDesign">
                                <img src={uxdesign} alt=""/>
                                <span className="iconText">UX<br /> Designer</span>
                            </div>
                            <div className="icon1 GraphicsDesigner">
                                <img src={graphics} alt=""/>
                                <span className="iconText">Graphics<br /> Designer</span>
                            </div>
                            <div className="icon1 illusArtist">
                                <img src={illustration} alt=""/>
                                <span className="iconText">Illustration<br /> Artist</span>
                            </div>
                            <div className="icon1 unrealEngine">
                                <img src={unreal} className='' />    
                                <span className="iconText">Unreal<br /> Engine</span>
                            </div>
                            <div className="icon1 cinema">
                                <img src={cinemaicon} className='' />
                                <span className="iconText">Cinema<br /> 4D</span>
                            </div>
                        </div>
                    </div>
                    <div className="moreToExplore">
                        <span className="thirty">30 more</span> to explore
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default MaketPlace