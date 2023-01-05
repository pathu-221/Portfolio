import { useState } from 'react';
import './App.scss';

import SvgDraw from './components/svgDraw/svgDraw';
import Socials from './components/socials/socials';
import { motion, AnimatePresence } from 'framer-motion';
import { pageHeadAnimation } from './utils/animations';

function App() {

  //change elements when 420 1070  1710  1975

  const [currentElement, changeCurrentElement] = useState('Home');



  const changeElement = (pathlength) => {

    //component will change according to the length of the path not 
    //to the amount scrolled
    if (pathlength >= 455 && pathlength < 712)
      changeCurrentElement('About');
    else if (pathlength >= 712 && pathlength < 955)
      changeCurrentElement('skills')
    else if (pathlength >= 955 && pathlength < 1385)
      changeCurrentElement('Projects');
    else if (pathlength >= 1385)
      changeCurrentElement('Contact');
    else
      changeCurrentElement('Home')

  }


  return (
    <div className="App">
      <div className='background-div'></div>
      <Socials />


      <div className='svg-container'>
        <AnimatePresence custom={'wait'}>
          <motion.div className='page-head'>
            <motion.h1
              key={currentElement}
              variants={pageHeadAnimation}
              initial='initial'
              animate='animate'
              exit='exit'
            >{currentElement}</motion.h1>
          </motion.div>
        </AnimatePresence>
        <SvgDraw changeElement={changeElement} />
      </div>


    </div>
  );
}

export default App;
