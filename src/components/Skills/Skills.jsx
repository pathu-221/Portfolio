import React from 'react'
import { motion } from 'framer-motion';
import { bottomToTop, topToBottom } from '../../utils/animations';
import { skills } from './skillsData';

import './Skills.styles.scss';

export default function Skills({ width }) {

  


  return (
    <>
   
    <motion.div className='content'>  
    <div className="head-content">
    <motion.h3
     variants={bottomToTop}
     initial={'initial'}
     animate={'animate'}
     className="ml10">
       Here's what I use
     </motion.h3>
     
    </div>
     </motion.div>
     <div className='right-content'>

      <div className="skills-container">
        <div className="skills-content">
          <h4>Languages and framework </h4>
          <ul className="skills-images">
             {
            skills.map(skill => 
              <li><motion.img src={skill} alt='skill icon'/></li>)
          } 
          </ul>
        </div>
        <div className="skills-content">
          <h4>Tools </h4>
          <span className="skills-images">
             {
            skills.map(skill => <motion.img src={skill} alt='skill icon'/>)
          } 
          </span>
        </div>
      </div>

{/* 
        <motion.div className='skills-container'>
          
          {
            skills.map(skill => <motion.img src={skill} alt='skill icon'/>)
          } 
        </motion.div> */}
     </div>
     </>
  )
}
