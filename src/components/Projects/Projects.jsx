import React from 'react';
import { motion } from 'framer-motion';
import Projectsoverview from '../Projects-overview/Projectsoverview';
import { topToBottom, bottomToTop } from '../../utils/animations';
import './Projects.styles.scss';

export default function Projects() {
  return (
    <>
   
    <motion.div className='content'>  
    <div className="head-content">
   <motion.h3
    variants={bottomToTop}
    initial={'initial'}
    animate={'animate'}
    className="ml10">
      <motion.span className="letters">Have a look at my work -</motion.span><br></br>
    </motion.h3>
    <motion.p
    className='para-text'
    variants={bottomToTop}
    initial={'initial'}
    animate={'animate'}
    >
      These are some personal projects I did, constantly exploring new technologies
      and needless to say this list also keeps growing :)
    </motion.p>
   </div>
     </motion.div>
     <div className='right-content'>
      <div className="project-type">
        <div className="project-buttons-container">
        <button className="button-31" role="button">Beginner</button>
        <button className="button-31" role="button">Intermediate</button>
        <button className="button-31" role="button">Advanced</button>
        
        </div>
        <div className="project-overview">
          <Projectsoverview />
        </div>
      </div>
   
     </div>
     </>
  )
}
