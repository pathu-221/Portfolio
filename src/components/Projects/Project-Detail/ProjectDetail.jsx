import React from 'react';
import './ProjectDetail.styles.scss';
import { BsGithub ,BsPlay } from 'react-icons/bs';
import { motion } from 'framer-motion';

const item = {
  hidden: { opacity: 0, x: '100%' },
  show: {  opacity: 1, x: '0' },
  exit: {  opacity: 0}
}


function ProjectDetail() {
  return (
      <motion.div variants={item} className="article-card">
    <div className="content">
      <p className="title">Project title</p>
      <p className="date">Project description Lorem ipsum dolor sit, amet consectetur a
      dipisicing elit. Provident expedita eum assumenda aperiams.</p>
      <span className='links'>
        <a><BsPlay size={15}/>Live</a>
        <a> <BsGithub size={15}/>Github</a> 
      </span>
    </div>
    <img
    src='https://images.unsplash.com/photo-1678595367575-b020f6ff28d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
     />
    {/* <img src="https://images.unsplash.com/photo-1678532684323-2ebb32c324a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="article-cover" /> */}
  </motion.div>
  )
}

export default ProjectDetail