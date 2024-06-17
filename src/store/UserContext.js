import React, { createContext, useContext, useState, useEffect } from 'react';

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
      const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
      if (!token) {
        throw new Error('No token found');
      }

      const response = await fetch('https://api.example.com/user-details', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user details');
      }

      const userData = await response.json();
      setUser(userData); // Update the user state with fetched data
    } catch (error) {
      console.error('Error fetching user details:', error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  // Fetch user details on component mount
  useEffect(() => {
    fetchUserDetails();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};
