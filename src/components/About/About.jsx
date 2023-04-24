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
    variants={topToBottom}
    initial={'initial'}
    animate={'animate'}
    exit={'initial'}
    className="ml10">
      <motion.span className="letters">A little more about myself. </motion.span><br></br>
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
        <span className="large-letter">A</span>s a front-end developer, 
        I'm passionate about creating websites that provide
         a seamless user experience. I have a keen eye for aesthetics and a dedication to crafting websites that 
         are highly functional and make a real impact.


      </motion.p>
     </div>
      <div className="para-wrapper">
      <motion.p
      variants={bottomToTop}
      initial={'initial'}
      animate={'animate'}
      exit={'initial'}
      >
        The tech industry never ceases to fascinate me, 
        from groundbreaking solutions to complex problems to beautiful works of art.
        In my free time, you can usually find me working out or immersing myself 
        in the captivating world of anime. I also love to read interesting articles on a 
        variety of subjects, so feel free to recommend your favorites! And of course, Feel free
        to reach out and connect with me - 
        I'm always excited to meet new people

      </motion.p> 
      </div>
      </div>
    </div>
    </>
  )
}
