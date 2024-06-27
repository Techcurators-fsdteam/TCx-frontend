import React from 'react';
import logo from '../assets/logo.svg';
import e1 from '../assets/ldin.svg';
import e2 from '../assets/ig.svg';
import e3 from '../assets/mail.svg';
import e4 from '../assets/x.svg';

const Footer = () => {
  return (
    <>
    <div className='px-10 py-8 flex flex-col gap-7 bg-[#303030] text-white'>
      <div className='flex md:flex-row flex-col justify-between w-full gap-5 items-center'>
        <div className='flex flex-col gap-3 '>
          
          <p className='text-xl font-semibold'>Become an AI Prodigy</p>
          <p>TCx- Grow 100x , 2024.</p>
        </div>
        <a href="/"><img  src={logo} alt="" className='w-24' /></a>
        <div className='flex flex-col gap-5 text-right'>
          <div className='flex flex-row gap-6 justify-center items-center text-lg'>
            <p>Learn</p>
            <p>Blogs</p>
            <p>Blogs</p>
            <p>About</p>
          </div>
          <div className='flex flex-row gap-4 justify-center items-center'>
            <img src={e4} alt="" />
            <img src={e3} alt="" />
            <img src={e2} alt="" />
            <img src={e1} alt="" />
          </div>
        </div>
      </div>
    </div>
      <div className='bg-[#D6FF3C] text-black px-10 py-4 flex md:flex-row flex-col md:justify-between justify-center items-center'>
        <p>© 2024 TCx-Grow 100x . All rights reserved.</p>
        <div className='flex flex-row gap-5 text-right'>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
        </div>
      </div>
      </>
  )
}

export default Footer