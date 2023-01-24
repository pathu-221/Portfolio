import React from 'react'
import { motion } from 'framer-motion';

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
      <motion.span className="letters">I Would love to Talk to you :)</motion.span><br></br>
    </motion.h3>
    
   </div>
     </motion.div>
     <div className='right-content'>


     </div>
     </>
  )
}

export default Contact