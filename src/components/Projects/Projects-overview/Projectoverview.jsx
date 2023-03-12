import React from 'react'
import ProjectDetail from '../Project-Detail/ProjectDetail';
import { motion } from 'framer-motion';
import { staggeredUp } from '../../../utils/animations';
import './Projectoverview.styles.scss';


const animations = {
  
  hidden: { y: '100%'  },
  show: {
    y: 0,
    transition: {
      duration: 0.4, 
      delay: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96],
      staggerChildren: .1
    }
  },
  exit: { y: '100%'}
}

function Projectsoverview() {
  return (
    <motion.div 
    variants={staggeredUp}
    initial="hidden"
    animate="show"
    exit={'hidden'}
    className='project-overview'>
      <ProjectDetail />
      <ProjectDetail />
      <ProjectDetail />
      {/* <div className='project-detail'>
        <img src={'https://picsum.photos/600/300'} alt='project'/>
      </div>
      <div className='project-detail'>
        <img src={'https://picsum.photos/600/300'} alt='project'/>
      </div> */}
    </motion.div>
  )
}

export default Projectsoverview