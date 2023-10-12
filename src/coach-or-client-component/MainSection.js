import React from 'react';
import coach from '../img/coach.jpg';
import Container from './SelectContainer'

function MainSection() {
  return (
    <div
        className="relative min-h-screen flex justify-center items-center"
        style={{ backgroundImage: `url(${coach})`, backgroundSize: 'cover' }}
      >
        <Container/>
      
    </div>
  );
}

export default MainSection;


