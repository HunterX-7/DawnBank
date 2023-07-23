import React from 'react';
import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => {
  return (
    <section id='product' className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Effortlessly manage your 
          <br className='sm:block hidden' />
          billing and invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          Streamline your financial processes with our user-friendly billing and invoicing solutions. Take control of your finances with ease and efficiency.
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={google} alt="google-playstore" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
          <img src={apple} alt="apple-store" className='w-[128px] h-[42px] object-contain cursor-pointer' />
        </div>
      </div>
    </section>
  )
}

export default Billing
