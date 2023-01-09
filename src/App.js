import { useState } from 'react';
import './App.scss';

import SvgDraw from './components/svgDraw/svgDraw';
import Socials from './components/socials/socials';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import { motion, AnimatePresence, m} from 'framer-motion';
import { bottomToTop } from './utils/animations';
import styled from 'styled-components';

const Div = styled.div`
  background-color: ${ props => props.color};
  transition: .4s ease-out;
`
const DarkDiv = styled.div`
  background-color: ${ props => { console.log(props); return props.color}};
  transition: .4s ease-out;
`

function App() {

  //change elements when 420 1070  1710  1975

  const [currentElement, changeCurrentElement] = useState('Home');

  const changeElement = (pathlength) => {

    //component will change according to the length of the path not 
    //to the amount scrolled
    if (pathlength >= 455 && pathlength < 712)
      changeCurrentElement('About');
    else if (pathlength >= 712 && pathlength < 955)
      changeCurrentElement('Skills')
    else if (pathlength >= 955 && pathlength < 1385)
      changeCurrentElement('Projects');
    else if (pathlength >= 1385)
      changeCurrentElement('Contacts');
    else
      changeCurrentElement('Home')

  }

  const element = () => {
    switch(currentElement){
      case "Home":
        return <><Home /></>
      case "About":
        return <><About /></>
      case "Skills":
        return <><Skills /></>
      case "Projects":
        return <><Projects /></>
      default:
        return null;
    }
  }
  return (
    <Div className="App" color={ `var(--primary-${currentElement})` }>
      <DarkDiv className='background-div'  color={`var(--primary-${currentElement}-dark)`}></DarkDiv>      <Socials />

      <DarkDiv className='svg-container' color={`var(--primary-${currentElement}-dark)`}>
        <AnimatePresence>
          <motion.div key={currentElement} className='page-head'>
            <motion.h1
              variants={bottomToTop}
              initial={'initial'}
              animate={'animate'}
              exit={'exit'}
            >{currentElement}</motion.h1>
          </motion.div>
        </AnimatePresence>
        <SvgDraw changeElement={changeElement} />
      </DarkDiv>


      
      <div className='content-container'>
      <AnimatePresence>
        <motion.div key={currentElement} className='content-wrapper'>
         { element()}
        </motion.div>
        </AnimatePresence>
      </div>




    </Div>
  );
}

export default App;
