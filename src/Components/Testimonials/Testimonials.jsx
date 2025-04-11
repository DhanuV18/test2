import './Testimonials.css'
import '../../index.css'

import React, { useState, useEffect } from 'react';

import './MobileVersion.css'
import './WebVersion.css'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { Pagination, EffectCards } from 'swiper/modules';

import WebVersion from './WebVersion.jsx';
import MobileVersion from './MobileVersion.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css';


const Testimonials = () => {

  const [isMobile, setIsMobile] = useState(false);


    
    useEffect(() => {
      const mediaQuery = window.matchMedia('(min-width: 768px)');
      setIsMobile(mediaQuery.matches);
      
      const handleResize = () => {
        setIsMobile(mediaQuery.matches);
      };
      AOS.init({
        duration: 1200,
        easing: 'ease-in-out',
        once: true,
      });

    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);


  return (
    <div className='block2' id='testimonials'>
        <div className="container2">
            <div className="block__header" data-aos='fade-up'>
                <h2 className="block__heading">
                    See What Others Says About
                    <span className='technology'> Our Services</span>
                     
                </h2>
                <div className="testimonials" data-aos='fade-up' data-aos-delay='200'>
                      {isMobile ? (
                          <WebVersion/>
                        ):
                        (
                          <MobileVersion/>
                          
                        )}
                </div>
            </div>
        </div>
     </div>
  )
}

export default Testimonials










