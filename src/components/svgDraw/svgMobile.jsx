import React, { useEffect, useState} from 'react';
import anime from 'animejs'
import './svgMobile.styles.scss';

function SvgMobile(props) {
  const { changeElement } = props;  
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
      duration: 1500,
      autoplay: false,
      delay: function(el, i) { return i * 250 },
    });
   

    window.addEventListener('scroll', (e) => {

      
      //calclating scroll percentage
     scrollPercentage =  (window.scrollY + windowHeight) / totalHeight;
     setpath((pathLength) * scrollPercentage);
     changeElement(path);
    })
    animate.seek(path);

    }

  useEffect(() => {

    initiate();
    return () => {
      window.removeEventListener('scroll', () => { console.log('removed')});
    }

  },[path])


    return (
        <>
            <svg className='path-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 100">
                <g id="Layer_1" data-name="Layer 1">
                <line className="cls-1 st0" x1="55.05" y1="50" x2="445.05" y2="50"/>
                <line className="line-thin" x1="55.05" y1="50" x2="445.05" y2="50"/>
                    <path className="cls-2" d="M451.31,56.36c-9.27,7.12-19.85-3.45-12.72-12.72h0C447.86,
                    36.51,458.43,47.09,451.31,56.36Z"/>
                    <circle className="cls-3" cx="444.95" cy="50" r="5.7"/>
                    <path className="cls-2" d="M353.76,
                    56.36c-9.27,7.13-19.85-3.45-12.72-12.72,9.27-7.12,19.84,3.45,12.72,12.72Z"/>
                    <circle className="cls-3" cx="347.4" cy="50" r="5.7"/>
                    <path className="cls-2" d="M256.21,56.36c-9.27,7.13-19.85-3.45-12.72-12.72h0C252.76,
                    36.52,263.33,47.09,256.21,56.36Z"/>
                    <circle className="cls-3" cx="249.85" cy="50" r="5.7"/>
                    <path className="cls-2" d="M61.41,56.36c-9.27,7.12-19.84-3.45-12.72-12.72C58,36.51,
                    68.54,47.09,61.41,56.36Z"/>
                    <circle className="cls-3" cx="55.05" cy="50" r="5.7"/>
                    <path className="cls-2" d="M158.76,56.36c-9.27,7.13-19.85-3.45-12.72-12.72C155.31,
                    36.52,165.88,47.09,158.76,56.36Z"/>
                    <circle className="cls-3" cx="152.03" cy="50" r="5.7"/>
                </g>
            </svg>
        </>
    )
}

export default SvgMobile