import React from 'react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import your custom arrow images
//import PrevArrow from '../images/left-arrow.png'; 
//import NextArrow from '../images/right-arrow.png';

import 'swiper/css';
import 'swiper/css/navigation'; // Make sure this is imported

const JasonSwiper = () => {
  return (
    <div className="swiper-wrapper-relative" style={{ position: 'relative' }}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        // Link to the custom class names
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        speed={600}
        autoplay={{
          delay: 1000, 
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide className='card-slider'>
            Zwilt enabled us to deliver on time and they've
            been heavy hitters in our corner since.Zwilt
            enabled us to deliver on time and they've been
            heavy hitters in our corner since.Zwilt enabled us
            to deliver on time and they've been heavy hitters.
        </SwiperSlide>
        <SwiperSlide className='card-slider'>
            Zwilt enabled us to deliver on time and they've
            been heavy hitters in our corner since.Zwilt
            enabled us to deliver on time and they've been
            heavy hitters in our corner since.Zwilt enabled us
            to deliver on time and they've been heavy hitters.
        </SwiperSlide>
        <SwiperSlide className='card-slider'>
            Zwilt enabled us to deliver on time and they've
            been heavy hitters in our corner since.Zwilt
            enabled us to deliver on time and they've been
            heavy hitters in our corner since.Zwilt enabled us
            to deliver on time and they've been heavy hitters.
        </SwiperSlide>
      </Swiper> 

      {/* Custom Navigation Buttons */}
      {/*
      <div className="custom-prev">
        <img src={PrevArrow} alt="previous" />
      </div>
      <div className="custom-next">
        <img src={NextArrow} alt="next" />
      </div>
      */}
    </div>
  );
}

export default JasonSwiper;