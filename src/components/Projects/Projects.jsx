import React from 'react';
import { motion } from 'framer-motion';
import Projectsoverview from './Projects-overview/Projectoverview';
import { topToBottom, bottomToTop } from '../../utils/animations';
import './Projects.styles.scss';

export default function Projects() {
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
            <motion.span className="letters">Have a look at my work -</motion.span><br></br>
          </motion.h3>
          <motion.p
            className='para-text'
            variants={bottomToTop}
            initial={'initial'}
            animate={'animate'}
            exit={'initial'}
          >
            These are some personal projects I did, constantly exploring new technologies
            and needless to say this list also keeps growing :)
          </motion.p>
        </div>
      </motion.div>
      <div className='right-content'>
        <motion.div
        className='project-type-wrapper'>
        <motion.div
        variants={topToBottom}
        initial="initial"
        animate="animate"
        exit={'exit'} 
        className="project-type">
          <div className="buttons-container">
            <button className='button-1'>Mini</button>
            <button className='button-1'>Front end</button>
            <button className='button-1'>Full Stack</button>
          </div>
          <Projectsoverview />
        </motion.div>
        </motion.div>

      </div>
    </>
  )
}




/**
 *            
 * <div className="project-buttons-container">
  <button className="button-31" role="button">Beginner</button>
  <button className="button-31" role="button">Intermediate</button>
  <button className="button-31" role="button">Advanced</button>

</div>
 */