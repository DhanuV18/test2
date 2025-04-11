import React from 'react'


import Cards from '../Cards/Cards'
import ContactForm from '../ContactForm/ContactForm'
import Testimonials from '../Testimonials/Testimonials'
import Founder from '../Founder/Founder'
import Mission from '../Mission/Mission'
import NewHero from '../NewHero/NewHero'

import DefaultHero from '../DefaultHero/DefaultHero'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
// import NavbarDefault from '../NavbarDefault/NavbarDefault'

const Home = () => {
  return (
    <div>

        <Navbar />     

        {/* <NavbarDefault /> */}


        <DefaultHero />
        {/* <NewHero   /> */}
        {/* <Hero /> */}
        <Cards />
        <Founder/>
        <Mission />
        {/* <Testimonials/> */}
        {/* <ContactForm /> */}
        <Footer />

    </div>
  )
} 

export default Home


