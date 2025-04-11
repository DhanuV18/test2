import React, { useState, useEffect } from 'react';

import WebCards from './WebCards'
import MobileCards from './MobileCards'
// import '../ExpandingCards/ExpandingCards.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { Pagination, EffectCards } from 'swiper/modules';

const ExpandingCards = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return (
    <div>
        {isMobile ? (
          <WebCards/>
        ):
        (
          <MobileCards/>
          // <WebCards/>

          
        )}
    </div>
  )
}

export default ExpandingCards