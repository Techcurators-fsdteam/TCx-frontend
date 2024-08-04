import React, { useState } from 'react';
import key from '../assets/key.svg'; // Ensure the path is correct
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ResetPassword } from '../api/axios';

function Confirmpass({email,setEmail,isPasswordModalOpen,setPasswordModalOpen,setDone}) {
  const [password, setPassword] = useState('');
  const [Loading,setLoading]=useState(false)
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  // Regex for strong password
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Handle password input change
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword === '') {
      setMessage('');
    } else if (!strongPasswordRegex.test(newPassword)) {
      setMessage('Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.');
    } else if (newPassword !== confirmPassword && confirmPassword !== '') {
      setMessage("Passwords don't match");
    } else {
      setMessage('');
    }
  };

  // Handle confirm password input change
  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    if (newConfirmPassword !== password) {
      setMessage("Passwords don't match");
    } else {
      setMessage('Passwords match');
    }
  };
  const handleSubmit=async()=>{
      setLoading(true)
      console.log('sending reset password')
      const res=await ResetPassword(email,confirmPassword)
      // console.log(res)
      if(res.status==200){
        setLoading(false);
        setPasswordModalOpen(false);
        setDone(true);
      }
  }

  // const handleSubmit

  return (
    <div className="flex justify-center items-center min-h-fit bg-black">
      <style>
        {`
          .glowing-border {
            box-shadow: 0 0 5px rgba(81, 203, 238, 1);
          }
        `}
      </style>
      <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto text-center space-y-4 px-4 py-8">
        <img src={key} alt="Key Icon" className="w-16 h-16" />
        <p className="text-white font-bold text-2xl md:text-3xl">Set new password</p>
        <p className='text-gray-500 font-medium text-lg'>
          We recommend using a password that you don't use anywhere else.
        </p>
        <div className="relative w-full">
          <label htmlFor="new-password" className="block text-white text-left w-fit mt-2">New Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="new-password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter new password"
            className="w-full px-4 py-3 rounded-xl bg-gray-700 text-sm text-white focus:outline-none placeholder-gray-500 glowing-border"
          />
          <button
            type="button"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
            onClick={togglePasswordVisibility}
            style={{ zIndex: 10 }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="relative w-full">
          <label htmlFor="confirm-password" className="block text-white text-left w-full mt-2">Confirm Password</label>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            id="confirm-password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Confirm your password"
            className="w-full px-4 py-3 rounded-xl bg-gray-700 text-sm text-white focus:outline-none placeholder-gray-500 glowing-border"
          />
          <button
            type="button"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
            onClick={toggleConfirmPasswordVisibility}
            style={{ zIndex: 10 }}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {message && (
          <p className={`text-sm ${message === 'Passwords match' ? 'text-green-500' : 'text-red-500'} mt-2`}>
            {message}
          </p>
        )}
        <button
          onClick={handleSubmit}
          className="w-full py-2 cursor-pointer px-0 bg-orange-600 text-white rounded-xl text-lg hover:bg-orange-500 focus:outline-none"
          disabled={password !== confirmPassword || password === '' || !strongPasswordRegex.test(password)}
        >
          Reset Password
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

export default Confirmpass;
