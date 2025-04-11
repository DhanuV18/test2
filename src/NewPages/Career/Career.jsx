import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './Career.css'

const Career = () => {
  return (
    <div>
        <Navbar/>
        <div className='container career'>
            <h1 data-aos="zoom-in">There are no vacancies now! Stay Tuned with us for job alerts! </h1>
        </div>
        <Footer/>
    </div>
  )
}

export default Career