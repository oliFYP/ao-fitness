import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const navigateToPrivacy = () => {
    navigate('/privacy');
    window.scrollTo(0, 0);
  };

  const navigateToContact = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const navigateToAbout = () => {
    navigate('/about');
    window.scrollTo(0, 0); 
  };

  const navigateToHome = () => {
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  
   
    setTimeout(() => {
      navigate('/');
    }, 500); 
  };

  return (
    <footer className="bg-black text-white py-4 md:py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm md:text-base">&copy; 2023 AO-Fitness. All rights reserved.</p>
          <ul className="flex space-x-4 md:space-x-6">
            <li>
              <a className="hover:text-gray-500 hover:cursor-pointer text-sm md:text-base" onClick={navigateToHome}>
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500 hover:cursor-pointer text-sm md:text-base" onClick={navigateToAbout}>
                About
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500 hover:cursor-pointer text-sm md:text-base" onClick={navigateToPrivacy}>
                Privacy
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500 hover:cursor-pointer text-sm md:text-base" onClick={navigateToContact}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
