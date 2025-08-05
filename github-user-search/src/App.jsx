import React, { useState } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Results from './components/Results';

const App = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async ({ username, location, minRepos }) => {
    setLoading(true);
    try {
      let query = '';

      if (username) query += `${username} in:login `;
      if (location) query += `location:${location} `;
      if (minRepos) query += `repos:>=${minRepos}`;

      const response = await axios.get(`https://api.github.com/search/users`, {
        params: {
          q: query.trim(),
        },
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      });

      setResults(response.data.items);
    } catch (error) {
      console.error('GitHub API error:', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Search onSearch={handleSearch} />
      <Results data={results} loading={loading} />
    </div>
  );
};

export default App;
