import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      {/* Protected Route for Profile */}
      <Route
        path="/profile/*"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* Dynamic route for blog posts */}
      <Route path="/blog/:id" element={<BlogPost />} />

      <Route path="/login" element={<Login />} />

      {/* Catch-all redirect */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
