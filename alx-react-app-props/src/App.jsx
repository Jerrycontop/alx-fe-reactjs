// App.jsx
import ProfilePage from './ProfilePage';
import UserContext from './UserContext'; // Import the new UserContext

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // Wrap ProfilePage with UserContext.Provider
    // Pass userData as the 'value' prop to the provider
    <UserContext.Provider value={userData}>
      <ProfilePage /> {/* No longer needs to pass userData as a prop */}
    </UserContext.Provider>
  );
}

export default App;