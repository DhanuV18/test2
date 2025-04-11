import React, { useEffect } from 'react';
import './Mission.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../index.css'


const Mission = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className='mission-section'>
      <div className='picture'>
      <div className='layer'></div>
        <div className='picture__text'>
          <div className='container mission__container'>
            {/* Mission Section */}
            <div className='mission__content' data-aos='fade-up'>
              <h2 className='mission__heading'>Mission</h2>
              <p className='mission__text'>
              To be a globally recognized leader in delivering innovative and sustainable IT solutions, empowering businesses to achieve their
               digital transformation goals while fostering growth, collaboration, and excellence in the offshore IT industry.
              </p>
            </div>

            {/* Vision Section */}
            <div className='mission__content' data-aos='fade-up' data-aos-delay='200'>
              <h2 className='vission__heading'>Vision</h2>
              <p className='vission__text'>
              Our mission is to provide reliable, cost-effective, and cutting-edge IT services through exceptional talent and robust technologies. We strive to exceed client expectations by delivering tailored solutions, 
              fostering long-term partnerships, and creating value through innovation, integrity, and a commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission