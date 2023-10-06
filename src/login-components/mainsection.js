import React, { useState, useEffect } from 'react';
import coach from '../img/coach.jpg';
import Login from './LoginContainer';



  
  
function mainsection() {
  const sectionStyle = {
    backgroundImage: `url(${coach})`,
    backgroundSize: 'cover',
  };

  return (
    <div>
      <section className="relative h-screen" style={sectionStyle}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <Login />
      </section>
    </div>
  );
}

export default mainsection;