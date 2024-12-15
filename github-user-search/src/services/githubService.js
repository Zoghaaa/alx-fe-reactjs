import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

export const fetchUserData = async (username, location, minRepos) => {
  try {
    const query = [
      username && `user:${username}`,
      location && `location:${location}`,
      minRepos && `repos:>=${minRepos}`,
    ]
      .filter(Boolean)
      .join('+');
    
    const response = await axios.get(`${GITHUB_API_URL}/search/users?q=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
