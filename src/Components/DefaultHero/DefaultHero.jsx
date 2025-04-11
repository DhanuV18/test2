import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import './DefaultHero.css'
import '../../index.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

const DefaultHero = () => {
  useEffect(() => {
          AOS.init({
            duration: 1200,
            easing: 'ease-in-out',
            once: true,
          });
        }, []);

  return (
    <div className="hero-container" >  
        <div className='hero__header'>
            <h1 className="hero__heading" data-aos="fade-up">Empower The World With Us</h1>   

            <Link to="service">
                <a href="">
                    <button className='btn btn--primary btn__start' data-aos="zoom-in">Get Started</button>
                </a>
            </Link>

        </div>
     </div>
  )
}

export default DefaultHero