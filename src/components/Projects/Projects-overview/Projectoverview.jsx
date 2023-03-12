import React from 'react'
import ProjectDetail from '../Project-Detail/ProjectDetail';
import { motion } from 'framer-motion';
import { staggeredUp } from '../../../utils/animations';
import './Projectoverview.styles.scss';



function Projectsoverview({projects}) {

  console.log(projects);
  return (
    <motion.div 
    variants={staggeredUp}
    initial="hidden"
    animate="show"
    exit={'hidden'}
    className='project-overview'>
     
     {
      projects.map((project, index) => <ProjectDetail key={index} project={project} />)
     }
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