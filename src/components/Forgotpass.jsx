import React, { useState } from 'react';
import key from '../assets/key.svg';
import { Link } from 'react-router-dom';
import Otp from './Otp.jsx';
import { forgotPass } from '../api/axios.js';

function Forgotpass({email,setEmail,setEmailModalOpen,setOTPModalOpen}) {
  // const [email,setEmail]=useState('')
  const handleSubmit=async()=>{
    console.log(email)
    const res=await forgotPass(email);
    console.log(res)
    if(res.status===200){
      setEmailModalOpen(false)
      setOTPModalOpen(true)
      
    }
    else{
      console.log(res)
      alert("Invalid Email");
    }
  }
  return (
    <div className="flex justify-center items-center min-h-fit py-16 bg-black">
      <div className="flex flex-col items-center justify-center w-11/12 text-center space-y-4 px-0 py-0">
        <img src={key} alt="Key Icon" className="w-16 h-16" />
        <p className="text-white font-bold text-2xl md:text-3xl">Forgot Password?</p>
        <p className='text-gray-500 font-medium text-lg'>
          No worries, we'll send you the reset instructions.
        </p>
        <label htmlFor="email" className="block text-white text-left w-full mt-2">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-xl bg-gray-700 text-sm text-white focus:outline-none placeholder-gray-500 glowing-border"
        />
        <button 
        onClick={handleSubmit}
        className="w-full py-2 px-0 bg-orange-600 text-white rounded-xl text-lg hover:bg-orange-500 focus:outline-none"
        >
          Send OTP
        </button>
        <Link
            to="/Login"
            className="inline-flex items-center justify-center py-2 px-4 text-white rounded-full text-lg group"
          >
            <span className="mr-2 transition-transform duration-200 group-hover:-translate-x-1">
              &#x2190;
            </span>{" "}
            {/* Unicode for left arrow */}
            Back to Login
          </Link>
      </div>
    </div>
  );
}

export default Forgotpass;
