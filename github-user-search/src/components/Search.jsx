import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const data = await fetchUserData({ username, location, minRepos });
      setResults(data);
    } catch {
      setError('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mb-4">
        GitHub Advanced User Search
      </h2>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full border border-gray-300 rounded p-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location (e.g., Lagos)"
          className="w-full border border-gray-300 rounded p-2"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          className="w-full border border-gray-300 rounded p-2"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && <p className="text-center mt-4">Loading...</p>}

      {/* Error */}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      {/* Results */}
      <div className="mt-6 space-y-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="flex items-center space-x-4 p-4 border rounded-lg shadow"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-medium">{user.login}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
