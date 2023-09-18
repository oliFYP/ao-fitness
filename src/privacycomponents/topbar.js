import React from 'react';
import logo from '../img/logo.png';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div className="top-0 w-full">
      <header className="bg-black p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="cursor-pointer h-8 mt-1 sm:h-12 sm:mt-2" onClick={navigateToHome}/>
            <p className="cursor-pointer font-bold text-white text-xl hidden sm:block sm:text-3xl" onClick={navigateToHome}>
              Fitness
            </p>
          </div>

          <div className="flex items-center space-x-4"></div>
        </div>
      </header>
    </div>
  );
};

export default TopBar;
