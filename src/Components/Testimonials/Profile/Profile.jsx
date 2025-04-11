import React from 'react'
import './Profile.css'
import vijay from '../../../assets/3.jpg'
import '../../../index.css'


export const Profile = () => {
  return (
    <div className='testimonials'>
        <img src={vijay} alt="testimonial_image" className='testimonial__image'/>
        <h3 className='testimonial__name'>Samantha</h3>
        <h4 className='testimonial__foundation'>Founder & President of Yahoo Inc.</h4>
        <q className='quote2'>Independens Consulants is an awesome company for software consulting and services. 
          Keep rocking!</q>
    </div>
  )
}
