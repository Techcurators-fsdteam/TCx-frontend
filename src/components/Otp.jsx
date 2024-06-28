import React, { useRef } from 'react';
import msg from '../assets/msg.svg';
import { Link } from 'react-router-dom';

function Otp() {
  const otpRefs = Array(6).fill(0).map(() => useRef(null));

  const handleOtpChange = (e, index) => {
    const { value } = e.target;

    if (!/^\d*$/.test(value)) {
      e.target.value = ''; 
      return;
    }

    if (value.length > 1) {
      e.target.value = value.slice(0, 1); 
    }

    if (index < 5 && value !== '') {
      otpRefs[index + 1].current.focus();
    }
  };


  const handleBackspace = (e, index) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      otpRefs[index - 1].current.focus(); 
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="flex flex-col items-center justify-center w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 text-center space-y-4 px-4 py-8">
        <img src={msg} alt="Message Icon" className="w-16 h-16" />
        <p className="text-white font-bold text-2xl md:text-3xl">Check your email</p>
        <p className="text-gray-500 font-medium text-lg">
          We have sent the OTP to your email address.
        </p>
        <label htmlFor="otp" className="block text-white w-full mt-2 text-left">OTP</label>
        <div className="flex space-x-2 justify-center">
          {Array(6).fill(0).map((_, index) => (
            <input
              key={index}
              type="text"
              inputMode="numeric" 
              maxLength="1"
              ref={otpRefs[index]}
              onChange={(e) => handleOtpChange(e, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              className="w-10 h-10 text-center rounded-md bg-gray-700 text-sm text-white focus:outline-none placeholder-gray-500 glowing-border"
            />
          ))}
        </div>
        <Link
        to="/Confirmpass"
          className="w-full py-2 px-4 bg-orange-600 text-white rounded-xl text-lg hover:bg-orange-500 focus:outline-none"
        >
          Reset Password
        </Link>
        <a href="#" className="text-gray-400 text-sm mt-2 hover:underline">
          Didn't receive the email? Resend
        </a>
        <button
          className="inline-flex items-center justify-center py-2 px-4 text-white rounded-full text-lg group mt-4"
        >
          <span className="mr-2 transition-transform duration-200 group-hover:-translate-x-1">&#x2190;</span> 
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default Otp;
