import React, { useState } from 'react';

const Search = ({ onSearch, data = [], loading = false }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ username, location, minRepos });
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mb-4">GitHub Advanced User Search</h2>
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
            {/* Display search results */}
      {loading && <p>Loading</p>}
      {!loading && data && data.length === 0 && <p>Looks like we cant find the user</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {data && data.map((user) => (
          <div key={user.id} className="bg-white p-4 rounded shadow">
            <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full mx-auto" />
            <h3 className="text-center mt-2 font-semibold">{user.login}</h3>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Search;
