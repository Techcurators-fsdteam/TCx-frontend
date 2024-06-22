import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import cert3 from '../assets/image container.svg'; 

function Certify3() {
  return (
    <>
      {/* Header and Navbar */}
      <Header/>
      <div className="flex items-center justify-center w-full mt-12">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex justify-center items-center w-full mt-20 px-4">
        <div className="flex flex-col md:flex-row w-full max-w-7xl text-white">
          
          {/* Text Section */}
          <div className="flex-1 flex flex-col justify-center md:items-start items-center text-center md:text-left mb-10 md:mb-0">
            <p className="text-orange-600 text-4xl mb-6 md:mb-10">
              Congratulations!
            </p>
            <p className="mb-6 text-xl md:mb-10">
              You have successfully passed the certification test.
            </p>
            <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg">
              Download Certificate
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center items-center">
            <img src={cert3} alt="Certification" className="w-full max-w-sm md:max-w-md lg:max-w-lg" />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Certify3;
