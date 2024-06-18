import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Utility function to get a cookie by name
const getCookie = (name) => {
  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith(name + '='))
    ?.split('=')[1];

  return cookieValue ? decodeURIComponent(cookieValue) : null;
};

// Create a context object
const UserContext = createContext();

// Custom hook to use the user context
export const useUser = () => useContext(UserContext);

// UserProvider component to wrap your app and provide the context
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to fetch user details from API
  const fetchUserDetails = async () => {
    try {
      const token = getCookie('token'); // Get the token from the cookie
      // console.log(token)
      if (!token) {
        throw new Error('No token found');
      }
      else{

      const response = await axios.get('http://localhost:5000/api/auth/verify', {
        headers: {
          'Authorization': `${token}`
        }
      });

      if (!response.data) {
        throw new Error('Failed to fetch user details');
      }

      setUser(response.data);
    }
      // console.log(response.data) // Update the user state with fetched data
    } catch (error) {
      console.error('Error fetching user details:', error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  // Fetch user details on component mount
  useEffect(() => {
    fetchUserDetails();
  }, [document.cookie]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};
