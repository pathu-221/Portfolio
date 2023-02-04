import React from 'react'
import './CustomInput.styles.scss';


function CustomInput(props) {
    const { type, placeholder, onChange} = props;
  return (

        <div class="webflow-style-input">
        {
            type === 'message'?
            <textarea class="" rows={'5'} type={ 'text' } placeholder={placeholder}/>
            :
            <input class="" type={ type } placeholder={placeholder}></input>
        }
        </div>

  )
}

export default CustomInput