import React from 'react';
import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Discover the best card offers <br className='sm:block hidden' /> effortlessly with a simple process.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          Uncover the best card deals through our user-friendly steps, ensuring you find the ideal match for your financial needs.
        </p>
        <Button styles='mt-10' />
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={card} alt="card-deal" className='w-[100%] h-[100%]' />
      </div>
    </section>
  )
}

export default CardDeal
