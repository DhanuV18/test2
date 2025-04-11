

import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import '../../index.css'
import './WebVersion.css'

// import 'swiper/css';
// import 'swiper/css/pagination';
import profile from '../../assets/kishan_anna_profile.jpeg'

import { Pagination } from 'swiper/modules';
import { Profile } from './Profile/Profile';



const WebVersion = () => {
  return (
    <div>
    <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper2"
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
      </Swiper>
    </div>
  )
}

export default WebVersion