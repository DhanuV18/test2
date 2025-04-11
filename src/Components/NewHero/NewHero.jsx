import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './NewHero.css';

import LeftGate from '../../assets/gate-left.png';
import RightGate from '../../assets/gate-right.png';
import Grass from '../../assets/grass.png';
import RightTree from '../../assets/tree-left.png';
import LeftTree from '../../assets/tree-right.png';
import Moon from '../../assets/parallex/astro.png';

const NewHero = () => {
  const textRef = useRef(null);
  const treeLeftRef = useRef(null);
  const treeRightRef = useRef(null);
  const gateLeftRef = useRef(null);
  const gateRightRef = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {

    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (textRef.current) {
        textRef.current.style.transform = `translateY(${scrollPosition * -1.5}px)`;
      }
      if (treeLeftRef.current) {
        treeLeftRef.current.style.transform = `translateX(${-scrollPosition * 0.8}px)`;
      }
      if (treeRightRef.current) {
        treeRightRef.current.style.transform = `translateX(${scrollPosition * 0.8}px)`;
      }
      if (gateLeftRef.current) {
        gateLeftRef.current.style.transform = `translateX(${-scrollPosition * 2.1}px)`;
      }
      if (gateRightRef.current) {
        gateRightRef.current.style.transform = `translateX(${scrollPosition * 2.1}px)`;
      }

      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  return (
    <div className="app">
      <section className="hero">
        {/* Animated Text */}
        <h1 ref={textRef} id="text" className="hero-text">
          Welcome to Tech World
        </h1>

        {/* Parallax Trees */}
        <img
          ref={treeLeftRef}
          id="tree-left"
          className="tree-left"
          src={RightTree}
          alt="Tree Left"
          data-aos="fade-right"
        />
        <img
          ref={treeRightRef}
          id="tree-right"
          className="tree-right"
          src={LeftTree}
          alt="Tree Right"
          data-aos="fade-left"
        />

        {/* Animated Moon */}
        <img
          src={Moon}
          alt="moon"
          className={`moon ${isScrolled ? 'shrink' : ''}`}
          data-aos="zoom-in"
        />

        {/* Animated Gates */}
        {/* <img
          ref={gateLeftRef}
          id="gate-left"
          className="gate-left"
          src={LeftGate}
          alt="Gate Left"
          data-aos="fade-right"
        />
        <img
          ref={gateRightRef}
          id="gate-right"
          className="gate-right"
          src={RightGate}
          alt="Gate Right"
          data-aos="fade-left"
        /> */}

        {/* Grass Layer */}
        <img src={Grass} alt="grass" className="grass" data-aos="fade-up" />
      </section>
    </div>
  );
};

export default NewHero;
