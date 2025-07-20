// ProfilePage.jsx
import UserInfo from './UserInfo';

// Remove userData from props as it's no longer passed down directly
function ProfilePage() {
  return <UserInfo />; // No longer needs to pass userData as a prop
}

export default ProfilePage;