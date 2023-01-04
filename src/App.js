import { useState, useEffect } from 'react';
import './App.css';

import SvgDraw from './components/svgDraw/svgDraw';
import Socials from './components/socials/socials';

function App() {

 //change elements when 420 1070  1710  1975

 const [currentElement, changeCurrentElement] = useState('Home');
 const [currentIndex, setIndex] = useState(0);

 const changeElement = (pathlength) => {

  //component will change according to the length of the path not 
  //to the amount scrolled
  if(pathlength >= 455 &&  pathlength < 712)
  changeCurrentElement('About');
  else if( pathlength >= 712 &&  pathlength < 955)
  changeCurrentElement('skills')
  else if( pathlength >= 955 &&  pathlength < 1385)
  changeCurrentElement('Projects');
  else if( pathlength >= 1385)
  changeCurrentElement('Contact');
  else
  changeCurrentElement('Home')

 }


  return (
    <div className="App">
      <div className='background-div'></div>
      <Socials />
      <div className='svg-container'>
        <h1>{currentElement}</h1>
      <SvgDraw changeElement = { changeElement } />
      </div>
    </div>
  );
}

export default App;
