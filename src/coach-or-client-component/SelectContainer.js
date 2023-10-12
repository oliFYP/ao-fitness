import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import coachside from '../img/coach-side.jpg';
import clientside from '../img/client-side.jpg';

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
    <div className="flex flex-wrap justify-center items-center">
      <div className={`bg-black bg-opacity-50 backdrop-blur-lg p-8 m-4 mt-5 lg:mt-auto mb-5 rounded-xl max-w-md w-full sm:w-1/2 flex flex-col justify-center items-center ${isLoaded ? 'opacity-100 transition-opacity duration-1000 ease-out' : 'opacity-0'}`}>
        <h2 className="text-xl text-white font-bold">Client</h2>
        <img src={clientside} className="mt-7 w-full h-auto rounded-xl" alt="Client" />
        <button className="bg-white text-black font-bold py-2 px-4 mt-5 rounded-lg" onClick={navigateToLogin}>
          Login as Client
        </button>
      </div>
      <div className={`bg-white bg-opacity-50 backdrop-blur-lg p-8 m-4 mt-5 lg:mt-auto rounded-xl max-w-md w-full sm:w-1/2 flex flex-col justify-center items-center ${isLoaded ? 'opacity-100 transition-opacity duration-1000 ease-out' : 'opacity-0'}`}>
        <h2 className="text-xl text-black font-bold">Coach</h2>
        <img src={coachside} className="mt-7 w-full h-auto rounded-lg" alt="Coach" />
        <button className="bg-black text-white font-bold py-2 px-4 mt-5 rounded-xl" onClick={navigateToLoginCoach}>
          Login as Coach
        </button>
      </div>
    </div>
  );
}

export default SelectContainer;
