import React from 'react'
import { motion } from 'framer-motion';
import { bottomToTop, topToBottom } from '../../utils/animations';
import { skills } from './skillsData';

import './Skills.styles.scss';

export default function Skills() {
  return (
    <>
   
    <motion.div className='content'>  
    <div className="head-content">
    <motion.h3
     variants={bottomToTop}
     initial={'initial'}
     animate={'animate'}
     className="ml10">
       <motion.span className="letters">My Skills</motion.span><br></br>
     </motion.h3>
     
    </div>
     </motion.div>
     <div className='right-content'>

        <motion.span className='skills-container'>
          
          {
            skills.map(skill => <motion.img src={skill} alt='skill icon'/>)
          } 
        </motion.span>
     </div>
     </>
  )
}
