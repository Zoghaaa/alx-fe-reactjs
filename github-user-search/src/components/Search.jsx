import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    else if (name === 'location') setLocation(value);
    else if (name === 'minRepos') setMinRepos(value);
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUserData([]);

    try {
      const data = await fetchUserData(username, location, minRepos); // Pass search criteria
      setUserData(data.items || []); // Handle array response from API
    } catch (err) {
      console.error(err);
      setError(true); // Display error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">GitHub User Search</h1>
      
      <form onSubmit={handleFormSubmit} className="space-y-4">
        {/* Username Input */}
        <input
          className="w-full p-2 border rounded"
          type="text"
          name="username"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
        />
        
        {/* Location Input */}
        <input
          className="w-full p-2 border rounded"
          type="text"
          name="location"
          value={location}
          onChange={handleInputChange}
          placeholder="Filter by location"
        />
        
        {/* Minimum Repositories Input */}
        <input
          className="w-full p-2 border rounded"
          type="number"
          name="minRepos"
          value={minRepos}
          onChange={handleInputChange}
          placeholder="Minimum repositories count"
        />
        
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
        >
          Search
        </button>
      </form>

      {/* Loading Message */}
      {loading && <p className="text-center mt-4">Loading...</p>}

      {/* Error Message */}
      {error && (
        <p className="text-center mt-4 text-red-500">
          Looks like we can’t find the user(s).
        </p>
      )}

      {/* Search Results */}
      {userData.length > 0 && (
        <ul className="mt-6 space-y-4">
          {userData.map((user) => (
            <li key={user.id} className="flex items-center space-x-4 p-4 border rounded hover:bg-gray-50">
              {/* User Avatar */}
              <img
                src={user.avatar_url}
                alt={`${user.login} avatar`}
                className="w-16 h-16 rounded-full"
              />
              <div>
                {/* User Name */}
                <p className="font-bold text-lg">{user.login}</p>
                
                {/* GitHub Profile Link */}
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
