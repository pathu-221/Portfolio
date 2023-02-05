import React from 'react'
import './CustomInput.styles.scss';


function CustomInput(props) {
    const { type, placeholder, onChange} = props;
  return (

        <div class="webflow-style-input">
        {
            type === 'message'?
            <textarea className="" rows={'4'} type={ 'text' } placeholder={placeholder}/>
            :
            <input className="" type={ type } placeholder={placeholder}></input>
        }
        </div>

  )
}

export default CustomInput