import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Founder.css'
import '../../index.css'
import owner from '../../assets/kishan_anna_profile.jpeg'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Founder = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className='container founder__block' id='aboutus'>
      <div className='founder'>
        {/* Founder Details */}
        <div className='founder__header' data-aos='zoom-in'>
          <q className='quote'>
            You will pay far less than you’d ever imagined for a service that delivers more than you dreamt it could
          </q>
          <h3 className='founder__heading'>Kishanthan Poobalan</h3>
          <h4 className='founder__name'>Founder & CEO of Independent Consultant</h4>
          <a href='#contact'>
                <Link to="/contact-us">
                  <button className='btn btn--outline btn--oval talk'>Let's Talk</button>
                </Link>
          </a>
        </div>

        {/* Founder Image with Animation */}
        <div className='founder__photo' data-aos='zoom-in' data-aos-delay='50'>
          <div className='image__wrapper' data-aos='zoom-in'>
            <img src={owner} alt='CEO Profile' className='profile' data-aos='zoom-in' data-aos-delay='50'/>
            <div className='colors color-one' data-aos='zoom-in' data-aos-delay='800'></div>
            <div className='colors color-two' data-aos='zoom-in' data-aos-delay='1000'></div>
            <div className='colors color-three' data-aos='zoom-in' data-aos-delay='1200'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Founder