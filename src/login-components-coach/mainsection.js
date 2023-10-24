import React, { useState, useEffect } from 'react';
import coachside from '../img/coach-side.jpg';
import coach from '../img/fitness-coach.jpg';
import clientside from '../img/motivation.jpg';
import Login from './LoginContainer';



const images = [
  coachside,
  coach,
  clientside,

]; 
  
function MainSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9000); 

    return () => {
   
      clearInterval(interval);
    };
  }, []);

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
          src={images[currentImageIndex]}
          className="w-full h-full object-cover"
          alt="Image"
        />
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 text-white ">
    <h1 className="font-bold text-2xl lg:text-4xl ">Inspire people</h1>
    <p>Expand your reach as a fitness coach</p>
  </div>
    </div>
    
    <Login/>
  </div>
  );
};

export default MainSection;
