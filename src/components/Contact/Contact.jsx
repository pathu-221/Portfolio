import React from 'react'
import { motion } from 'framer-motion';
import CustomInput from '../customInput/CustomInput';
import { topToBottom, bottomToTop } from '../../utils/animations';

import './Contact.styles.scss';

function Contact() {
  return (
    <>
   
    <motion.div className='content'>  
    <div className="head-content">
   <motion.h3
    variants={bottomToTop}
    initial={'initial'}
    animate={'animate'}
    className="ml10">
      <motion.span className="letters">I Would love to Talk :)</motion.span><br></br>
    </motion.h3>
    <motion.p
    className='para-text'
    variants={bottomToTop}
    initial={'initial'}
    animate={'animate'}
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nostrum culpa quae tempora. Enim explicabo quae eius iste fugiat, vitae i
    </motion.p>
   </div>
     </motion.div>
     <div className='right-content'>
      <form className='contact-form'>
        <CustomInput 
        type='text'
        placeholder='Your good name'
        />
        <CustomInput 
        type='email'
        placeholder='Whats your email?'
        />
        <CustomInput 
        type='message'
        placeholder='Have something to talk about? Or just say Hi'
        />
        <button class="button-31" role="button">Send</button>

      </form>
     </div>
     </>
  )
}

export default Contact