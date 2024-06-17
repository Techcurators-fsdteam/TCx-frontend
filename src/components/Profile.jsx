import '../index.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import certificate from '../assets/certificate.svg';
import education from '../assets/education.svg';
import links from '../assets/links.svg';
import work from '../assets/work.svg';
import cert1 from '../assets/cert1.svg';
import cert2 from '../assets/cert2.svg';

function Profile() {
  const [showWorkForm, setShowWorkForm] = useState(false);
  const [workExperience, setWorkExperience] = useState([]);

  const handleAddWorkExperience = (e) => {
    e.preventDefault();
    const { company, position, startDate, endDate } = e.target.elements;
    const newWorkExperience = {
      company: company.value,
      position: position.value,
      startDate: startDate.value,
      endDate: endDate.value,
    };
    setWorkExperience([...workExperience, newWorkExperience]);
    setShowWorkForm(false);
  };

  return (
    <>
      <div className='flex justify-center text-center py-8'>
        <div className='flex flex-wrap w-[90%] md:w-[80%] lg:w-[70%] xl:w-[70%] gap-4'>
          {/* Left Profile Box */}
          <div className='w-full md:w-[45%] lg:w-[30%] flex flex-col gap-4'>
            <div className='bg-[#303031] text-white text-left rounded-xl p-4 sm:p-6'>
              <div className='flex items-center mb-2'>
                <div className='bg-[#4A4B53] rounded-full h-10 w-10 flex justify-center items-center text-base md:text-lg'>
                  <span>JD</span> {/* Initials inside the profile circle */}
                </div>
                <p className='ml-2 text-xl md:text-2xl text-[#FF7C1D]'>John Doe</p>
              </div>
              <p className='text-sm md:text-base mb-1'>@doe_john</p>
            </div>

            <div className='bg-[#303031] text-white text-left rounded-xl p-4 sm:p-6'>
              <div className='flex justify-between items-center mb-2'>
                <p className='text-lg md:text-xl text-[#FF7C1D]'>Personal Information</p>
                <p className='text-[#1859F1] cursor-pointer'><Link to="/Editprofile">+ Edit</Link></p>
              </div>
            </div>

            <div className='bg-[#303031] text-white text-left rounded-xl p-4 sm:p-6'>
              <div className='flex justify-between items-center mb-2'>
                <div className='flex items-center'>
                  <p className='ml-2 text-lg md:text-xl text-[#FF7C1D]'>My Resume</p>
                </div>
                <p className='text-[#1859F1] cursor-pointer'><Link to="/Editresume">+ Add Resume</Link></p>
              </div>
            </div>
          </div>

          {/* Right Content Box */}
          <div className='w-full md:w-[50%] lg:w-[65%] rounded-xl p-4 sm:p-6 mt-4 md:mt-0'>
            <div className='bg-[#303031] text-white text-left rounded-xl p-4 sm:p-6 mb-4'>
              <div className='flex items-center mb-2'>
                <img src={certificate} alt='Certificate' className='h-8 w-8' />
                <p className='ml-2 text-lg md:text-xl text-[#FF7C1D]'>Certificates</p>
              </div>
              <div className='flex flex-wrap justify-center gap-4'>
                <img src={cert1} alt='Certificate 1' className='h-32 w-32 sm:h-28 sm:w-28 md:h-24 md:w-24 lg:h-20 lg:w-20 rounded-md' />
                <img src={cert2} alt='Certificate 2' className='h-32 w-32 sm:h-28 sm:w-28 md:h-24 md:w-24 lg:h-20 lg:w-20 rounded-md' />
              </div>
            </div>

            <div className='bg-[#303031] text-white text-left rounded-xl p-4 sm:p-6 mb-4'>
              <div className='flex justify-between items-center mb-2'>
                <div className='flex items-center'>
                  <img src={work} alt='Work Experience' className='h-8 w-8' />
                  <p className='ml-2 text-lg md:text-xl text-[#FF7C1D]'>Work Experience</p>
                </div>
                <p
                  className='text-[#1859F1] cursor-pointer'
                  onClick={() => setShowWorkForm(true)}
                >
                  + Add Work Experience
                </p>
              </div>
              {showWorkForm && (
                <form onSubmit={handleAddWorkExperience}>
                  <div className='mb-4'>
                    <label htmlFor='company' className='block text-white'>
                      Company
                    </label>
                    <input
                      type='text'
                      id='company'
                      name='company'
                      className='w-full px-4 py-2 rounded-md bg-gray-700 text-sm text-white focus:outline-none placeholder-orange-500 glowing-border'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='position' className='block text-white'>
                      Position
                    </label>
                    <input
                      type='text'
                      id='position'
                      name='position'
                      className='w-full px-4 py-2 rounded-md bg-gray-700 text-sm text-white focus:outline-none placeholder-orange-500 glowing-border'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='startDate' className='block text-white'>
                      Start Date
                    </label>
                    <input
                      type='date'
                      id='startDate'
                      name='startDate'
                      className='w-full px-4 py-2 rounded-md bg-gray-700 text-sm text-white focus:outline-none placeholder-orange-500 glowing-border'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='endDate' className='block text-white'>
                      End Date
                    </label>
                    <input
                      type='date'
                      id='endDate'
                      name='endDate'
                      className='w-full px-4 py-2 rounded-md bg-gray-700 text-sm text-white focus:outline-none placeholder-orange-500 glowing-border'
                      required
                    />
                  </div>
                  <div className='flex justify-end'>
                    <button
                      type='button'
                      onClick={() => setShowWorkForm(false)}
                      className='mr-2 px-4 py-2 rounded-md bg-red-500 text-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50'
                    >
                      Cancel
                    </button>
                    <button
                      type='submit'
                      className='px-4 py-2 rounded-md bg-orange-500 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50'
                    >
                      Save
                    </button>
                  </div>
                </form>
              )}
              <div>
                {workExperience.map((work, index) => (
                  <div key={index} className='mt-4'>
                    <p className='text-lg text-[#FF7C1D]'>{work.company}</p>
                    <p>{work.position}</p>
                    <p>
                      {work.startDate} - {work.endDate}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className='bg-[#303031] text-white text-left rounded-xl p-4 sm:p-6 mb-4'>
              <div className='flex justify-between items-center mb-2'>
                <div className='flex items-center'>
                  <img src={education} alt='Education' className='h-8 w-8' />
                  <p className='ml-2 text-lg md:text-xl text-[#FF7C1D]'>Education</p>
                </div>
                <p className='text-[#1859F1] cursor-pointer'>
                  <Link to="/Editeducation">+ Add Education</Link>
                </p>
              </div>
            </div>

            <div className='bg-[#303031] text-white text-left rounded-xl p-4 sm:p-6 mb-4'>
              <div className='flex justify-between items-center mb-2'>
                <div className='flex items-center'>
                  <img src={links} alt='Links' className='h-8 w-8' />
                  <p className='ml-2 text-lg md:text-xl text-[#FF7C1D]'>Links</p>
                </div>
                <p className='text-[#1859F1] cursor-pointer'>
                  <Link to="/Editlink">+ Add Links</Link>
                </p>
              </div>
            </div>

            <div className='bg-[#303031] text-white text-left rounded-xl p-4 sm:p-6 mb-4'>
              <div className='flex justify-between items-center mb-2'>
                <div className='flex items-center'>
                  <img src={work} alt='Skills' className='h-8 w-8' />
                  <p className='ml-2 text-lg md:text-xl text-[#FF7C1D]'>Skills</p>
                </div>
                <p className='text-[#1859F1] cursor-pointer'>+ Add Skills</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
