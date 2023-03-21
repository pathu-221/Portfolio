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
    Passionate Front-End Developer with a Keen Eye for Aesthetics and a Love for Innovation
    </motion.p>

   </div>
    </motion.div>
    <div className='right-content'>
      <div className="about-text">
     <div className="para-wrapper">
     <motion.p
      variants={topToBottom}
      initial={'initial'}
      animate={'animate'}
      exit={'initial'}
      >
        <span className="large-letter">I</span>'m a front-end developer 
        with a passion for creating engaging, user-friendly websites. 
        While design may not be my strongest suit, I have a keen eye for aesthetics and a 
        dedication to crafting beautiful, functional websites that truly make an impact. 
      </motion.p>
     </div>
      <div className="para-wrapper">
      <motion.p
      variants={bottomToTop}
      initial={'initial'}
      animate={'animate'}
      exit={'initial'}
      >
        I've always been fascinated by professional work 
        in the tech industry, from stunning artworks 
        to innovative solutions to complex problems and I strive to be on that same level of creativity,
        starting from here. <br></br>
        PS:I love working out, watching animes, read interesting articles and much more.

      </motion.p> 
      </div>
      </div>
    </div>
    </>
  )
}
