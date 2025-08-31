import React from "react";
import { Navigate } from "react-router-dom";

// simple mock authentication hook
const useAuth = () => {
  // For now, we just simulate an authenticated user
  // Later, this could be replaced with real logic (e.g., context or API)
  const user = { loggedIn: true }; 
  return user && user.loggedIn;
};

const ProtectedRoute = ({ children }) => {
  const isAuth = useAuth();

  return isAuth ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
