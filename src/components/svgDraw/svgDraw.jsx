import React from 'react'
import { useState, useEffect } from 'react';
import anime from 'animejs';
import SvgMobile from './svgMobile';

import './svgDraw.styles.scss';

function SvgDraw(props) {

  const { changeElement, width } = props;  
  //to calculate path length based on the percentage of window scrolled
    const pathLength = 1500;
    let scrollPercentage =  0;
    const windowHeight = window.innerHeight;
    const totalHeight = windowHeight * 5;
  
    const [path, setpath] = useState(( (window.scrollY + windowHeight) / totalHeight) * pathLength);


    const initiate = () => {
      
    var animate = anime({
      targets: '.st0',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: pathLength,
      autoplay: false,
      delay: function(el, i) { return i * 250 },
    });
   


    window.addEventListener('scroll', (e) => {

      
      //calclating scroll percentage
     scrollPercentage =  (window.scrollY + windowHeight) / totalHeight;
     setpath((pathLength) * scrollPercentage);
     changeElement(scrollPercentage);
    })


    animate.seek(path);

    }

  useEffect(() => {

    initiate();
    return () => {
      window.removeEventListener('scroll', () => { console.log('removed')});
    }

  },[path, width])

  return (
    <>
    {
      width > 800 ? 
       <svg className='path-svg' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
    <g >
      <path className="st0" d="M76.66,93.23C103.75,66.5,140.96,50,182.02,50c82.84,0,150,67.16,150,150s-67.16,150-150,150"/>
      <path className="st5" d="M76.66,93.23C103.75,66.5,140.96,50,182.02,50c82.84,0,150,67.16,150,150s-67.16,150-150,150"/>
    <g>
		<path className="st1" d="M321.15,266.46c-4.8,0-8.7-3.9-8.7-8.7s3.9-8.7,8.7-8.7s8.7,3.9,8.7,8.7S325.94,266.46,321.15,266.46z"/>
		<circle className="st2" cx="321.15" cy="257.76" r="5.7"/>
	</g>
	<g> 
		<path className="st1" d="M182.02,358.04c-4.8,0-8.7-3.9-8.7-8.7s3.9-8.7,8.7-8.7c4.8,0,8.7,3.9,8.7,8.7S186.82,358.04,182.02,358.04z"
			/>
		<circle className="st2" cx="182.02" cy="349.34" r="5.7"/>
	</g>
	<g>
		<path className="st1" d="M311.94,132.76c-4.8,0-8.7-3.9-8.7-8.7s3.9-8.7,8.7-8.7s8.7,3.9,8.7,8.7S316.74,132.76,311.94,132.76z"/>
		<circle className="st2" cx="311.94" cy="124.06" r="5.7"/>
	</g>
	<g>
		<path className="st1" d="M76.68,101.94c-4.8,0-8.7-3.9-8.7-8.7c0-4.8,3.9-8.7,8.7-8.7s8.7,3.9,8.7,8.7
			C85.37,98.03,81.47,101.94,76.68,101.94z"/>
		<circle className="st2" cx="76.68" cy="93.24" r="5.7"/>
	</g>
	<g>
		<path className="st1" d="M199.74,59.35c-4.8,0-8.7-3.9-8.7-8.7s3.9-8.7,8.7-8.7c4.8,0,8.7,3.9,8.7,8.7S204.53,59.35,199.74,59.35z"/>
		<circle className="st2" cx="199.74" cy="50.66" r="5.7"/>
	</g>
</g></svg>
    :    
  <SvgMobile initiate={initiate} changeElement={changeElement} />
    }
   
    </>
  )
}

export default SvgDraw;