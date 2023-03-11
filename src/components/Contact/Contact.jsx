import React from 'react'
import { motion } from 'framer-motion';
import CustomInput from '../customInput/CustomInput';
import { topToBottom, bottomToTop, staggeredRight } from '../../utils/animations';

import './Contact.styles.scss';



const item = {
  hidden: { x: '100%' },
  show: { x: '0',
  transition: {
    duration: .2,

  }
 },
  exit: { x: '100%'}
}

function Contact() {
  return (
    <>
   
    <motion.div className='content'>  
    <div className="head-content">
   <motion.h3
    variants={bottomToTop}
    initial={'initial'}
    animate={'animate'}
    exit={'initial'}
    className="ml10">
      <motion.span className="letters">Lets Connect! I would love to get in touch :)</motion.span><br></br>
    </motion.h3>
    <motion.p
    className='para-text'
    variants={bottomToTop}
    initial={'initial'}
    animate={'animate'}
    exit={'initial'}
    >
      
    </motion.p>
   </div>
     </motion.div>
     <div className='right-content'>
     <div className='form-wrapper'>
     <motion.form 
      variants={staggeredRight}
      initial="hidden"
      animate="show"
      exit={'hidden'}
      className='contact-form'>
        <CustomInput 
        variants={item}
        type='text'
        placeholder='Your good name'
        />
        <CustomInput 
        variants={item}
        type='email'
        placeholder='Whats your email?'
        />
        <CustomInput 
        variants={item}
        type='message'
        placeholder='Have something to talk about? Or just say Hi'
        />
        <motion.button variants={item} className="button-1" role="button">Send</motion.button>
      </motion.form>
     </div>
     </div>
     </>
  )
}

export default Contact

/**
 * 
 */