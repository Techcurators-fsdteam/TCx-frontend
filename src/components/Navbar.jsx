import React from 'react';

function Navbar() {
    return (
        <div className='flex bg-[#2E231A] bg-opacity-75 rounded-full text-center justify-center font-poppins w-[70%] h-16 ' style={{ marginTop: '-1.5%' }}>
        <ul className='flex flex-grow justify-evenly items-center gap-3 px-3'>
            <li className='bg-[#1F1C1B] text-white rounded-full px-4 py-2 w-1/5 cursor-pointer transition ease-in-out duration-300 hover:border-2 border-transparent hover:border-[#D6FF3C]'>
            <Link to="/learn">Learn</Link></li>
            <li className='bg-[#1F1C1B] text-white rounded-full px-4 py-2 w-1/5 cursor-pointer transition ease-in-out duration-300 hover:border-2 border-transparent hover:border-[#D6FF3C]'>Certify</li>
            <li className='bg-[#1F1C1B] text-white rounded-full px-4 py-2 w-1/5 cursor-pointer transition ease-in-out duration-300 hover:border-2 border-transparent hover:border-[#D6FF3C]'>Blog</li>
            <li className='bg-[#1F1C1B] text-white rounded-full px-4 py-2 w-1/5 cursor-pointer transition ease-in-out duration-300 hover:border-2 border-transparent hover:border-[#D6FF3C]'>Research</li>
            <li className='bg-[#D6FF3C] text-black rounded-full px-4 py-2 w-1/5 cursor-pointer transition ease-in-out duration-300 hover:border-2 border-transparent hover:border-black'>Start Learning Today</li>
        </ul>
    </div>
    );
}

export default Navbar;
