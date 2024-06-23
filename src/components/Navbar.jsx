import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const location = useLocation();
    const tabs = [
        { name: 'Learn', route: '/learn' },
        { name: 'Certify', route: '/certify' },
        { name: 'Blog', route: '/blog' },
        { name: 'Research', route: '/research' },
        { name: 'Start Learning Today', route: '/start-learning' },
    ];

    const [hoveredTab, setHoveredTab] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={` top-0 left-0 w-full flex items-center justify-between h-16 bg-black px-4 z-50 transition duration-300 ${isScrolled ? 'bg-opacity-70 backdrop-blur-md ' : ''}`}>
            <img 
                src={logo} 
                alt='logo' 
                className='h-16 w-16 cursor-pointer' 
                onClick={() => window.location.replace('/')} 
            />

            <div className='md:hidden text-neon-cyan cursor-pointer'>
                {isMenuOpen ? <FaTimes size={24} onClick={toggleMenu} /> : <FaBars size={24} onClick={toggleMenu} />}
            </div>

            <ul className={`flex-col md:flex-row font-light flex justify-center items-center flex-grow md:gap-16 gap-4 md:static absolute top-16 left-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0 transition-transform duration-300 md:transform-none transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full md:translate-y-0'}`}>
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        className={`relative cursor-pointer transition ease-in-out duration-300 
                            ${tab.name === 'Start Learning Today' ? 'glare-effect bg-[#D6FF3C] text-black px-4 py-2 rounded-full' : 'hover:text-[#D6FF3C] text-white'}
                            ${location.pathname === tab.route ? 'text-[#D6FF3C] font-normal' : ''}
                        `}
                        onMouseEnter={() => setHoveredTab(tab.name)}
                        onMouseLeave={() => setHoveredTab(null)}
                    >
                        <Link 
                            to={tab.route}
                            className={`${location.pathname === tab.route ? 'rounded-full' : ''}`}
                        >
                            {tab.name}
                        </Link>
                        {['Blog', 'Research', 'Start Learning Today'].includes(tab.name) && (
                            <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 py-1 px-2 bg-black text-white text-xs rounded-md shadow-md transition-opacity duration-300 
                                ${hoveredTab === tab.name ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                            >
                                Coming Soon
                            </div>
                        )}
                    </li>
                ))}
            </ul>

            <Link 
                to='/Login' 
                className='hidden md:block text-white px-4 py-2 rounded-full border-2 border-[#D6FF3C] hover:bg-[#D6FF3C] hover:text-black transition ease-in-out duration-300'
            >
                Login
            </Link>
        </nav>
    );
}

export default Navbar;
