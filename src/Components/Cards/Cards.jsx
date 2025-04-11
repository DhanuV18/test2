import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cards.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import '../../index.css'


import image1 from '../../assets/HeroImage.jpg'
import image2 from '../../assets/image22.jpg'
import image3 from '../../assets/cs.jpg'
import image4 from '../../assets/item4.jpg'
import image5 from '../../assets/item5.jpg'
import image6 from '../../assets/item6.jpg'
import image7 from '../../assets/item7.jpg'

import '../../index.css'


import Service from '../../NewPages/Service/Service.jsx'

const Cards = () => {

    useEffect(() => {
        AOS.init({
          duration: 1200,
          easing: 'ease-in-out',
          once: true,
        });
      }, []);

  return (
    <section className='block block--dark block--skewed-left' id='services'>
        <div className="container">

        <div className='service__header' data-aos="fade-up">
            {/* <h2 className='service__heading'>Our Services</h2> */}
            <h4 className="small__heading2">Keep moving with confident</h4>
            {/* <h4 className="small__headingsmall__heading">Keep move ahead <span className='confidence'>with Confidence</span></h4> */}
            <h2 className="sub__heading">Solve Problems <span className='technology'>With Technology</span></h2>
            {/* <p className='service__paragraph'>
            Welcome to Independent Consultants, a leading provider of offshore IT support and Revenue Cycle Management (RCM) services. 
            At Independent Consultants, we specialize in delivering high-quality, cost-effective solutions tailored to meet the dynamic 
            needs of our clients. Our team of experts combines technical proficiency with industry knowledge to ensure seamless IT 
            support and optimize revenue cycles for businesses across various sectors. By leveraging cutting-edge technology and best 
            practices, we help our clients enhance operational efficiency, reduce costs, and drive growth.
            Partner with us to experience unparalleled service and innovative solutions that empower your business to thrive in a 
            competitive landscape.
            </p> */}
        </div> 
    
    <div className='cards'>
        <div class="card" data-aos="flip-right" data-aos-delay="100">
            <img src={image1} alt="image 1" className='image' />
            <div className='image_card-image'>
                <h3 className='card__text'>Managed IT Services</h3>


            <Link to="/service">
                <button className="btn card__button">Click here</button>
            </Link>

            </div>
        </div>
        <div className="card" data-aos="flip-right" data-aos-delay="200">
            <img src={image2} alt="image 2" className='image' />
            <div className='image_card-image'>
                <h3 className='card__text'>Cloud Services</h3>
                {/* <p className="card__button">Click here</p> */}
                <Link to="/service">
                <button className="btn card__button">Click here</button>
            </Link>
            </div>
        </div>
        <div className="card" data-aos="flip-right" data-aos-delay="300">
            <img src={image3} alt="image 3" className='image' />
            <div className='image_card-image'>
                <h3 className='card__text'>Cyber Security</h3>
                
                <Link to="/service">
                <button className="btn card__button">Click here</button>
            </Link>

            </div>
        </div>
        {/* <div className="card">
            <img src={image4} alt="image 3" className='image' />
            <div className='image_card-image'>
                <h3 className='card__text'>Web Development</h3>
                <button className="btn card__button">Click here</button>

            </div>
        </div>
        <div className="card">
            <img src={image5} alt="image 3" className='image' />
            <div className='image_card-image'>
                <h3 className='card__text'>365 Management</h3>
                <button className="btn card__button">Click here</button>
            </div>
        </div>

        <div className="card">
            <img src={image6} alt="image 3" className='image' />
            <div className='image_card-image'>
                <h3 className='card__text'>AV Products</h3>
                <button className="btn card__button">Click here</button>
            </div>
        </div>

        <div className="card">
            <img src={image7} alt="image 3" className='image' />
            <div className='image_card-image'>
                <h3 className='card__text'>Offshore Team</h3>
                <button className="btn card__button">Click here</button>
            </div>
        </div> */}


    </div>
            {/* <h3 className="explore" data-aos="fade-up">
                <button>
                    <Link to="/service" className='explore'>Explore More</Link>
                </button>
            </h3> */}
                {/* <a href={Service} target='_blank' className='explore'>Explore More</a> */}
        </div>
</section>
  )
}

export default Cards
