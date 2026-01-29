import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './tablets.css';
import './mobile.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchBox from './components/SearchBox';
import ITDevelopment from './components/ITDevelopment';
import Interlude from './components/Interlude';
import MaketPlace from './components/MaketPlace';
/* import SwiperPage from './components/SwiperPage'; */
import HowItWorked from './components/HowItWorked';
import HowWeEnsured from './components/HowWeEnsured';
import StartYourJourneyHeader from './components/StartYourJourneyHeader';
import NextPerformer from './components/NextPerformer';
import EvaluateToYourHeart from './components/EvaluateToYourHeart';
import StartBuilding from './components/StartBuilding';
import WhyChooseZiltContainer from './components/WhyChooseZiltContainer';
import Faq from './components/Faq';
import NeedAJobDone from './components/NeedAJobDone';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <SearchBox />
    <ITDevelopment />
    <Interlude />
    <MaketPlace />
    <HowItWorked />
    <HowWeEnsured />
    <StartYourJourneyHeader />
    <NextPerformer />
    <EvaluateToYourHeart />
    <StartBuilding />
    <WhyChooseZiltContainer />
    <Faq />
    <NeedAJobDone />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
