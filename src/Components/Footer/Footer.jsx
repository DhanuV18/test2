import React, {useEffect}from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';
import '../../index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import logo from '../../assets/Logo.png'
import facebook from '../../assets/facebook.png'
import insta from '../../assets/insta.webp'
import linkedin from '../../assets/linkedin.png'


const Footer = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
      });
    }, []);

  return (
    <footer className="footer">
    <div className="footer-container">
      <div className='part1'>
          {/* <h2 className="footer__word">
            Discover the right solutions for your business
          </h2> */}
          <h2 className="sub__heading footer-head" data-aos="zoom-in" >Discover the right solutions <span className='technology'>for your business</span></h2>
      </div>
      
      
      <div className='part2'>
     
            <img src={logo} alt="Logo" className=" footer-logo" />


        <div className="footer-links">
          <ul>
            <li data-aos="fade-down"><Link to="/about-us">About Us</Link></li>
            <li data-aos="fade-down"><Link to="/service">Services</Link></li>
            <li data-aos="fade-down"><Link to="/career">Careers</Link></li>
            <li data-aos="fade-down"><Link to="/privacy-policy">Privacy Policy</Link></li>

          </ul>
        </div>
      </div>

    </div>
      <div className="footer-social">
        <div className='contact__icons'>
        <h4 className='now'>Contact Us Now</h4>
          <a href="https://www.linkedin.com/company/independents-consultant/?viewAsMember=true" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
            <img src={linkedin} alt="Linkedin" />
          </a>
          <a href="https://www.instagram.com/independents_consultant/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
            <img src={insta} alt="Instagram" />
          </a>
        </div>
     
      </div>
      {/* Divider */}
      <hr className="footer-divider" />

      {/* Copyright */}
      <div className="footer-copyright">
    
        <p>&copy; {new Date().getFullYear()} Independents Consultants. All Rights Reserved.</p>
      </div>
  </footer>
  )
}

export default Footer