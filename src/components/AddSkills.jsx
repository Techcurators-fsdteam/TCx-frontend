import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from '../store/UserContext';
import { URL } from '../api/url';

export default function AddSkill({ onClose }) {
  const [skill, setSkill] = useState('');
  const [error, setError] = useState(''); // State for error message
  const { user, fetchUserDetails } = useUser();
  const [loading, setLoading] = useState(false); // State for loading indicator

  const handleChange = (e) => {
    setSkill(e.target.value);
    setError(''); // Clear error message when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!skill.trim()) {
      setError('Skill cannot be empty');
      return;
    }

    if (user.skills && user.skills.includes(skill.trim())) {
      setError('Skill already exists');
      return;
    }

    const data = {
      username: user.username,
      skill: skill.trim(),
    };

    setLoading(true); // Start loading indicator

    try {
      const response = await axios.post(`${URL}/profile/skills`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        await fetchUserDetails();
        onClose();
        console.log('Skill added successfully');
      } else {
        setError('Failed to save skill');
      }
    } catch (error) {
      setError('Error posting skill');
      console.error('Error posting skill:', error);
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <div className='flex justify-center text-center px-16'>
      <div className='w-full md:w-[100%] lg:w-[100%] xl:w-[100%] bg-[#1F202A] rounded-xl p-6'>
        <div className='w-full'>
          <div className='flex justify-between items-center mb-6'>
            <p className='text-lg sm:text-xl md:text-2xl font-extralight text-[#FF7C1D]'>
              Add Skill
            </p>
          </div>

          <form className='space-y-4' onSubmit={handleSubmit}>
            {/* Skill Input */}
            <div className='flex flex-col text-left'>
              <label className='text-white mb-2' htmlFor='skill'>Skill</label>
              <input
                type='text'
                id='skill'
                value={skill}
                onChange={handleChange}
                className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D] placeholder:text-gray-700'
                placeholder='Enter a skill'
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className='text-red-500 text-sm'>
                {error}
              </div>
            )}

            {/* Submit Button */}
            <div className='flex justify-center mt-6'>
              <button
                type='submit'
                className='px-6 py-2 rounded-md bg-[#FF7C1D] text-white text-lg focus:outline-none hover:bg-[#FF6818] transition duration-200'
                disabled={loading} // Disable button while loading
              >
                {loading ? 'Saving...' : 'Save'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
