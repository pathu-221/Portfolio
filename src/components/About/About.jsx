import React from 'react';
import { motion } from 'framer-motion';
import { bottomToTop, topToBottom } from '../../utils/animations';
import './About.styles.scss';

export default function About({ width }) {
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
      <motion.span className="letters">Let me tell you a little more about myself. </motion.span><br></br>
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
      <div className="about-text">
     {/* {
      width > 800 ?   : null
     } */}
     <motion.p
      variants={topToBottom}
      initial={'initial'}
      animate={'animate'}
      exit={'initial'}
      >
        <span className="large-letter">L</span> orem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor tortor gravida, 
        rutrum massa ultrices, tristique tellus. Ut ac enim elit. 
      </motion.p>
    <motion.p
    variants={bottomToTop}
    initial={'initial'}
    animate={'animate'}
    exit={'initial'}
    >
      t ac porttitor nisi, sed congue sem.
       Praesent porta posuere leo, ac sagittis lacus posuere ut. Vestibulum finibus 
      eros congue, sollicitudin lectus lobortis, tempus lectus. Duis id ultrices urna.
    </motion.p> 
      </div>
    </div>
    </>
  )
}
