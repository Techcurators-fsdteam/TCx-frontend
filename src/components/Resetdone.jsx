import React from 'react'
import tick from '../assets/tick2.svg'
import { Link } from 'react-router-dom'

function Resetdone() {
  return (
    <>
        <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="flex flex-col items-center justify-center w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 text-center space-y-4 px-4 py-8">
        <img src={tick} alt="tick Icon" className="w-16 h-16" />
        <p className="text-white font-bold text-2xl md:text-3xl">Password reset</p>
        <p className='text-gray-500 font-medium text-lg'>
          Your password has been successfully reset.
        </p>
        
        <Link
        to="/Login"
        className="w-full py-2 px-4 bg-orange-600 text-white rounded-xl text-lg hover:bg-orange-500 focus:outline-none"
        >
          Continue
        </Link>
        <button
          className="inline-flex items-center justify-center py-2 px-4 text-white rounded-full text-lg group"
        >
          <span className="mr-2 transition-transform duration-200 group-hover:-translate-x-1">&#x2190;</span> {/* Unicode for left arrow */}
          Back to Login
        </button>
      </div>
    </div>
    </>
  )
}

export default Resetdone