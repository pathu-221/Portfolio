import { useState, useEffect } from 'react';
import './App.scss';
import gif from './assets/hero-illustration.png';
import SvgDraw from './components/svgDraw/svgDraw';
import Socials from './components/socials/socials';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { motion, AnimatePresence, m} from 'framer-motion';
import { bottomToTop } from './utils/animations';
import styled from 'styled-components';
import { Toaster } from 'react-hot-toast';
import { BsMouse, BsChevronDown, BsChevronUp } from 'react-icons/bs';

const Div = styled.div`
  background-color: ${ props => props.color};
  transition: .6s ease-out;
`
const DarkDiv = styled.div`
  background-color: ${ props => {  return props.color}};
  transition: .6s ease-out;

  @media screen and (max-width: 800px) {
    background-color: ${ props => props.svg ? 'transparent' : null};
  }
`

/**
 * 
 * @returns i dont know what to do
 * i am having trouble with responsiveness
 * this sucks
 */

// ⣿⣿⣿⣿⠿⢋⣩⣤⣴⣶⣶⣦⣙⣉⣉⣉⣉⣙⡛⢋⣥⣶⣶⣶⣶⣶⣬⡙⢿⣿
// ⣿⣿⠟⣡⣶⣿⢟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠙
// ⣿⢋⣼⣿⠟⣱⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⢿⣿⣿⣿⣿⣧
// ⠃⣾⣯⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⡈⢿⣿⣿⣿⣿
// ⢰⣶⣼⣿⣷⣿⣽⠿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡌⣿⣷⡀⠛⢿⣿⣿
// ⢃⣺⣿⣿⣿⢿⠏⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡾⣿⣿⣿⣷⢹⣿⣷⣄⠄⠈⠉
// ⡼⣻⣿⣷⣿⠏⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣞⣿⣿⣿⠸⣿⣿⣿⣿⣶⣤
// ⣇⣿⡿⣿⠏⣸⣎⣻⣟⣿⣿⣿⢿⣿⣿⣿⣿⠟⣩⣼⢆⠻⣿⡆⣿⣿⣿⣿⣿⣿
// ⢸⣿⡿⠋⠈⠉⠄⠉⠻⣽⣿⣿⣯⢿⣿⣿⡻⠋⠉⠄⠈⠑⠊⠃⣿⣿⣿⣿⣿⣿
// ⣿⣿⠄⠄⣰⠱⠿⠄⠄⢨⣿⣿⣿⣿⣿⣿⡆⢶⠷⠄⠄⢄⠄⠄⣿⣿⣿⣿⣿⣿
// ⣿⣿⠘⣤⣿⡀⣤⣤⣤⢸⣿⣿⣿⣿⣿⣿⡇⢠⣤⣤⡄⣸⣀⡆⣿⣿⣿⣿⣿⣿
// ⣿⣿⡀⣿⣿⣷⣌⣉⣡⣾⣿⣿⣿⣿⣿⣿⣿⣌⣛⣋⣴⣿⣿⢣⣿⣿⣿⣿⡟⣿
// ⢹⣿⢸⣿⣻⣶⣿⢿⣿⣿⣿⢿⣿⣿⣻⣿⣿⣿⡿⣿⣭⡿⠻⢸⣿⣿⣿⣿⡇⢹
// ⠈⣿⡆⠻⣿⣏⣿⣿⣿⣿⣿⡜⣭⣍⢻⣿⣿⣿⣿⣿⣛⣿⠃⣿⣿⣿⣿⡿⠄⣼
// ⣦⠘⣿⣄⠊⠛⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣼⣿⣿⣿⡿⠁⠄⠟


function App() {

  //change elements when 420 1070  1710  1975

  const [currentElement, changeCurrentElement] = useState('Home');
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    
    window.addEventListener('resize', (e) => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener('resize', () => { console.log('removed')});

    }
  }, [currentElement])
  

  const changeElement = (scrollPercentage) => {

    //.31 .47 .62 .98 threshold to change the element
    // element will change according to scroll percentage

    var p = Math.round(scrollPercentage * 100);
    if(p > 31 && p < 47){
      changeCurrentElement(() => 'About');
    }
    else if(p >= 47 && p < 62 ){
      changeCurrentElement(() => 'Skills');
    }
    else if(p >= 62 && p < 98) {
      changeCurrentElement(() => 'Projects');
    }
    else if(p >= 95){
      changeCurrentElement(() => 'Contact');
    }
    else {
      changeCurrentElement('Home');
    }

  }

  const element = () => {
    switch(currentElement){
      case "Home":
        return <><Home gif={gif} width={width} /></>
      case "About":
        return <><About width={width} /></>
      case "Skills":
        return <><Skills width={width} /></>
      case "Projects":
        return <><Projects width={width}/></>
      case "Contact":
        return <><Contact width={width}/></>
      default:
        return null;
    }
  }
  return (
    <>
    <Div 
    
    className="App" color={ `var(--primary-${currentElement})` }>
      <DarkDiv className='background-div'  color={`var(--primary-${currentElement}-dark)`}></DarkDiv>      <Socials />

      <DarkDiv className='svg-container' svg color={`var(--primary-${currentElement}-dark)`}>
        {
          width > 800 ? 
          (<AnimatePresence>
            <motion.div key={currentElement} className='page-head'>
              <motion.h1
                variants={bottomToTop}
                initial={'initial'}
                animate={'animate'}
                exit={'exit'}
              >{currentElement}</motion.h1>
            </motion.div>
          </AnimatePresence>) : null
        }
        <SvgDraw width={width} changeElement={changeElement} />
        </DarkDiv>
        {
          width < 800 ? 
          <AnimatePresence>
            <motion.div key={currentElement} className='page-head'>
              <motion.h1
                variants={bottomToTop}
                initial={'initial'}
                animate={'animate'}
                exit={'exit'}
              >{currentElement}</motion.h1>
            </motion.div>
          </AnimatePresence> : null
        }
      
      <AnimatePresence>
        <motion.div  key={currentElement} className='content-container'>

          <motion.div   className='content-wrapper'>
            { element() }
          </motion.div>

        </motion.div>
        </AnimatePresence>
      <Toaster />

    </Div>
    
      <div className="scroll-indicator">
        <span style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }} >
        { currentElement === 'Contact' ? <BsChevronUp className='arrow-infinite-up'  size={30} /> : null}
        {/* <BsMouse size={50}/> */}
        { currentElement !== 'Contact' ? <BsChevronDown className='arrow-infinite-down'  size={30} /> : null}
        </span>
        
      </div>
      </>
  );
}

/** 
 * <button onClick={() => window.scrollTo(0,0,{ behavior: 'smooth'})}>Scroll to top</button>
 */

export default App;
