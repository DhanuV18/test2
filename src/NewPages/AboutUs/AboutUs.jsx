import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutUs.css';
// import image from ''

import image1 from '../../assets/backgroundHero.jpg'
import image2 from '../../assets/3.jpg'
import video from '../../assets/services.mp4'

import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
            <Navbar />  
          <div>
            {/* <img src={banner} alt="banner" className="banner" /> */}
                <video autoPlay loop muted className="bg-vid"><source src={video} type="video/mp4" /> </video>
              <div className="video__header">
              <div className="layer"></div>
              
              </div>
          </div>
          <div className='container us'>
            <h4 className="small__heading2" data-aos="fade-up">Keep moving with confident</h4>
            
              <h2 className="sub__heading" data-aos="fade-up">Helping businesses operate <span className='technology'>securely & efficiently.</span></h2>
              <p className="para1" data-aos="fade-up">
              We empower businesses, large or small, with reliable IT infrastructure to achieve their goals. Our mission is to simplify operations for business owners and their teams through effective and evolving IT solutions. 
              With a comprehensive IT strategy, we ensure your business stays secure, efficient, and operates at its full potential.
              </p>

          </div>
          <div className="value">
            <img src={image1} alt="" className='us-image'/>
          <h2 className="sub__heading" data-aos="fade-up">Our <span className='technology'>Values</span></h2>
          </div>
    <div className="about-us-container">      

      <div className="grid__cards">
          <div className="grid__card" data-aos="flip-up">
            <h3>
              Inspire
            </h3>
                          {/* <img src={image2} alt="image 2" className='image' /> */}
                          <p>We share our passion for technology by delivering innovative 
                            solutions and proactively monitoring your systems to ensure optimal performance.</p>
              
          </div>
          <div className="grid__card" data-aos="flip-up">
            <h3>
              Go With Us
            </h3>
                          {/* <img src={image2} alt="image 2" className='image' /> */}
                          <p>
                          We go above and beyond to minimize downtime,
                           tackling challenges head-on—even those beyond our control—to keep your business running smoothly.
                          </p>
              
          </div>
          <div className="grid__card" data-aos="flip-up">
            <h3>
              Own It
            </h3>
                          {/* <img src={image2} alt="image 2" className='image' /> */}
                          <p>Even the best technology can fail, but with 24/7 support, we’ll get you back online quickly. 
                            We take full ownership of every challenge until it’s resolved to your satisfaction.</p>
              
          </div>
          <div className="grid__card" data-aos="flip-up">
            <h3>
              Be Human
            </h3>
                          {/* <img src={image2} alt="image 2" className='image' /> */}
                          <p>Our friendly team simplifies technology by explaining complex details in plain English, 
                            ensuring you understand the importance and impact of even the most technical issues.</p>
              
          </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AboutUs;
