import { useState } from 'react';
import { fetchGitHubUser } from '../services/githubApi';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const data = await fetchGitHubUser(username);
      setUserData(data);
      setError('');
    } catch (err) {
      setUserData(null);
      setError(err.message);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>GitHub User Search</h2>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch} style={{ marginLeft: '10px' }}>
        Search
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {userData && (
        <div style={{ marginTop: '20px' }}>
          <img src={userData.avatar_url} alt="Avatar" width={100} />
          <h3>{userData.name || userData.login}</h3>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
