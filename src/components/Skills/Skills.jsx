import React from 'react'
import { motion } from 'framer-motion';
import { bottomToTop, topToBottom, staggeredUp } from '../../utils/animations';
import { skills } from './skillsData';

import './Skills.styles.scss';


const item = {
  hidden: { y: '100%' },
  show: { y: '0' },
  exit: { y: '100%'}
}

export default function Skills() {


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
       Here's what I use 
     </motion.h3>
     <motion.p
    className='para-text'
    variants={bottomToTop}
    initial={'initial'}
    animate={'animate'}
    exit={'initial'}
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nostrum culpa quae tempora. Enim explicabo quae eius iste fugiat, vitae i
    </motion.p>
    </div>
     </motion.div>
     <div className='right-content'>

      <motion.div  className="skills-container" >
        <motion.div
          className="skills-content">
          <h4>Languages and framework </h4>
          <motion.ul 
          variants={staggeredUp}
          initial="hidden"
          animate="show"
          exit={'hidden'}
          className="skills-images">
             {
            skills.map(skill => 
              <motion.li
             
              >
                <motion.img  variants={item} src={skill} alt='skill icon'/>
              </motion.li>)
          } 
          </motion.ul>
        </motion.div>
        <motion.div 
        variants={bottomToTop}
        className="skills-content">
          <motion.h4 
          variants={bottomToTop}
          initial={'initial'}
          animate={'animate'}
          exit={'initial'}>Tools </motion.h4>
          <motion.ul 
          variants={staggeredUp}
          initial="hidden"
          animate="show"
          exit={'hidden'}
          className="skills-images">
             {
            skills.map(skill => 
              <motion.li
             
              >
                <motion.img  variants={item} src={skill} alt='skill icon'/>
              </motion.li>)
          } 
          </motion.ul>
        </motion.div>
      </motion.div>

     </div>
     </>
  )
}
