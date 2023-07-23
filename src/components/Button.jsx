import React from 'react';


const Button = ({ styles }) => {
  return (
    <button type='button' className={`font-poppins font-medium text-[18px] text-primary py-4 px-6 bg-blue-gradient outline-none rounded-[10px] ${styles}`}>
      Get Started
    </button>
  )
}

export default Button
