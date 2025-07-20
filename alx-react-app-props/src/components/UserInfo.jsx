// UserInfo.jsx
import UserDetails from './UserDetails';

// Remove userData from props
function UserInfo() {
  return <UserDetails />; // No longer needs to pass userData as a prop
}

export default UserInfo;