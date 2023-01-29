import React from 'react';
import { motion } from 'framer-motion';
import { bottomToTop, topToBottom } from '../../utils/animations';
import './About.styles.scss';

export default function About({ width }) {
  console.log(width);
  return (
    <>
   
   <motion.div className='content'>  
   <div className="head-content">
   <motion.h3
    variants={bottomToTop}
    initial={'initial'}
    animate={'animate'}
    className="ml10">
      <motion.span className="letters">Who am I? And </motion.span><br></br>
      <motion.span>What I do?</motion.span>
    </motion.h3>
    {
      width > 800 ?
      null :
      <div className="about-text">
    <motion.p
    variants={topToBottom}
    initial={'initial'}
    animate={'animate'}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor tortor gravida, 
      rutrum massa ultrices, tristique tellus. Ut ac enim elit. 
    </motion.p>
    </div>
    }
   </div>
    </motion.div>
    <div className='right-content'>
      <div className="about-text">
     {
      width > 800 ?  <motion.p
      variants={topToBottom}
      initial={'initial'}
      animate={'animate'}
      >
        <span className="large-letter">L</span> orem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor tortor gravida, 
        rutrum massa ultrices, tristique tellus. Ut ac enim elit. 
      </motion.p> : null
     }
    <motion.p
    variants={bottomToTop}
    initial={'initial'}
    animate={'animate'}
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
