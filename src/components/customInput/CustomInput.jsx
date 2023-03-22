import React from 'react'
import { motion } from 'framer-motion';
import './CustomInput.styles.scss';


function CustomInput(props) {
    const { type, placeholder, onChange, name, variants} = props;
    
  return (

        <motion.div variants={variants} className="webflow-style-input">
        {
            type === 'message'?
            <textarea className="" name={name}  onChange={onChange} rows={'4'} type={ 'text' } placeholder={placeholder}/>
            :
            <input className="" onChange={onChange} name={name} type={ type } placeholder={placeholder}></input>
        }
        </motion.div>

  )
}

export default CustomInput