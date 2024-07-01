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
  const [data, setData] = useState({}); // State for additional data
  // Function to fetch user details from API
  // if(token)
  const fetchUserDetails = async () => {
    const token = getCookie('token');

    setLoading(true); // Set loading to true when fetch starts
    
    if (!token) {
      return "No Token Found"
    }
    try {
      const response = await axios.get('http://localhost:5000/api/auth/verify', {
        withCredentials:'include',
        headers: {
          'Authorization': `${token}`
        }
      });
      if (!response.data) {
        throw new Error('Failed to fetch user details');
      }
  
      setUser(response.data); // Update the user state with fetched data
    } catch (error) {
      console.error('Error fetching user details:', error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  // Function to set data
  const setAppData = (newData) => {
    setData(newData);
  };

  // Function to get data
  const getAppData = () => data;

  // Fetch user details on component mount
  useEffect(() => {
    fetchUserDetails();
  }, []);

  // Provide user, fetchUserDetails, and data handling functions and state through context
  return (
    <UserContext.Provider value={{ user, fetchUserDetails, data, setAppData, getAppData }}>
      {children}
    </UserContext.Provider>
  );
};
