import React from 'react';
import logo from '../assets/logo.svg';
import e1 from '../assets/ldin.svg';
import e2 from '../assets/ig.svg';
import e3 from '../assets/mail.svg';
import e4 from '../assets/x.svg';

const Footer = () => {
  return (
    <div className='flex flex-col items-center bg-gray-900 w-full p-6  text-gray-500'>
      <div className='w-full sm:w-[90%]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          <ul className='text-center'>
            <li className='text-white text-lg mb-2'>Learn</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
          <ul className='text-center'>
            <li className='text-white text-lg mb-2'>Certify</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
          <ul className='text-center'>
            <li className='text-white text-lg mb-2'>Blog</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
          <ul className='text-center'>
            <li className='text-white text-lg mb-2'>Research</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
        </div>
        <hr className='my-6 border-gray-500' />
        <div className='flex flex-col items-center'>
          <a href="/"><img src={logo} alt="Company Logo" className='w-24 mb-4' /></a>
          <div className='flex gap-4 mb-4'>
            <a href="#"><img src={e1} alt="LinkedIn" className='w-8 h-8' /></a>
            <a href="#"><img src={e2} alt="Instagram" className='w-8 h-8' /></a>
            <a href="#"><img src={e3} alt="Mail" className='w-8 h-8' /></a>
            <a href="#"><img src={e4} alt="Twitter" className='w-8 h-8' /></a>
          </div>
          <p className='text-center text-sm mt-4'>© 2024 TCx-Grow 100x. All rights reserved.</p>
          <div className='flex flex-col md:flex-row gap-5 text-center mt-4'>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
