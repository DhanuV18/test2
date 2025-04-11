import { Profile } from './Profile/Profile';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

export default function MobileVersion() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Profile />
        </SwiperSlide>
        <SwiperSlide>
          <Profile />   
        </SwiperSlide>
        <SwiperSlide>
          <Profile />          
        </SwiperSlide>
        <SwiperSlide>
          <Profile />          
        </SwiperSlide>
      </Swiper>
    </>
  );
}
