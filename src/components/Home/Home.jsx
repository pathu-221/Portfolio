import React from 'react'
import { motion } from 'framer-motion';
import { bottomToTop, topToBottom } from '../../utils/animations';

import './Home.styles.scss';

export default function Home({gif}) {


  return (
    <>
    <motion.div className='content'>  
   <div className="head-content">
   <motion.h3
    variants={bottomToTop}
    initial={'initial'}
    animate={'animate'}
    exit={'exit'}
    className="ml10">
      Hi there, I am Pratham, 
      A web developer from India
    </motion.h3>
    <motion.p
    className='para-text'
    variants={bottomToTop}
    initial={'initial'}
    animate={'animate'}
    exit={'initial'}
    >
      I'm passionate web developer creating awesome websites and web applications with clean, 
      optimized, and maintainable code.
    </motion.p>
   </div>
    </motion.div>
    <div className='right-content'>
      <motion.div
     
      className="image-container">
      <motion.img
       variants={topToBottom}
       initial={'initial'}
       animate={'animate'}
       exit={'exit'}
      src={ gif} />
      </motion.div>  
    </div>
    </>
  )
}


