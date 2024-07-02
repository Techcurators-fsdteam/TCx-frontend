import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from '../store/UserContext';
import { URL } from '../api/url';

const countryCodes = [
  { code: '+1', country: 'USA/Canada' },
  { code: '+44', country: 'UK' },
  { code: '+91', country: 'India' },
  { code: '+61', country: 'Australia' },
  { code: '+49', country: 'Germany' },
  { code: '+81', country: 'Japan' },
  { code: '+33', country: 'France' },
  { code: '+86', country: 'China' },
  { code: '+39', country: 'Italy' },
  { code: '+55', country: 'Brazil' },
  { code: '+7', country: 'Russia' },
  { code: '+34', country: 'Spain' },
  { code: '+82', country: 'South Korea' },
  { code: '+31', country: 'Netherlands' },
  { code: '+46', country: 'Sweden' },
  { code: '+64', country: 'New Zealand' },
  { code: '+52', country: 'Mexico' },
  { code: '+41', country: 'Switzerland' },
  { code: '+48', country: 'Poland' },
  { code: '+65', country: 'Singapore' },
  { code: '+27', country: 'South Africa' },
  { code: '+351', country: 'Portugal' },
  { code: '+20', country: 'Egypt' },
  { code: '+971', country: 'United Arab Emirates' },
  { code: '+60', country: 'Malaysia' }
  // You can add more codes as needed
];


function EditProfileForm({profile,onClose}) {
  const {user,fetchUserDetails}=useUser()
  // const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [state, setstate] = useState('');

  const handleCountryCodeChange = (event) => {
    const countryCode = event.target.value;
    // Implement logic to set the country code state if necessary
  };

  const handlePhoneChange = (event) => {
    const phoneNumber = event.target.value;
    setPhone(phoneNumber);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      username:user.username,
      phone,
      location: `${state},${country}`,
      
    };
   

    try {
      const response = await axios.post(`${URL}/profile/profile`, data);

      if (response.status === 201) {
        console.log('Profile data updated successfully');

        
        // Handle success (e.g., show a notification, redirect, etc.)
      } else {
        console.error('Failed to update profile data', response);
        // Handle error (e.g., show a notification, etc.)
      }
      await fetchUserDetails();
      onClose();
    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle error (e.g., show a notification, etc.)
    }
  };

  return (
    <div className='flex justify-center text-center px-4'>
      <div className='w-full md:w-[80%] lg:w-[60%] xl:w-[50%] bg-[#1F202A] mt-10 rounded-xl p-6'>
        <div className='w-full'>
          <div className='flex justify-between items-center mb-6'>
            <p className='text-lg sm:text-xl md:text-2xl font-extralight text-[#FF7C1D]'>
              Edit Your Profile
            </p>
          </div>
          
          <form className='space-y-4' onSubmit={handleSubmit}>
           

            {/* Phone Number */}
            <div className='flex flex-col text-left'>
              <label className='text-white mb-2 text-xl' htmlFor='phone'>Phone Number</label>
              <div className='flex space-x-2'>
                <select
                  id='country-code'
                  className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D]'
                  onChange={handleCountryCodeChange}
                >
                  {countryCodes.map(({ code, country }) => (
                    <option key={code} value={code}>{code} {country}</option>
                  ))}
                </select>
                <input
                  type='tel'
                  required
                  id='phone'
                  maxLength={10}
                  className='flex-grow p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D] placeholder:text-gray-700'
                  placeholder='Enter your phone number'
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </div>
            </div>

             {/* state */}
             <div className='flex flex-col text-left'>
              <label className='text-white mb-2 text-xl' htmlFor='state'>State</label>
              <input
                type='text'
                required
                id='state'
                className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D] placeholder:text-gray-700'
                placeholder='Enter your state'
                value={state}
                onChange={(e) => setstate(e.target.value)}
              />
            </div>

            {/* Country */}
            <div className='flex flex-col text-left'>
              <label className='text-white mb-2 text-xl' htmlFor='country'>Country</label>
              <input
                type='text'
                required
                id='country'
                className='p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D] placeholder:text-gray-700'
                placeholder='Enter your country'
                value={country}
                onChange={(e) => setCountry(e.target.value)}
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

export default EditProfileForm;
