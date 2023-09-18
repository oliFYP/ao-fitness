import React from 'react';

function LoginContainer() {
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="bg-black bg-opacity-50 backdrop-blur-lg p-8 rounded-lg max-w-md w-full">
      <h2 className="text-white text-2xl mb-4">Login</h2>
      <div className="mb-4">
        <label className="block text-white mb-1" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 bg-gray-800 bg-opacity-50 rounded text-white"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-6">
        <label className="block text-white mb-1" htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          id="password"
          className="w-full px-3 py-2 bg-gray-800 bg-opacity-50 rounded text-white"
          placeholder="Enter your password"
        />
      </div>
      <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full">
        Login
      </button>
      <div className="mt-4 text-center">
        <button className="text-white underline">Create an Account</button>
      </div>
    </div>
  </div>
  
  );
};

export default LoginContainer;