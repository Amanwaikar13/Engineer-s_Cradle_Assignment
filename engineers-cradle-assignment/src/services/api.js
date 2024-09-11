import axios from 'axios';

export const signup = async (formData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/signup', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Add login function
export const login = async (credentials) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', credentials, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};
