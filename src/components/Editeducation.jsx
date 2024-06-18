import React, { useState } from 'react';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const years = Array.from({ length: 51 }, (_, i) => new Date().getFullYear() - i); // Last 50 years

function Editeducation({ edu }) {
  const [eduId, setEduId] = useState(edu?.eduId || '');
  const [institution, setInstitution] = useState(edu?.institution || '');
  const [degree, setDegree] = useState(edu?.degree || '');
  const [course, setCourse] = useState(edu?.course || '');
  const [startMonth, setStartMonth] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [endYear, setEndYear] = useState('');
  const [grade, setGrade] = useState(edu?.grade || '');
  const [currentlyStudying, setCurrentlyStudying] = useState(edu?.currentlyStudying || false);

  const handleCheckboxChange = () => {
    setCurrentlyStudying(!currentlyStudying);
  };

  const handleInstitutionChange = (event) => {
    setInstitution(event.target.value);
  };

  const handleDegreeChange = (event) => {
    setDegree(event.target.value);
  };

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
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

  const handleGradeChange = (event) => {
    setGrade(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const educationData = {
      eduId,
      institution,
      degree,
      course,
      startDate: `${startMonth} ${startYear}`,
      endDate: currentlyStudying ? '' : `${endMonth} ${endYear}`,
      grade,
      currentlyStudying,
    };
    console.log('Education Data:', educationData);
  };

  return (
    <div className='flex justify-center text-center px-4'>
      <div className='w-full md:w-[80%] lg:w-[60%] xl:w-[50%] bg-[#1F202A] mt-10 rounded-xl p-6'>
        <div className='w-full'>
          <div className='flex justify-between items-center mb-6'>
            <p className='text-lg sm:text-xl md:text-2xl font-extralight text-[#FF7C1D]'>
              Add Education
            </p>
          </div>
          
          <form className='space-y-4' onSubmit={handleSubmit}>
            {/* Institution */}
            <div className='flex flex-col text-left'>
              <label className='text-white mb-2 text-xl' htmlFor='institution'>Institution</label>
              <input
                type='text'
                id='institution'
                className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D] placeholder:text-gray-700'
                value={institution}
                onChange={handleInstitutionChange}
                placeholder='Enter institution name'
                required
              />
            </div>

            {/* Degree */}
            <div className='flex flex-col text-left'>
              <label className='text-white mb-2 text-xl' htmlFor='degree'>Degree</label>
              <input
                type='text'
                id='degree'
                className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D] placeholder:text-gray-700'
                value={degree}
                onChange={handleDegreeChange}
                placeholder='Enter degree'
                required
              />
            </div>

            {/* Course */}
            <div className='flex flex-col text-left'>
              <label className='text-white mb-2 text-xl' htmlFor='course'>Course</label>
              <input
                type='text'
                id='course'
                className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D] placeholder:text-gray-700'
                value={course}
                onChange={handleCourseChange}
                placeholder='Enter course'
                required
              />
            </div>

            {/* Currently Studying Here */}
            <div className='flex items-center text-left'>
              <input
                type='checkbox'
                id='currentlyStudying'
                className='mr-2 h-4 w-4 bg-[#121418] border-[#FF7C1D] checked:bg-[#FF7C1D] accent-[#FF7C1D]'
                checked={currentlyStudying}
                onChange={handleCheckboxChange}
              />
              <label className='text-white' htmlFor='currentlyStudying'>Currently studying here?</label>
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
            <div className={`flex flex-col md:flex-row md:items-center text-left space-y-2 md:space-y-0 md:space-x-4 ${currentlyStudying ? 'opacity-50' : ''}`}>
              <label className='text-gray-500 mb-2 md:mb-0' htmlFor='end-date'>Ending In</label>
              <div className='flex space-x-4'>
                <select
                  id='end-month'
                  className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D]'
                  value={endMonth}
                  onChange={handleEndMonthChange}
                  disabled={currentlyStudying}
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
                  disabled={currentlyStudying}
                >
                  <option value=''>Year</option>
                  {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grade */}
            <div className='flex flex-col text-left'>
              <label className='text-white mb-2 text-xl' htmlFor='grade'>Grade</label>
              <input
                type='text'
                id='grade'
                className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D] placeholder:text-gray-700'
                value={grade}
                onChange={handleGradeChange}
                placeholder='Enter grade'
                required
              />
            </div>

            {/* Description */}
            <div className='flex flex-col text-left'>
              <label className='text-white mb-2 text-xl' htmlFor='description'>Description</label>
              <textarea
                id='description'
                rows='4'
                className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D] placeholder:text-gray-700'
                value={edu?.description || ''}
                placeholder='Enter description'
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className='flex justify-end'>
              <button
                type='submit'
                className='px-4 py-2 bg-[#FF7C1D] text-white rounded-md hover:bg-[#ff8c36] transition duration-300'
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

export default Editeducation;
