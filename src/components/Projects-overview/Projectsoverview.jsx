import React from 'react'
import ProjectDetail from '../Project-detail/ProjectDetail';
import './Projectoverview.styles.scss';

function Projectsoverview() {
  return (
    <div className='project-desc-container'>
      <div className="project-desc-wrapper">
      <ProjectDetail />
      <ProjectDetail />
      <ProjectDetail />
      </div>
    </div>
  )
}

export default Projectsoverview