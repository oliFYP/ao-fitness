import React, { useState, useEffect } from 'react';

function LoginContainer() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
  
    const delayTimeout = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

  
    return () => clearTimeout(delayTimeout);
  }, []);

  return (
    <div className={`flex justify-center sm:items-center h-screen ${isLoaded ? 'opacity-100 transition-all duration-1000 ease-out' : 'opacity-0'}`}>
      <div className="bg-black bg-opacity-50 backdrop-blur-lg p-8 m-4 mt-10 mb-auto sm:m-0 rounded-lg max-w-md w-full">
        <h2 className="text-white text-2xl mb-4 font-bold">Customer Login</h2>
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
        <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full">
          Login
        </button>
        <div className="mt-4 text-center">
          <button className="text-white underline">Create an Account</button>
        </div>
      </div>
    </div>
  );
}

export default LoginContainer;
