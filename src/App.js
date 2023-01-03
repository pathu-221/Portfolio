import { useState, useEffect } from 'react';
import './App.css';

import SvgDraw from './components/svgDraw/svgDraw';
import Socials from './components/socials/socials';

function App() {

 //change elements when 420 1070  1710  1975

 const [heads, setHead] = useState(['HOME', 'ABOUT', 'SKILLS', 'PROJECT', 'CONTACT']);
 const [currentIndex, setIndex] = useState(0);

 const changeElement = (pathlength) => {
  console.log(pathlength);
 }


  return (
    <div className="App">
      <div className='background-div'></div>
      <Socials />
      <div className='svg-container'>
        <h1>{heads[currentIndex]}</h1>
      <SvgDraw changeElement = { changeElement } />
      </div>
    </div>
  );
}

export default App;
