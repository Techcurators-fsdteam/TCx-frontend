import React, { useState,useRef } from 'react';
import { Link } from 'react-router-dom';
import hero from '../assets/hero.svg'
import logo from '../assets/logo.svg'
import astronaut from '../assets/astronaut.svg'
import roboastro from '../assets/roboastro.svg'
import billa from '../assets/billa.svg'
import bcha from '../assets/bcha.svg'
import uncle from '../assets/uncle.svg'
import AIskull from '../assets/AIskull.svg'
import { useEffect } from 'react';
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
import '../index.css'
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  const [tooltip, setTooltip] = useState({ visible: false, text: '', x: 0, y: 0 });

  const currentElementRef = useRef(null);

  const showTooltip = (event, text) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltip({
      visible: true,
      text,
      x: rect.left + rect.width / 2,
      y: rect.bottom + window.scrollY + 5 // Position just below the element
    });
    currentElementRef.current = event.currentTarget;
  };

  const hideTooltip = () => {
    setTooltip({ ...tooltip, visible: false });
    currentElementRef.current = null;
  };
    
  return (
    <>
    <Navbar/>
    
    <TypeAnimation
  sequence={[
    'Become an AI Prodigy',
    2000,                            
    '',                             
    1000,                           
  ]}
  wrapper="span"
  speed={20}
  style={{ fontSize: '5em', display: 'inline-block', color: 'white' }}
  repeat={Infinity}
/>

    {/*second section */}

    <div className='flex justify-center w-full mb-10'>
      <div className='flex flex-col lg:flex-row mt-6 gap-10 lg:gap-20 w-[90%] justify-center items-center text-center'>
        <img src={logo} alt='logo' className='w-40 h-40 md:w-48 md:h-48 lg:w-60 lg:h-60' />

        <p className='text-white text-4xl md:text-5xl lg:text-7xl text-center lg:text-right'>
          Transform your skills, <br />
          <span className='text-2xl md:text-3xl lg:text-5xl text-gray-500'>Transform your future</span>
        </p>
      </div>
    </div>

    {/*third section */}    
    <div className='flex justify-center w-full'>
      <div className='flex flex-col lg:flex-row w-[90%] max-w-screen-xl text-xl text-white'>
        <div className='flex-1 flex items-center justify-center p-4'>
          <p className='font-light text-center lg:text-left'>
            We believe the best learning happens when the content is directly related to the on-job real-world applications. There are skill-based and real-world resources to get you in the driving seat for implementing that concept.
          </p>
        </div>
        
        <div className='flex-1 flex items-center justify-center p-4'>
          <div className='flex justify-center'>
            <img src={astronaut} alt='astronaut' className='w-32 h-32 md:w-36 md:h-36 lg:w-1/2 lg:h-auto -rotate-[20deg]' />
            <img src={roboastro} alt='roboastro' className='w-32 h-32 md:w-36 md:h-36 lg:w-1/2 lg:h-auto' />
          </div>
        </div>
      </div>
    </div>

    {/*fourth section */}   
    <div className='flex justify-center w-full'>
      <div className='w-[90%] flex flex-wrap gap-4 justify-center mt-4 md:mt-8 lg:mt-[-1.5%]'>
        <img src={billa} alt='billa' className='w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover' />
        <img src={bcha} alt='bcha' className='w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover' />
        <img src={uncle} alt='uncle' className='w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover' />
      </div>
    </div>

    {/*fifth section */}    

    <div className='flex justify-center w-full mt-16'>
      <div className='text-white flex flex-col lg:flex-row w-[90%] px-4 md:px-8 lg:px-16 gap-4 lg:gap-0'>
        <p className='text-4xl sm:text-5xl md:text-6xl flex-1 text-center lg:text-left'>
          Why TCx?
        </p>
        
        <p className='flex-1 font-light text-lg sm:text-xl md:text-2xl lg:text-xl text-center lg:text-right'>
          World's First GenAI upskilling Platform to make you job ready.<br />
          Equip yourself with GenAI skills with our comprehensive resources curated by Top leading AI Experts.
        </p>
      </div>
    </div>

    {/*sixth section */}    
    <div className='flex flex-col items-center w-full mt-10 gap-10'>
      
      {/* First Row of Cards */}
      <div className='flex flex-wrap justify-center w-[90%] gap-6 lg:gap-10'>
        {/* Card 1 */}
        <div className='flex flex-1 flex-col justify-between items-end rounded-3xl bg-[#1E1E1E] text-white h-60 p-6 md:h-72 lg:h-80'>
          <div className='flex flex-col gap-6 md:gap-8 items-end'>
            <div className='flex justify-center items-center rounded-full w-40 h-14 md:w-48 md:h-16 bg-[#313131]'>
              <div className='rounded-full bg-[#D9D9D9] h-10 w-10 md:h-12 md:w-12'></div>
              <p className='ml-2 text-sm md:text-base'>AI Solutions</p>
            </div>
            <p className='text-4xl md:text-5xl text-right'>Tools</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className='flex flex-1 flex-col justify-between items-end rounded-3xl bg-[#1E1E1E] text-white h-60 p-6 md:h-72 lg:h-80'>
          <div className='flex flex-col gap-6 md:gap-8 items-end'>
            <div className='flex justify-center items-center rounded-full w-40 h-14 md:w-48 md:h-16 bg-[#313131]'>
              <div className='rounded-full bg-[#D9D9D9] h-10 w-10 md:h-12 md:w-12'></div>
              <p className='ml-2 text-sm md:text-base'>AI Consultation</p>
            </div>
            <p className='text-4xl md:text-5xl text-right'>Consultation</p>
          </div>
        </div>
      </div>
      
      {/* Second Row of Cards */}
      <div className='flex flex-wrap justify-center w-[90%] gap-6 lg:gap-10'>
        {/* Card 3 */}
        <div className='flex flex-1 flex-col justify-between items-end rounded-3xl bg-[#1E1E1E] text-white h-60 p-6 md:h-72 lg:h-80'>
          <div className='flex flex-col gap-6 md:gap-8 items-end'>
            <div className='flex justify-center items-center rounded-full w-40 h-14 md:w-48 md:h-16 bg-[#313131]'>
              <div className='rounded-full bg-[#D9D9D9] h-10 w-10 md:h-12 md:w-12'></div>
              <p className='ml-2 text-sm md:text-base'>AI Education</p>
            </div>
            <p className='text-4xl md:text-5xl text-right'>Education</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className='flex flex-1 flex-col justify-between items-end rounded-3xl bg-[#D6FF3C] h-60 p-6 md:h-72 lg:h-80 rotate-[20deg]'>
          <div className='flex flex-col gap-6 md:gap-8 items-end'>
            <div className='flex justify-center items-center rounded-full w-40 h-14 md:w-48 md:h-16 bg-[#313131]'>
              <div className='rounded-full bg-[#D9D9D9] h-10 w-10 md:h-12 md:w-12'></div>
              <p className='ml-2 text-sm md:text-base text-white'>AI Community</p>
            </div>
            <p className='text-4xl md:text-5xl text-right text-black'>Community</p>
          </div>
        </div>
      </div>

    </div>

    {/*seventh section */}

    <div className='flex justify-center w-full mt-28'>
      <div className='text-white flex flex-col lg:flex-row w-[90%] px-4 md:px-8 lg:px-16 gap-4 lg:gap-0'>
        <p className='text-4xl sm:text-5xl md:text-6xl flex-1 text-center lg:text-left'>
        Future-proof your career <span className='text-gray-500'> today </span>       
        </p>
        
        <p className='flex-1 font-light text-lg sm:text-xl md:text-2xl lg:text-xl text-center lg:text-right'>
        Don’t let the fear of layoffs hold you back. With TCx, you’ll be armed with the knowledge and skills to navigate and lead in the AI-driven world. Sign up now and take the first step towards an empowered, secure, and exciting future.
        </p>
      </div>
    </div>

    {/*eighth section */}

    <div  className='flex justify-center w-full'>
        <div className='w-[90%]'>
            <img src={AIskull} alt='AIskull' className='w-full' />
        </div>

    </div>
    
    {/*ninth section */}
    <Footer/>

    </>
  )
}

export default Hero