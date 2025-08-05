import axios from 'axios';

export const fetchUserData = async ({ username, location, minRepos }) => {
  let query = '';

  // Build search query
  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=20`;

  try {
    const response = await axios.get(url);
    return response.data.items; // array of users
  } catch (error) {
    console.error('Error fetching GitHub users:', error);
    return [];
  }
};
