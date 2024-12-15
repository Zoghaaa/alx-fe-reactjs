import axios from 'axios';

// Base URL for GitHub API
const GITHUB_API_URL = 'https://api.github.com';

// API Key (read from Vite environment variable)
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

// Axios instance with headers (if API key is needed)
const githubApi = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    Authorization: API_KEY ? `token ${API_KEY}` : undefined, // Include the API key if it exists
  },
});

// Function to search for GitHub users
export const searchUsers = async (username) => {
  try {
    const response = await githubApi.get(`/search/users?q=${username}`);
    return response.data; // Return data from API response
  } catch (error) {
    console.error('Error fetching GitHub users:', error);
    throw error; // Re-throw the error for further handling
  }
};
