import React from 'react';

function Editlink() {
  return (
    <div className='flex justify-center text-center px-16'>
      <div className='w-full md:w-[100%] lg:w-[100%] xl:w-[100%] bg-[#1F202A] mt-10 rounded-xl p-6'>
        <div className='w-full'>
          <div className='flex justify-between items-center mb-6'>
            <p className='text-lg sm:text-xl md:text-2xl font-extralight text-[#FF7C1D]'>
              Links
            </p>
          </div>
          
          <form className='space-y-4'>
            {/* LinkedIn Profile */}
            <div className='flex flex-col text-left'>
              <label className='text-white mb-2' htmlFor='linkedin'>LinkedIn</label>
              <input
                type='url'
                required
                id='linkedin'
                className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D] placeholder:text-gray-700'
                placeholder='Enter LinkedIn Profile URL'
              />
            </div>

            {/* GitHub Profile */}
            <div className='flex flex-col text-left'>
              <label className='text-white mb-2' htmlFor='github'>GitHub </label>
              <input
                type='url'
                required
                id='github'
                className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D] placeholder:text-gray-700'
                placeholder='Enter GitHub Profile URL'
              />
            </div>

            {/* Portfolio Link */}
            <div className='flex flex-col text-left'>
              <label className='text-white mb-2' htmlFor='portfolio'>Portfolio</label>
              <input
                type='url'
                required
                id='portfolio'
                className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D] placeholder:text-gray-700'
                placeholder='Enter Portfolio URL'
              />
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

export default Editlink;
