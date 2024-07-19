import React, { useState } from 'react';
import cardbg from '../assets/cardbg.svg';

const StudentDet = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    collegeName: '',
    rollNo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add more logic here to handle form submission, such as sending the data to a server.
  };

  return (
    <>
      <div className='flex justify-center items-center min-h-screen bg-cover bg-center' >
        <div className='w-[90%] sm:w-[75%] md:w-[60%] lg:w-[50%] bg-gray-900 bg-opacity-90 p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl shadow-md'>
          <p className='text-orange-500 text-2xl sm:text-3xl lg:text-4xl mb-6 text-center'>Enter Your Details:</p>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label htmlFor='name' className='block text-sm font-medium text-white'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                value={formData.name}
                onChange={handleChange}
                className='mt-1 block w-full rounded-md px-4 py-2 border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50 focus:outline-none'
                required
              />
            </div>
            <div>
              <label htmlFor='lastName' className='block text-sm font-medium text-white'>
                Last Name
              </label>
              <input
                type='text'
                name='lastName'
                id='lastName'
                value={formData.lastName}
                onChange={handleChange}
                className='mt-1 block w-full rounded-md px-4 py-2 border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50 focus:outline-none'
                required
              />
            </div>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-white'>
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                value={formData.email}
                onChange={handleChange}
                className='mt-1 block w-full rounded-md px-4 py-2 border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50 focus:outline-none'
                required
              />
            </div>
            <div>
              <label htmlFor='collegeName' className='block text-sm font-medium text-white'>
                College Name
              </label>
              <input
                type='text'
                name='collegeName'
                id='collegeName'
                value={formData.collegeName}
                onChange={handleChange}
                className='mt-1 block w-full rounded-md px-4 py-2 border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50 focus:outline-none'
                required
              />
            </div>
            <div>
              <label htmlFor='rollNo' className='block text-sm font-medium text-white'>
                Roll No
              </label>
              <input
                type='text'
                name='rollNo'
                id='rollNo'
                value={formData.rollNo}
                onChange={handleChange}
                className='mt-1 block w-full rounded-md px-4 py-2 border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50 focus:outline-none'
                required
              />
            </div>
            <div className='flex justify-center'>
              <button
                type='submit'
                className='bg-orange-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default StudentDet;
