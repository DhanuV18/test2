import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../../assets/Logo2.png';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in',
      once: true,
    });
  }, []);

  return (
    <div>
      <nav className='navbar'>
        {/* Company Logo */}
        <img
          src={logo}
          alt="Company Logo"
          className='logo'
          data-aos="zoom-in"
          data-aos-delay='10'
        />

        {/* Navigation Links */}
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
          <li data-aos="zoom-in" data-aos-delay='30'>
            <Link to="/" className='navbar__list'>Home</Link>
          </li>
          <li data-aos="zoom-in" data-aos-delay='100'>
            <Link to="/service" className='navbar__list'>Services</Link>
          </li>
          <li data-aos="zoom-in" data-aos-delay='150'>
            <Link to="/about-us" className='navbar__list'>About Us</Link>
          </li>
          <li data-aos="zoom-in" data-aos-delay='200'>
            <Link to="/contact-us" className='navbar__list'>
              <button className="btn btn--primary">Get in Touch</button>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <img
          src={menu}
          alt="menu"
          className='menu'
          onClick={toggleMenu}
        />
      </nav>
    </div>
  );
};

export default Navbar;
