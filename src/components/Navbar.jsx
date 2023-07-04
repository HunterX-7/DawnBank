import React from 'react';
import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants'

const Navbar = () => {
  const [toogle, setToogle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="dawnbank" className='w-[124px] h-[32px]' />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1 gap-5'>
        {navLinks.map((nav) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toogle ? close : menu} 
            alt="menu" 
            className='w-[28px] h-[28px] object-contain' 
            onClick={() => setToogle((prev) => !prev)} 
          />
          <div 
            className={`${toogle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className='list-none flex flex-col justify-end items-center flex-1 gap-5'>
              {navLinks.map((nav) => (
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white`}>
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
