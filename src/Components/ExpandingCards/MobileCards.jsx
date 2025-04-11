import React, { useRef, useState } from 'react';
import './MobileCards.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'

// import 'swiper/css';
import 'swiper/css/effect-cards';



import { EffectCards } from 'swiper/modules';

export default function MobileCards() {
  return (
    <div className='mobile__card'> 
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="swiper2"
      >
        <SwiperSlide>
          <img src={image1} alt="image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="image 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="image 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
