import React from 'react'
import { motion } from 'framer-motion';
import './CustomInput.styles.scss';


function CustomInput(props) {
    const { type, placeholder, onChange, variants} = props;
  return (

        <motion.div variants={variants} class="webflow-style-input">
        {
            type === 'message'?
            <textarea className="" rows={'4'} type={ 'text' } placeholder={placeholder}/>
            :
            <input className="" type={ type } placeholder={placeholder}></input>
        }
        </motion.div>

  )
}

export default CustomInput