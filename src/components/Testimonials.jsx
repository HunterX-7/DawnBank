import React from 'react';
import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'/>
      <div className='w-full justify-between items-center flex md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={`${styles.heading2}`}>
          Hear what our customers 
          <br className='sm:block hidden'/> 
          have to say about us.
        </h2>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Hear from happy clients. Customer testimonials showcasing their positive experiences and satisfaction with our services.
          </p>
        </div>
      </div>
      <div className='flex flex-wrap justify-center w-full feedback-container relative z-[1]'>
        {feedback.map((feed) => (
          <FeedbackCard key={feed.id} {...feed} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials
