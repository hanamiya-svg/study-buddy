import axios from 'axios';

export const fetchBuddies = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/buddies');
    return response.data; // This returns the array of buddy data
  } catch (error) {
    console.error('Error fetching buddies:', error);
    return [];
  }
};
