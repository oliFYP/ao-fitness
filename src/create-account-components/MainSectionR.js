import React, { useState, useEffect } from 'react';
import coach from '../img/client-side.jpg';
import Container from './RegisterContainer'

function MainSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const delay = 200;
    const timer = setTimeout(() => {
      setLoaded(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []); 

  return (
    <div className={`min-h-screen flex transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
  
    <div className="hidden md:block md:w-1/2">
      <img
        src={coach}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 text-white ">
    <h1 className="font-bold text-4xl lg:text-5xl ">Find the right coach</h1>
    <p>Find the one that will inspire you and push you to your limits</p>
  </div>
    </div>
    
    <Container/>
  </div>
      
  );
}

export default MainSection;
