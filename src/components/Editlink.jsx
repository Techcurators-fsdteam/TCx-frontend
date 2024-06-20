import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from '../store/UserContext';

function Editlink() {
  const [links, setLinks] = useState({
    linkedin: '',
    github: '',
    portfolio: ''
  });
  const {user}=useUser()

  const handleChange = (e) => {
    const { id, value } = e.target;
    setLinks(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const isValidUrl = (url) => {
    const urlPattern = new RegExp(
      '^(https?:\\/\\/)?' + // validate the scheme
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate the domain
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate the IP (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate the port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate the query string
      '(\\#[-a-z\\d_]*)?$', 'i' // validate the fragment locator
    );
    return !!urlPattern.test(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const linkArray = [];

    for (const [key, value] of Object.entries(links)) {
      if (value && isValidUrl(value)) {
        linkArray.push({ linkName: key, link: value });
      }
    }
    const data={
      username:user.username,
      links:linkArray

    }
    // console.log(linkArray)

    try {
      const response = await axios.post('http://localhost:5000/api/profile/links', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Handle success (e.g., show a notification, update state)
      console.log('Response:', response.data);
    } catch (error) {
      // Handle error (e.g., show a notification)
      console.error('Error posting links:', error);
    }
  };

  return (
    <div className='flex justify-center text-center px-16'>
      <div className='w-full md:w-[100%] lg:w-[100%] xl:w-[100%] bg-[#1F202A] mt-10 rounded-xl p-6'>
        <div className='w-full'>
          <div className='flex justify-between items-center mb-6'>
            <p className='text-lg sm:text-xl md:text-2xl font-extralight text-[#FF7C1D]'>
              Links
            </p>
          </div>

          <form className='space-y-4' onSubmit={handleSubmit}>
            {/* LinkedIn Profile */}
            <div className='flex flex-col text-left'>
              <label className='text-white mb-2' htmlFor='linkedin'>LinkedIn</label>
              <input
                type='url'
                
                id='linkedin'
                value={links.linkedin}
                onChange={handleChange}
                className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D] placeholder:text-gray-700'
                placeholder='Enter LinkedIn Profile URL'
              />
            </div>

            {/* GitHub Profile */}
            <div className='flex flex-col text-left'>
              <label className='text-white mb-2' htmlFor='github'>GitHub </label>
              <input
                type='url'
                
                id='github'
                value={links.github}
                onChange={handleChange}
                className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D] placeholder:text-gray-700'
                placeholder='Enter GitHub Profile URL'
              />
            </div>

            {/* Portfolio Link */}
            <div className='flex flex-col text-left'>
              <label className='text-white mb-2' htmlFor='portfolio'>Portfolio</label>
              <input
                type='url'
                
                id='portfolio'
                value={links.portfolio}
                onChange={handleChange}
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
  );
}

export default Editlink;
