// UserDetails.jsx
import React, { useContext } from 'react'; // Import useContext hook
import UserContext from './UserContext'; // Import UserContext

function UserDetails() {
  // Use useContext to get the userData directly from the context
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;