import React, { useState, useEffect } from 'react';
import coach from '../img/coach.jpg';
import Login from './LoginContainer';



  
  
function MainSection() {
  
  return (
    <div>
    <section  className="relative min-h-screen flex items-center justify-center"
         style={{
           backgroundImage: `url(${coach})`,
           backgroundSize: 'cover',
           overflow: 'hidden',
         }}>
      <Login />
    </section>
  </div>
  );
};

export default MainSection;
