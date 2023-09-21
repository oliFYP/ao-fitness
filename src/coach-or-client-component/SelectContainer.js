import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SelectContainer() {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(delayTimeout);
  }, []);

  const navigateToLogin = () => {
    navigate('/login');
  };

  const navigateToLoginCoach = () => {
    navigate('/login-Coach');
  };

  return (
    <div>
      <div className={`flex justify-center items-center h-screen ${isLoaded ? 'opacity-100 transition-all duration-1000 ease-out' : 'opacity-0'}`}>
        <div className="bg-black bg-opacity-50 backdrop-blur-lg p-8 m-4 mt-10 mb-auto sm:m-0 rounded-lg max-w-md w-full flex flex-col">
          <h2 className="text-xl mb-4 text-white">Select an option</h2>
          <button className="bg-black text-white font-bold py-2 px-4 mb-2 rounded-lg" onClick={navigateToLogin}>
            Login as Coach
          </button>
          <button className="bg-white text-black font-bold py-2 px-4 rounded-lg" onClick={navigateToLoginCoach}>
            Login as Client
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectContainer;
