import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const tabs = [
        { name: 'Learn', route: '/learn' },
        { name: 'Certify', route: '/certify' },
        { name: 'Blog', route: '/blog' },
        { name: 'Research', route: '/research' },
        { name: 'Start Learning Today', route: '/start-learning' },
    ];

    const renderTooltip = (tabName) => {
        return (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 py-1 px-2 bg-black text-white text-xs rounded-md shadow-md opacity-0 pointer-events-none transition-opacity duration-300">
                Coming Soon: {tabName}
            </div>
        );
    };

    return (
        <div 
            className='flex rounded-full text-center justify-center font-poppins w-[70%] h-16'
            style={{ backgroundColor: 'rgba(46, 35, 26, 0.75)', marginTop: '-1.5%' }}
        >
            <ul className='flex flex-grow justify-evenly items-center gap-3 px-3 relative'>
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        className={`rounded-full px-4 py-2 w-1/5 cursor-pointer transition ease-in-out duration-300
                            ${location.pathname === tab.route ? 'bg-[#1F1C1B] text-white shadow-[0_0_10px_#B9B9B9]' : (tab.name === 'Start Learning Today' ? 'bg-[#D6FF3C] text-black' : 'bg-[#1F1C1B] text-white')}
                            hover:border-2 border-transparent hover:border-[#D6FF3C]
                        `}
                        onMouseEnter={() => console.log('Mouse enter')}
                        onMouseLeave={() => console.log('Mouse leave')}
                    >
                        <Link to={tab.route}>{tab.name}</Link>
                        {['Blog', 'Research', 'Start Learning Today'].includes(tab.name) && (
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 py-1 px-2 bg-black text-white text-xs rounded-md shadow-md opacity-0 pointer-events-none transition-opacity duration-300">
                                Coming Soon
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navbar;
