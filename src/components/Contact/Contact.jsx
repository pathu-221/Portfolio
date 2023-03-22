import React, { useRef } from 'react'
import {  motion } from 'framer-motion';
import CustomInput from '../customInput/CustomInput';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

import { bottomToTop, staggeredRight, topToBottom } from '../../utils/animations';

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
  const form = useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    const promise = emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY);

    //console.log(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, import.meta.env.VITE_PUBLIC_KEY  );

    toast.promise(promise, {
      loading: 'Your message is on the way...',
      success: 'Hey, I recieved your message',
      error: 'Oops, there was some error, try other way of contacting'
    })
  }


  return (
    <>
   
    <motion.div className='content'>  
    <div className="head-content">
   <motion.h3
    variants={topToBottom}
    initial={'initial'}
    animate={'animate'}
    exit={'initial'}
    className="ml10">
      <motion.span className="letters">Lets Connect! I would love to get in touch </motion.span><br></br>
    </motion.h3>
    <motion.p
    className='para-text'
    variants={bottomToTop}
    initial={'initial'}
    animate={'animate'}
    exit={'initial'}
    >
     Feel free to message me
     <ul className='contact-list'>
        <li><a href={'mailto:prathamaggarwal235@gmail.com'}>Email</a></li>
        <li><a target={'_blank'} href='https://www.linkedin.com/in/pratham-aggarwal-48516b120'>Message on linkedIn</a></li>
      </ul>
    </motion.p>

   </div>

     </motion.div>
     <div className='right-content'>
     <div className='form-wrapper'>
     <motion.form 
     ref={form}
     onSubmit={onSubmit}
      variants={staggeredRight}
      initial="hidden"
      animate="show"
      exit={'hidden'}
      className='contact-form'>
        <CustomInput 
        variants={item}
        name='name'
        type='text'
        placeholder='Your good name'
        />
        <CustomInput 
        variants={item}
        name='email'
        type='email'
        placeholder='Whats your email?'
        />
        <CustomInput 
        variants={item}
        type='message'
        name='message'
        placeholder='Have something to talk about? Or just say Hi'
        />
        <motion.button variants={item} type='submit' className="button-1" role="button">Send</motion.button>
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