import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { useUser } from "../store/UserContext";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    { name: "Learn", route: "/learn" },
    { name: "Certify", route: "/certify" },
    { name: "Blog", route: "/editor" },  // Updated route for Blog
    { name: "Research", route: "/research" },
    // { name: 'Start Learning Today', route: '/start-learning' },
  ];

  const [hoveredTab, setHoveredTab] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logged, setLogged] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user } = useUser();

  const [imageUrl, setImageUrl] = useState(
    "https://i.pinimg.com/236x/7a/2d/59/7a2d59b45f3221b020ed465f92e8d44e.jpg"
  );

  useEffect(() => {
    const checkLoggedIn = () => {
      const cookies = document.cookie.split(";").reduce((acc, cookie) => {
        const [name, value] = cookie.split("=").map((c) => c.trim());
        acc[name] = value;
        if (user && user.picture) {
          setImageUrl(user.picture);
        }
        return acc;
      }, {});
      setLogged(!!cookies.token);
    };

    checkLoggedIn();
  }, [user]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setLogged(false);
    setDropdownOpen(false);
    navigate("/login");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-[100vw] flex items-center justify-between md:h-16 h-fit bg-black px-2 md:px-4 z-50 transition duration-300 ${
        isScrolled ? "bg-opacity-70 backdrop-blur-md" : ""
      }`}
    >
      <img
        src={logo}
        alt="logo"
        className="h-10 w-10 md:h-20 md:w-20 cursor-pointer"
        onClick={() => window.location.replace("/")}
      />

      {/* Hamburger Menu Icon for Mobile */}
      <div className="md:hidden text-orange-600 cursor-pointer">
        {isMenuOpen ? (
          <FaTimes size={24} onClick={toggleMenu} />
        ) : (
          <FaBars size={24} onClick={toggleMenu} />
        )}
      </div>

      {/* Navigation Links */}
      <ul
        className={`hidden md:flex-row font-light md:flex justify-center items-center flex-grow md:gap-16 gap-4 md:static absolute top-16 left-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0 transition-transform duration-300 md:transform-none transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full md:translate-y-0"
        }`}
      >
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`relative cursor-pointer transition ease-in-out duration-300 
                            ${
                              tab.name === "Start Learning Today"
                                ? "glare-effect bg-[#D6FF3C] text-black px-4 py-2 rounded-full"
                                : "hover:text-[#D6FF3C] text-white"
                            }
                            ${
                              location.pathname === tab.route
                                ? "text-[#D6FF3C] font-normal"
                                : ""
                            }
                        `}
            onMouseEnter={() => setHoveredTab(tab.name)}
            onMouseLeave={() => setHoveredTab(null)}
          >
            <Link
              to={tab.route}
              className={`${
                location.pathname === tab.route ? "rounded-full" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {tab.name}
            </Link>
            {["Blog", "Research", "Start Learning Today"].includes(
              tab.name
            ) && (
              <div
                className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 py-1 px-2 bg-black text-white text-xs rounded-md shadow-md transition-opacity duration-300 
                                ${
                                  hoveredTab === tab.name
                                    ? "opacity-100 pointer-events-auto"
                                    : "opacity-0 pointer-events-none"
                                }`}
              >
                Coming Soon
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* User Profile and Login Button */}
      {logged ? (
        <div className="hidden md:block relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center justify-center bg-[#1E1E1E] text-white font-poppins rounded-full w-10 h-10"
          >
            <img
              src={imageUrl}
              className="w-10 h-10 rounded-full cursor-pointer"
              alt="User Profile"
            />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-12 w-48 bg-black text-white rounded-lg shadow-xl z-10">
              <div className="py-1">
                <button
                  onClick={handleProfile}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-gray-700 focus:outline-none"
                >
                  Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-gray-700 focus:outline-none"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <Link
          to="/login"
          className="hidden md:block text-white px-4 py-2 rounded-full border-2 border-[#D6FF3C] hover:bg-[#D6FF3C] hover:text-black transition ease-in-out duration-300"
        >
          Login
        </Link>
      )}

      <div
        id="Hamburger Page"
        className={`flex flex-col mt-[104vh] md:hidden font-light  justify-start text-2xl flex-grow md:gap-16 gap-4 md:static fixed  overflow-hidden w-[100vw] md:w-auto bg-black md:bg-transparent p-4 md:p-0  transition-transform duration-300 md:transform-none h-[100vh] transform ${
          isMenuOpen ? "translate-x-[-2vw]" : "translate-x-[100vw]"
        }`}
      >
        <ul className={`flex flex-col ml-10 md:hidden  `}>
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`relative my-5 text-white cursor-pointer transition ease-in-out duration-300 
                            ${
                              tab.name === "Start Learning Today"
                                ? "glare-effect bg-[#D6FF3C] text-black px-4 py-2 rounded-full"
                                : "hover:text-[#D6FF3C] text-white"
                            }
                            ${
                              location.pathname === tab.route
                                ? "text-[#D6FF3C] font-normal"
                                : ""
                            }
                        `}
              onMouseEnter={() => setHoveredTab(tab.name)}
              onMouseLeave={() => setHoveredTab(null)}
            >
              <Link
                to={tab.route}
                className={`${
                  location.pathname === tab.route ? "rounded-full" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {tab.name}
              </Link>
              {["Blog", "Research", "Start Learning Today"].includes(
                tab.name
              ) && (
                <div
                  className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 py-1 px-2 bg-black text-white text-xs rounded-md shadow-md transition-opacity duration-300 
                                ${
                                  hoveredTab === tab.name
                                    ? "opacity-100 pointer-events-auto"
                                    : "opacity-0 pointer-events-none"
                                }`}
                >
                  Coming Soon
                </div>
              )}
            </li>
          ))}
        </ul>
        {logged ? (
          <>
            <button
              onClick={handleProfile}
              className=" self-center text-white px-16 py-2 w-fit rounded-full border-2 border-[#D6FF3C] hover:bg-[#D6FF3C] hover:text-black transition ease-in-out duration-300"
            >
              Profile
            </button>
            <button
              onClick={handleLogout}
              className=" self-center text-white px-16 py-2 w-fit rounded-full border-2 border-[#D6FF3C] hover:bg-[#D6FF3C] hover:text-black transition ease-in-out duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="self-center text-white px-16 py-2 w-fit rounded-full border-2 border-[#D6FF3C] hover:bg-[#D6FF3C] hover:text-black transition ease-in-out duration-300"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
