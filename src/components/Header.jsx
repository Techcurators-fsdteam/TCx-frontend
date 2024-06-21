{/*import React, { useState, useEffect } from "react";
import "../index.css";
import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../store/UserContext";

const Header = () => {
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate(); // Use useNavigate hook for navigation
  const [imageUrl, setImageUrl] = useState(
    "https://i.pinimg.com/236x/7a/2d/59/7a2d59b45f3221b020ed465f92e8d44e.jpg"
  );
  const { user } = useUser();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    const checkLoggedIn = () => {
      // Check if the token cookie exists
      const cookies = document.cookie.split(";").reduce((acc, cookie) => {
        const [name, value] = cookie.split("=").map((c) => c.trim());
        acc[name] = value;
        if(user){
        if (user.picture) {
          setImageUrl(user.picture);
        }}
        return acc;
      }, {});
      setLogged(!!cookies.token); // Set logged state based on token existence
    };

    checkLoggedIn();
  }, []);
  const handleProfile = () => {
    navigate('/profile');
  }

  const handleLogout = () => {
    // Delete the token cookie by setting its expiration date to a past date
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    console.log(document.cookie)
    setLogged(false); // Update logged state to false
    // navigate('/login'); // Redirect to login page after logout
  };

  return (
    <header className="flex px-10 md:flex-row items-center justify-between w-full mt-4 gap-2 mb-4">
      <div className="relative flex items-center justify-start  text-white font-poppins rounded-full w-[70%] md:w-[70%] h-10">
        <a href="/">
          <img
            src={logo}
            alt="logo"
            className="left-2 w-16 h-16 md:w-16 md:h-16 pl-2"
          />
        </a>
        
      </div>
      {logged ? (
        <>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center justify-center bg-[#1E1E1E] hover:border-[#D6FF3C] text-white font-poppins rounded-full w-12 h-12"
        >
          <img
            src={imageUrl}
            className="w-12 h-12 rounded-full cursor-pointer"
            alt=""
          />
        </button>
        {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-10">
          <div className="py-1">
            <Link
              to='/profile'
              className="w-full px-4 py-2 text-left text-sm hover:bg-gray-200 focus:outline-none"
            >
              Profile
            </Link>
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 text-left text-sm hover:bg-gray-200 focus:outline-none"
            >
              Logout
            </button>
          </div>
        </div>
      )}
        </>
      ) : (
        <Link
          to="/login"
          className="flex shrink-0 items-center justify-between bg-[#1E1E1E] hover:border-[#D6FF3C] text-white font-poppins rounded-full w-[20%] sm:w-[12%] md:w-[10%]  h-10"
        >
          <p className="text-sm mx-auto">Login</p>
        </Link>
      )}
    </header>
  );
};

export default Header;*/}
//tcx-frontend/src/components/Header.jsx
import React, { useState, useEffect } from "react";
import "../index.css";
import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../store/UserContext";

const Header = () => {
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate(); // Use useNavigate hook for navigation
  const [imageUrl, setImageUrl] = useState(
    "https://i.pinimg.com/236x/7a/2d/59/7a2d59b45f3221b020ed465f92e8d44e.jpg"
  );
  const { user } = useUser();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    const checkLoggedIn = () => {
      // Check if the token cookie exists
      const cookies = document.cookie.split(";").reduce((acc, cookie) => {
        const [name, value] = cookie.split("=").map((c) => c.trim());
        acc[name] = value;
        if(user){
        if (user.picture) {
          setImageUrl(user.picture);
        }}
        return acc;
      }, {});
      setLogged(!!cookies.token); // Set logged state based on token existence
    };

    checkLoggedIn();
  }, []);
  const handleProfile = () => {
    navigate('/profile');
  }

  const handleLogout = () => {
    // Delete the token cookie by setting its expiration date to a past date
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    console.log(document.cookie)
    setLogged(false); // Update logged state to false
    // navigate('/login'); // Redirect to login page after logout
  };

  return (
    <header className="flex md:flex-row items-center justify-center mt-4 gap-2 mb-4">
      <div className="relative flex items-center justify-center bg-[#1E1E1E] text-white font-poppins rounded-full w-[70%] md:w-[70%] h-10">
        <a href="/">
          <img
            src={logo}
            alt="logo"
            className="left-2 w-8 h-8 md:w-10 md:h-10 pl-2"
          />
        </a>
        <p className="text-sm  mx-auto">
          TCx <span className="text-[#D6FF3C]">.</span> Grow 100X
        </p>
      </div>
      {logged ? (
        <>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center justify-center bg-[#1E1E1E] hover:border-[#D6FF3C] text-white font-poppins rounded-full w-10 h-10"
        >
          <img
            src={imageUrl}
            className="w-6 h-6 rounded-full cursor-pointer"
            alt=""
          />
        </button>
        {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-10">
          <div className="py-1">
            <Link
              to='/profile'
              className="w-full px-4 py-2 text-left text-sm hover:bg-gray-200 focus:outline-none"
            >
              Profile
            </Link>
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 text-left text-sm hover:bg-gray-200 focus:outline-none"
            >
              Logout
            </button>
          </div>
        </div>
      )}
        </>
      ) : (
        <Link
          to="/login"
          className="flex shrink-0 items-center justify-between bg-[#1E1E1E] hover:border-[#D6FF3C] text-white font-poppins rounded-full w-[20%] sm:w-[12%] md:w-[10%]  h-10"
        >
          <p className="text-sm mx-auto">Login</p>
        </Link>
      )}
    </header>
  );
};

export default Header;
