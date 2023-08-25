import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 md:py-8"> 
  <div className="container mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm md:text-base">&copy; 2023 AO-Fitness. All rights reserved.</p> 
      <ul className="flex space-x-4 md:space-x-6"> 
        <li><a href="#" className="hover:text-gray-500 text-sm md:text-base">Home</a></li> 
        <li><a href="#" className="hover:text-gray-500 text-sm md:text-base">About</a></li> 
        <li><a href="#" className="hover:text-gray-500 text-sm md:text-base">Services</a></li> 
        <li><a href="#" className="hover:text-gray-500 text-sm md:text-base">Contact</a></li>
      </ul>
    </div>
  </div>
</footer>

  );
};

export default Footer;