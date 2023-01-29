import React from 'react'
import ProjectDetail from '../Project-detail/ProjectDetail';
import './Projectoverview.styles.scss';

function Projectsoverview() {
  return (
    <div className='project-desc-container'>
      <ProjectDetail />
      <ProjectDetail />
      <ProjectDetail />
    </div>
  )
}

export default Projectsoverview