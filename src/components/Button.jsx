import React from 'react'
import styles from '../style'

const Button = ({styles}) => 
   (
    <button type='button' className={`py-4 px-6 bg-blue-gradient text-primary text-[18px] font-poppins font-medium outline-none rounded-[10px] ${styles}`}>
        Get Started
    </button>
  )


export default Button