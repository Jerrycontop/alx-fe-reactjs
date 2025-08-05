import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchUserData}>Search</button>

      {loading && <p>Loading</p>}

      {error && <p>{error}</p>}

      {userData && (
        <div>
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="100" />
          <p>{userData.login}</p>
        </div>
      )}
    </div>
  );
}

export default Search;
