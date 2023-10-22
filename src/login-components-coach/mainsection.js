import React, { useState, useEffect } from 'react';
import coach from '../img/coach-side.jpg';
import Login from './LoginContainer';



  
  
function MainSection() {
  
  return (
    <div className="min-h-screen flex">
  
    <div className="hidden md:block md:w-1/2">
      <img
        src={coach}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 text-white ">
    <h1 className="font-bold text-4xl lg:text-5xl ">Inspire people</h1>
    <p>Inspire as many clients as you can</p>
  </div>
    </div>
    
    <Login/>
  </div>
  );
};

export default MainSection;
