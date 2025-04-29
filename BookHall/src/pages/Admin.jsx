import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'admin123') {
      setError('');
      navigate('/admin-dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-200 via-orange-50 to-orange-200   p-4">
      <div className="w-full xl:max-w-md 2xl:max-w-xl  bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl 2xl:text-5xl font-bold text-center text-amber-700 mb-6">Admin Login</h2>

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 2xl:px-8 2xl:py-6 rounded-lg mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm 2xl:text-2xl font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 2xl:p-5 2xl:text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 hover:bg-amber-100"
              placeholder="Enter username"
              required
            />
          </div>

          <div>
            <label className="block text-sm 2xl:text-2xl font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 2xl:p-5 2xl:text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 hover:bg-amber-100"
              placeholder="Enter password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full 2xl:text-2xl bg-amber-700 text-white font-semibold py-3 mt-3 rounded-lg hover:bg-amber-600 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
