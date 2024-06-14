import React, { useState, useEffect } from 'react';
import '../index.css';
import logo from '../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  useEffect(() => {
    const checkLoggedIn = () => {
      // Check if the token cookie exists
      const cookies = document.cookie.split(';').reduce((acc, cookie) => {
        const [name, value] = cookie.split('=').map(c => c.trim());
        acc[name] = value;
        return acc;
      }, {});
      setLogged(!!cookies.token); // Set logged state based on token existence
    };

    checkLoggedIn();
  }, []);

  const handleLogout = () => {
    // Delete the token cookie by setting its expiration date to a past date
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setLogged(false); // Update logged state to false
    // navigate('/login'); // Redirect to login page after logout
  };

  return (
    <header className='flex md:flex-row items-center justify-center mt-4 gap-2 mb-4'>
      <div className='relative flex items-center justify-center bg-[#1E1E1E] text-white font-poppins rounded-full w-[70%] md:w-[70%] h-10'>
        <a href='/'>
          <img src={logo} alt='logo' className='left-2 w-8 h-8 md:w-10 md:h-10 pl-2' />
        </a>
        <p className='text-sm  mx-auto'>TCx <span className='text-[#D6FF3C]'>.</span> Grow 100X</p>
      </div>
      {logged ? (
        <button onClick={handleLogout} className='flex shrink-0 items-center justify-between bg-[#1E1E1E] hover:border-[#D6FF3C] text-white font-poppins rounded-full w-[20%] sm:w-[12%] md:w-[10%]  h-10'>
          <p className='text-sm mx-auto'>Logout</p>
        </button>
      ) : (
        <Link to='/login' className='flex shrink-0 items-center justify-between bg-[#1E1E1E] hover:border-[#D6FF3C] text-white font-poppins rounded-full w-[20%] sm:w-[12%] md:w-[10%]  h-10'>
          <p className='text-sm mx-auto'>Login</p>
        </Link>
      )}
    </header>
  );
}

export default Header;
