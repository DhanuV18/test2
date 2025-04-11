import React, { useEffect, useRef } from 'react';

import './Service.css'
import { useNavigate } from "react-router-dom";
import banner from '../../assets/mission.jpg'
import video from '../../assets/background___video.mp4'


import '../../index.css'

import { Link } from "react-router-dom";

import Cards from '../../Components/Cards/Cards';


import image1 from '../../assets/item1.jpg'
import image2 from '../../assets/item2.jpg'
import image3 from '../../assets/item3.jpg'
import image4 from '../../assets/item4.jpg'
import image5 from '../../assets/item5.jpg'
import image6 from '../../assets/item6.jpg'
import image7 from '../../assets/item7.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';

const Service = () => {
    useEffect(() => {
            AOS.init({
                duration: 1200,
                easing: 'ease-in-out',
                once: true,
            });
            }, []);
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
  }

  
  return (
    <div>
        <Navbar/>

       <div className="full__card">
        
            <div className='service__banner'>
                {/* <img src={banner} alt="banner" className="banner" /> */}
                    <div>
                        {/* <div className="layer"></div> */}
                        <video autoPlay loop muted className="bg-vid"><source src={video} type="video/mp4" /></video>
                    </div>
                    <div className="video__header" data-aos="zoom-in">
                        {/* <h2>World Class Service</h2> */}
                    </div>
            </div>

            <section className='block' id='services'>
                    <div className="container">
            
                    <div className='service__header '>
                        <h2 className='service__heading' data-aos="fade-up">Our Services</h2>
                        {/* <h4 className="small__heading2">Keep moving with confident</h4> */}
                        {/* <h4 className="small__headingsmall__heading">Keep move ahead <span className='confidence'>with Confidence</span></h4> */}
                        <h2 className="sub__heading" data-aos="fade-up">Solve Problems <span className='technology'>With Technology</span></h2>
                        <p className='service__paragraph' data-aos="fade-up">
                        Welcome to Independent Consultants, a leading provider of offshore IT support and Revenue Cycle Management (RCM) services. 
                        At Independent Consultants, we specialize in delivering high-quality, cost-effective solutions tailored to meet the dynamic 
                        needs of our clients. Our team of experts combines technical proficiency with industry knowledge to ensure seamless IT 
                        support and optimize revenue cycles for businesses across various sectors. By leveraging cutting-edge technology and best 
                        practices, we help our clients enhance operational efficiency, reduce costs, and drive growth.
                        Partner with us to experience unparalleled service and innovative solutions that empower your business to thrive in a 
                        competitive landscape.
                        </p>
                    </div> 
                
                <div className='cards'>
                    <div class="card" data-aos="flip-right">
                        <img src={image1} alt="image 1" className='image' />
                        <div className='image_card-image'>
                            <h3 className='card__text'>Managed IT Services</h3>
                            {/* <button className="btn card__button">Click here</button> */}
            
                        </div>
                    </div>
                    <div className="card" data-aos="flip-right">
                        <img src={image2} alt="image 2" className='image' />
                        <div className='image_card-image'>
                            <h3 className='card__text'>Cloud Services</h3>
                            {/* <p className="card__button">Click here</p> */}
                            {/* <button className="btn card__button">Click here</button> */}
                        </div>
                    </div>
                    <div className="card" data-aos="flip-right">
                        <img src={image3} alt="image 3" className='image' />
                        <div className='image_card-image'>
                            <h3 className='card__text'>Cyber Security</h3>
                            {/* <button className="btn card__button">Click here</button> */}
            
                        </div>
                    </div>
                    <div className="card" data-aos="flip-right">
                        <img src={image4} alt="image 3" className='image' />
                        <div className='image_card-image'>
                            <h3 className='card__text'>Web Development</h3>
                            {/* <button className="btn card__button">Click here</button> */}
            
                        </div>
                    </div>
                    <div className="card" data-aos="flip-right">
                        <img src={image5} alt="image 3" className='image' />
                        <div className='image_card-image'>
                            <h3 className='card__text'>365 Management</h3>
                            {/* <button className="btn card__button">Click here</button> */}
                        </div>
                    </div>
            
                    <div className="card" data-aos="flip-right">
                        <img src={image6} alt="image 3" className='image' />
                        <div className='image_card-image'>
                            <h3 className='card__text'>AV Products</h3>
                            {/* <button className="btn card__button">Click here</button> */}
                        </div>
                    </div>
            
                    <div className="card" data-aos="flip-right">
                        <img src={image7} alt="image 3" className='image' />
                        <div className='image_card-image'>
                            <h3 className='card__text'>Offshore Team</h3>
                            {/* <button className="btn card__button">Click here</button> */}
                        </div>
                    </div>      
            
                </div>              
                </div>
            </section>
     </div>
     <Footer />
    </div>
  )

}

export default Service



