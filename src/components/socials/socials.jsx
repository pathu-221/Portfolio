import React from 'react';

import './socials.styles.scss';

import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

export default function Socials() {
    const iconSize = 30;
  return (
    <nav className='socials-container'>
         <ul>
            <li>
                <a href='https://github.com/pathu-221' target={'_blank'}>
                    <BsGithub color='white' size={iconSize} />
                </a>
            </li>
            <li>
            <a href='https://www.linkedin.com/in/pratham-aggarwal-48516b120/' target={'_blank'}>
                    <BsLinkedin color='white' size={iconSize} />
                </a>
            </li>
            <li>
            <a href={'mailto:prathamaggarwal235@gmail.com'} target={'_blank'}>
                    <FiMail color='white' size={iconSize} />
                </a>
            </li>
         </ul>
    </nav>
  )
}
