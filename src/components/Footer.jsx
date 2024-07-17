import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import e1 from '../assets/ldin.svg';
import e2 from '../assets/ig.svg';
import e3 from '../assets/mail.svg';
import e4 from '../assets/x.svg';

const Footer = () => {
  return (
    <div className='flex flex-col items-center bg-gray-900 w-full p-6 text-gray-500 mt-20'>
      <div className='w-full sm:w-[90%]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          <div className='flex justify-center'>
            <ul className='text-center'>
              <li>
                <Link to="/Learn" className='text-gray-400 text-lg sm:text-base md:text-lg mb-2'>Learn</Link>
              </li>
            </ul>
          </div>
          <div className='flex justify-center'>
            <ul className='text-center'>
              <li>
                <Link to="/Certify" className='text-gray-400 text-lg sm:text-base md:text-lg mb-2'>Certify</Link>
              </li>
            </ul>
          </div>
          <div className='flex justify-center'>
            <ul className='text-center'>
              <li>
                <Link to="/" className='text-gray-400 text-lg sm:text-base md:text-lg mb-2'>Blog</Link>
              </li>
            </ul>
          </div>
          <div className='flex justify-center'>
            <ul className='text-center'>
              <li>
                <Link to="/" className='text-gray-400 text-lg sm:text-base md:text-lg mb-2'>Research</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className='my-6 border-gray-500' />
        <div className='flex flex-col sm:flex-row sm:justify-between items-center sm:items-start'>
          <div className='flex flex-col items-center sm:items-start'>
            <a href="/"><img src={logo} alt="Company Logo" className='w-24 mb-4' /></a>
            <div className='flex gap-4 mb-4'>
              <a href="#"><img src={e1} alt="LinkedIn" className='w-8 h-8' /></a>
              <a href="#"><img src={e2} alt="Instagram" className='w-8 h-8' /></a>
              <a href="#"><img src={e3} alt="Mail" className='w-8 h-8' /></a>
              <a href="#"><img src={e4} alt="Twitter" className='w-8 h-8' /></a>
            </div>
            <p className='text-center sm:text-left text-sm sm:text-lg mt-4'>© 2024 TCx-Grow 100x. All rights reserved.</p>
            <div className='flex flex-col md:flex-row gap-5 text-center sm:text-left mt-4 text-sm sm:text-lg'>
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
              <p>Cookies</p>
            </div>
          </div>
          <div className='flex flex-col items-center sm:items-start gap-4 mt-4 sm:mt-0'>
            <p className='text-center text-gray-400 text-sm sm:text-lg'>Stay updated with our latest news and offers:</p>
            <form className='flex flex-col items-center sm:flex-row gap-2'>
              <input type='text' placeholder='Enter your name' className='p-2 rounded bg-gray-800 text-white border border-gray-600 text-sm sm:text-lg focus:border-orange-500' />
              <input type='email' placeholder='Enter your email' className='p-2 rounded bg-gray-800 text-white border border-gray-600 text-sm sm:text-lg focus:border-orange-500' />
              <button type='submit' className='p-2 rounded bg-orange-500 text-white text-sm sm:text-lg'>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
