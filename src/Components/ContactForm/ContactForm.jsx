import React , {useEffect} from 'react'
import { useForm, ValidationError } from '@formspree/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ContactForm.css'

import instagram from '../../assets/insta.webp'
import linkedin  from '../../assets/linkedin.png'
import logo from '../../assets/Logo2.png'
import fb from  '../../assets/facebook.png'

function ContactForm() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

    const [state, handleSubmit] = useForm("https://formspree.io/f/mjkvbqwv");
   if (state.succeeded) {
       return <div className='feedback__message'>
                <h2 className="head-text feedback__text">
                        😊 Thanks for your feedback! 🎉
                </h2>
           </div>;
  }
    return (
      
        <div className='footers' id='contact'>
            <div className='contact__container contact '>
            <header>                
                    <h3 className="skills__head-text" data-aos="zoom-in">Contact</h3>            
                        <p className='contact__paragraph' data-aos="zoom-in">Feel free to contact me by submitting the form below
                        and I will get back to you as soon as possible.
                        </p>     
            </header>

           
                                            
                <div className='contact__form' data-aos="zoom-in">
    
                <form onSubmit={handleSubmit} className="">
 
                <input
                    id="name"
                    type="name"                    
                    name="username"
                    className="input input-text"
                    placeholder="Name"
                    required />
    
                <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors} />


                <input
                    id="email"
                    type="email" 
                    name="email"
                    className="input input-text"
                    placeholder="Email"
                    required />
      
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}/>
       
                <textarea
                    id="message"
                    name="message"
                    className="input-text textarea"
                    placeholder="Comments Here..."
                    cols="5"
                    rows="10"
                    required />
      
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors} />
                    
                <button className="btn btn--primary input-submit" type="submit" disabled={state.submitting}>Send Mail</button>
            </form>
        </div> 
        
            
            <div className='social__platform'>
             

            </div>  

   
            </div>

</div>



        
        
  )
}

export default ContactForm











      




   