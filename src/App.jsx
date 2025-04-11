import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Components/Home/Home'


import Cards from './Components/Cards/Cards'
import Founder from './Components/Founder/Founder'
import Mission from './Components/Mission/Mission'
import Testimonials from './Components/Testimonials/Testimonials'
import ContactForm from './Components/ContactForm/ContactForm'

import Service from './NewPages/Service/Service';
import AboutUs from './NewPages/AboutUs/AboutUs';
import Contact from './NewPages/ContactUs/Contact'
import Footer from './Components/Footer/Footer';
import Career from './NewPages/Career/Career';
import { Privacy } from './NewPages/Privacy/Privacy';


const App = () => {
  return (
      <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/privacy-policy" element={<Privacy />} />


      </Routes>
      {/* <Footer /> */}
    </Router>

  )
}

export default App