import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URL } from '../api/url';
import { useUser } from '../store/UserContext';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const years = Array.from({ length: 51 }, (_, i) => new Date().getFullYear() - i); // Last 50 years

function WorkExperienceForm({ workExp, onClose }) {
  const { user,fetchUserDetails } = useUser();
  const [expId, setExpId] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [location, setLocation] = useState('');
  const [startMonth, setStartMonth] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [endYear, setEndYear] = useState('');
  const [description, setDescription] = useState('');
  const [currentlyWorking, setCurrentlyWorking] = useState(false);

  useEffect(() => {
    if (workExp) {
      setExpId(workExp.expId || '');
      setCompany(workExp.company || '');
      setRole(workExp.role || '');
      setLocation(workExp.location || '');
      setStartMonth(workExp.startDate?.split(' ')[0] || '');
      setStartYear(workExp.startDate?.split(' ')[1] || '');
      setEndMonth(workExp.endDate?.split(' ')[0] || '');
      setEndYear(workExp.endDate?.split(' ')[1] || '');
      setDescription(workExp.description || '');
      setCurrentlyWorking(workExp.currentlyWorking || false);
    }
  }, [workExp]);

  const handleCheckboxChange = () => {
    setCurrentlyWorking(!currentlyWorking);
  };

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleStartMonthChange = (event) => {
    setStartMonth(event.target.value);
  };

  const handleStartYearChange = (event) => {
    setStartYear(event.target.value);
  };

  const handleEndMonthChange = (event) => {
    setEndMonth(event.target.value);
  };

  const handleEndYearChange = (event) => {
    setEndYear(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const workExperience = {
      expId: `${user.username} ${company} ${role}`, // Generate expId as per your requirement
      company,
      role,
      location,
      startDate: `${startMonth} ${startYear}`,
      endDate: currentlyWorking ? '' : `${endMonth} ${endYear}`,
      description,
      currentlyWorking,
    };

    const data = {
      username:user.username,
      workExp: workExperience,
    };

    try {
      const url = `${URL}/profile/workExp`;
      // const method = workExp ? 'PATCH' : 'POST';

      const response = await axios({
        method: "POST",
        url: url,
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      });

      if (response.status === 201 || response.status === 200) {
        console.log('Work experience data saved successfully');
        await fetchUserDetails();
        onClose();
      } else {
        console.error('Failed to save work experience data', response);
        // Handle error (e.g., show a notification, etc.)
      }
    } catch (error) {
      console.error('Error saving work experience:', error);
      // Handle error (e.g., show a notification, etc.)
    }
  };

  return (
    <div className='flex justify-center text-center w-full'>
      <div className='w-full md:w-[100%] lg:w-[100%] xl:w-[100%] bg-[#1F202A] rounded-xl p-6 '>
        <div className='w-full'>
          <div className='flex justify-between items-center mb-6'>
            <p className='text-lg sm:text-xl md:text-2xl font-extralight text-[#FF7C1D]'>
              {workExp ? 'Edit Work Experience' : 'Add Work Experience'}
            </p>
          </div>

          <form className='space-y-4' onSubmit={handleSubmit}>
            {/* Company */}
            <div className='flex flex-col text-left'>
              <label className='text-white mb-2 text-xl' htmlFor='company'>Company</label>
              <input
                type='text'
                id='company'
                className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D] placeholder:text-gray-700'
                value={company}
                onChange={handleCompanyChange}
                placeholder='Enter company name'
                required
              />
            </div>

            {/* Role */}
            <div className='flex flex-col text-left'>
              <label className='text-white mb-2 text-xl' htmlFor='role'>Role</label>
              <input
                type='text'
                id='role'
                className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D] placeholder:text-gray-700'
                value={role}
                onChange={handleRoleChange}
                placeholder='Enter role'
                required
              />
            </div>

            {/* Location */}
            <div className='flex flex-col text-left'>
              <label className='text-white mb-2 text-xl' htmlFor='location'>Location</label>
              <input
                type='text'
                id='location'
                className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D] placeholder:text-gray-700'
                value={location}
                onChange={handleLocationChange}
                placeholder='Enter location'
                required
              />
            </div>

            {/* Currently Working Here */}
            <div className='flex items-center text-left'>
              <input
                type='checkbox'
                id='currentlyWorking'
                className='mr-2 h-4 w-4 bg-[#121418] border-[#FF7C1D] checked:bg-[#FF7C1D] accent-[#FF7C1D]'
                checked={currentlyWorking}
                onChange={handleCheckboxChange}
              />
              <label className='text-white' htmlFor='currentlyWorking'>Currently working here?</label>
            </div>

            {/* Starting From */}
            <div className='flex flex-col md:flex-row md:items-center text-left space-y-2 md:space-y-0 md:space-x-4'>
              <label className='text-gray-500 mb-2 md:mb-0' htmlFor='start-date'>Starting From</label>
              <div className='flex space-x-4'>
                <select
                  id='start-month'
                  className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D]'
                  value={startMonth}
                  onChange={handleStartMonthChange}
                >
                  <option value=''>Month</option>
                  {months.map((month, index) => (
                    <option key={index} value={month}>{month}</option>
                  ))}
                </select>
                <select
                  id='start-year'
                  className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D]'
                  value={startYear}
                  onChange={handleStartYearChange}
                >
                  <option value=''>Year</option>
                  {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Ending On */}
            <div className={`flex flex-col md:flex-row md:items-center text-left space-y-2 md:space-y-0 md:space-x-4 ${currentlyWorking ? 'opacity-50' : ''}`}>
              <label className='text-gray-500 mb-2 md:mb-0' htmlFor='end-date'>Ending In</label>
              <div className='flex space-x-4'>
                <select
                  id='end-month'
                  className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D]'
                  value={endMonth}
                  onChange={handleEndMonthChange}
                  disabled={currentlyWorking}
                >
                  <option value=''>Month</option>
                  {months.map((month, index) => (
                    <option key={index} value={month}>{month}</option>
                  ))}
                </select>
                <select
                  id='end-year'
                  className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D]'
                  value={endYear}
                  onChange={handleEndYearChange}
                  disabled={currentlyWorking}
                >
                  <option value=''>Year</option>
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
                className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D] placeholder:text-gray-700'
                value={description}
                onChange={handleDescriptionChange}
                placeholder='Enter job description'
                rows={4}
                required
              />
            </div>

            {/* Submit Button */}
            <div className='flex justify-center'>
              <button
                type='submit'
                className='p-2 mt-4 w-[150px] rounded-md bg-[#FF7C1D] text-white text-lg font-semibold transition duration-300 hover:bg-opacity-80'
              >
                {workExp ? 'Save Changes' : 'Add Experience'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WorkExperienceForm;
