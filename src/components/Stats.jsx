import React from 'react';
import { stats } from '../constants';
import styles from '../style';

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} md:flex-row flex-col flex-wrap sm:mb-10 mb-6`}>
      {stats.map((stat) => (
        <div key={stat.id} className='flex-1 flex justify-center items-center flex-row md:m-2 m-4'>
          <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>
            {stat.value}
          </h4>
          <p className='text-center font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  )
}

export default Stats
