import React, { useState, useEffect } from 'react';
import coach from '../img/coach.jpg';
import Login from './LoginContainer';



  
  
function MainSection() {
  return (
    <div>
    <section
      className="relative h-screen"
      style={{ backgroundImage: `url(${coach})`, backgroundSize: 'cover' }}
    >
      <Login/>
    </section>
  </div>
  );
};

export default MainSection;
