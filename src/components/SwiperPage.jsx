import React from 'react'
import {Navigation, Pagination, Scrollbar,Autoplay} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import Hero from '../components/Hero';
import ITDevelopment from '../components/ITDevelopment';
import Slide1 from '../components/Slide1';
import 'swiper/css';

const SwiperPage = () => {


  return (
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay
        delay={1000}
        pagination={{ clickable: true }}
        loop={true}
        disableOnInteraction={false}
        onSlideChange={()=>console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
     >
        <SwiperSlide className='card-slider'>
        <Slide1 />
        </SwiperSlide>
        <SwiperSlide className='card-slider'>
        <ITDevelopment />
        </SwiperSlide>
        <SwiperSlide className='card-slider'><Hero /></SwiperSlide>
        <SwiperSlide className='card-slider'><ITDevelopment /></SwiperSlide>
        <SwiperSlide className='card-slider'><Slide1/></SwiperSlide>
        <SwiperSlide className='card-slider'><ITDevelopment /> </SwiperSlide>
        <SwiperSlide className='card-slider'><Slide1 /></SwiperSlide>
        <SwiperSlide className='card-slider'><ITDevelopment /></SwiperSlide>
    ...
     </Swiper>   
  );
}

export default SwiperPage