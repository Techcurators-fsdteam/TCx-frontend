import React, { useState } from 'react';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const years = Array.from({ length: 51 }, (_, i) => new Date().getFullYear() - i); // Last 50 years

function WorkExperienceForm() {
  const [isCurrent, setIsCurrent] = useState(false);

  const handleCheckboxChange = () => {
    setIsCurrent(!isCurrent);
  };

  return (
    <div className='flex justify-center text-center px-4'>
      <div className='w-full md:w-[80%] lg:w-[60%] xl:w-[50%] bg-[#1F202A] mt-10 rounded-xl p-6'>
        <div className='w-full'>
          <div className='flex justify-between items-center mb-6'>
            <p className='text-lg sm:text-xl md:text-2xl font-extralight text-[#FF7C1D]'>
              Add Work Experience
            </p>
          </div>
          
          <form className='space-y-4'>
            {/* Company Name */}
            <div className='flex flex-col text-left'>
              <label className='text-white mb-2 text-xl' htmlFor='company'>Company</label>
              <input
                type='text'
                required
                id='company'
                className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D] placeholder:text-gray-700'
                placeholder='Enter company name'
              />
            </div>

            {/* Role */}
            <div className='flex flex-col text-left'>
              <label className='text-white mb-2 text-xl' htmlFor='role'>Role</label>
              <input
                type='text'
                required
                id='role'
                className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D] placeholder:text-gray-700'
                placeholder='Enter role'
              />
            </div>

            {/* Location */}
            <div className='flex flex-col text-left'>
              <label className='text-white mb-2 text-xl' htmlFor='location'>Location</label>
              <input
                type='text'
                required
                id='location'
                className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D] placeholder:text-gray-700'
                placeholder='Enter location'
              />
            </div>

            {/* Currently Working Here */}
            <div className='flex items-center text-left'>
              <input
                type='checkbox'
                id='current'
                className='mr-2 h-4 w-4 bg-[#121418] border-[#FF7C1D] checked:bg-[#FF7C1D] accent-[#FF7C1D]'
                checked={isCurrent}
                onChange={handleCheckboxChange}
              />
              <label className='text-white' htmlFor='current'>Currently working here?</label>
            </div>

            {/* Starting From */}
            <div className='flex flex-col md:flex-row md:items-center text-left space-y-2 md:space-y-0 md:space-x-4'>
              <label className='text-gray-500 mb-2 md:mb-0' htmlFor='start-date'>Starting From</label>
              <div className='flex space-x-4'>
                <select
                  id='start-month'
                  className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D]'
                >
                  {months.map((month, index) => (
                    <option key={index} value={month}>{month}</option>
                  ))}
                </select>
                <select
                  id='start-year'
                  className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D]'
                >
                  {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Ending On */}
            <div className={`flex flex-col md:flex-row md:items-center text-left space-y-2 md:space-y-0 md:space-x-4 ${isCurrent ? 'opacity-50' : ''}`}>
              <label className='text-gray-500 mb-2 md:mb-0' htmlFor='end-date'>Ending In</label>
              <div className='flex space-x-4'>
                <select
                  id='end-month'
                  className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D]'
                  disabled={isCurrent}
                >
                  {months.map((month, index) => (
                    <option key={index} value={month}>{month}</option>
                  ))}
                </select>
                <select
                  id='end-year'
                  className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D]'
                  disabled={isCurrent}
                >
                  {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Description */}
            <div className='flex flex-col text-left'>
              <label className='text-white mb-2 text-xl' htmlFor='description'>Description</label>
              <textarea
                id='description'
                rows='4'
                className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D] placeholder:text-gray-700'
                placeholder='Enter description of your role'
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className='flex justify-center mt-6'>
              <button
                type='submit'
                className='px-6 py-2 rounded-md bg-[#FF7C1D] text-white text-lg focus:outline-none hover:bg-[#FF6818] transition duration-200'
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default WorkExperienceForm
