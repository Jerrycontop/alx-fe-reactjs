import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!username) {
      validationErrors.username = "Username is required";
    }
    if (!email) {
      validationErrors.email = "Email is required";
    }
    if (!password) {
      validationErrors.password = "Password is required";
    }

    setErrors(validationErrors);

    // If no validation errors, proceed with form submission
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", { username, email, password });
      alert("Registration successful!");
      // Reset form
      setUsername("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">User Registration</h2>

      <div className="mb-3">
        <label className="block">Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border px-2 py-1"
        />
        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
      </div>

      <div className="mb-3">
        <label className="block">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border px-2 py-1"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="mb-3">
        <label className="block">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border px-2 py-1"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
