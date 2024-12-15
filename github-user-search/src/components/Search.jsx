import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data); // Store user data
    } catch (err) {
      setError(true); // Handle errors
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
        className='m-[10px]'
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we cant find the user</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={`${userData.login} avatar`} width={100} />
          <p>Name: {userData.name || 'N/A'}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
