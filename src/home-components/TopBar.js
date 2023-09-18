import React from 'react';
import logo from '../img/logo.png';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    
    navigate('/login');
  };
  return (
    <div className="absolute top-0 w-full">
  <header className="bg-gradient-to-b from-black to-transparent p-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-8 mt-1 sm:h-12 sm:mt-2" />
        <p className="font-bold text-white text-xl hidden sm:block sm:text-3xl">Fitness</p>
      </div>
      
      <div className="flex items-center space-x-4">
        
      <button className="font-bold h-9 text-white relative group btn btn-border-underline" onClick={navigateToLogin}>
  Login
  <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
</button>

        <button className="rounded-2xl bg-white w-40 h-10 font-bold text-black flex items-center justify-center">
          Join as coach
        </button>
      </div>
    </div>
  </header>
</div>

  );
};

export default TopBar;