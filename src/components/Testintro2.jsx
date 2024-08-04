import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Testintro2 = ({ onContinue, formData }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row p-4 ">
        <div className="flex flex-col w-full md:w-1/2 p-4">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-20 h-20 mb-4" />
          </Link>
          <div className="flex flex-grow flex-col justify-center items-start text-left w-full space-y-4">
            <p className="text-gray-400 text-2xl">Hey, <span className="text-orange-500">{formData.fullName}</span></p>
            <p className="text-white text-3xl md:text-5xl leading-tight">Welcome to the {formData.jobTitle} Test</p>
            <p className="text-gray-500 text-lg">Test Duration: 19 minutes</p>
            <p className="text-gray-500 text-lg">No. of Questions: 20</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start w-full md:w-1/2 bg-gray-900 p-4 md:pl-10 rounded-lg mt-4 md:mt-0">
          <p className="text-white mb-4 text-2xl md:text-5xl">Instructions:</p>
          <div className="text-gray-400 mb-6 space-y-2 text-left">
            <p>1. The test consists of 20 questions.</p>
            <p>2. The test duration is 19 minutes.</p>
            <p>3. The total weightage of test is 100 marks.</p>
            <p>4. Each question carries 5 marks.</p>
            <p>5. There is no negative marking.</p>
            <p>6. The test will auto submit after 19 minutes.</p>
            <p>7. The test can be attempted only once.</p>
            {/* <p>8. You cannot change the answer once you click next</p> */}
            <p>8. The test will start as soon as you click on the start test button.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 w-full justify-start">
            <button onClick={onContinue} className="bg-orange-500 text-white p-2 rounded w-full md:w-auto">
              Continue
            </button>
            {/* <button className="border-2 border-orange-500 text-white p-2 rounded w-full md:w-auto">
              Try sample test
            </button> */}
          </div>
          <div className='text-sm mt-10 text-red-600'>*If you try to switch the tab, or if you change your display or anyhow the visibility of your test tab is hampered, the test will be auto submitted.</div>
        </div>
      </div>
    </>
  );
};

export default Testintro2;
