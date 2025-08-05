import React from 'react';

const Results = ({ data, loading, error }) => {
  if (loading) {
    return <p className="text-center mt-4 text-blue-600">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-4 text-red-600">{error}</p>;
  }

  if (!data.length) {
    return <p className="text-center mt-4 text-gray-500">No users found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((user) => (
        <div key={user.id} className="bg-white p-4 rounded shadow">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-20 h-20 rounded-full mx-auto"
          />
          <h3 className="text-center mt-2 font-semibold">{user.login}</h3>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-blue-600 hover:underline mt-2"
          >
            View Profile
          </a>
        </div>
      ))}
    </div>
  );
};

export default Results;
