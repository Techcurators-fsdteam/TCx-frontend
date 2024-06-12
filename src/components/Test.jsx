import React from 'react';
import Header from './Header';
export default function Test(props){
    return(
        <>
            <Header />
            <div className='flex justify-center w-full p-4'>
      <div className='w-full md:w-[80%] bg-white rounded-2xl p-6 relative'>
        <div className='absolute top-4 right-4'>
          <p className='text-black text-lg'>
            Time Left: <span className='text-[#FF7C1D]'>300 seconds</span>
          </p>
        </div>
        <p className='text-black mb-4'>
          <span className='text-xl font-semibold'>Question:</span> lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor?
        </p>
        <div className='border-2 border-gray-500 w-full h-10 mb-4'></div>
        <div className='border-2 border-gray-500 w-full h-10 mb-4'></div>
        <div className='border-2 border-gray-500 w-full h-10 mb-4'></div>
        <div className='border-2 border-gray-500 w-full h-10 mb-4'></div>
      </div>
    </div>
        </>
    )
}