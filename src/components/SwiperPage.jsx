import React from 'react'
import {Navigation, Pagination, Scrollbar,Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Frame1 from '../images/Frame 626632.png';
import Frame2 from '../images/Frame 626633.png';
import Frame3 from '../images/Frame 626634.png';
import 'swiper/css';

const SwiperPage = () => {


  return (
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        speed={600}
        autoplay={{
          delay: 1000, 
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        onSlideChange={()=>console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
     >
        <SwiperSlide className='card-slider'><img src={Frame1} alt="Frame 1" style={{ width: '100%', height: 'auto' }} /></SwiperSlide>
        <SwiperSlide className='card-slider'><img src={Frame2} alt="Frame 2" style={{ width: '100%', height: 'auto' }} /></SwiperSlide>
        <SwiperSlide className='card-slider'><img src={Frame3} alt="Frame 3" style={{ width: '100%', height: 'auto' }} /></SwiperSlide>
     </Swiper>   
  );
}

export default SwiperPage