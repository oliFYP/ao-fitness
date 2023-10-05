import React from 'react';
import coach from '../img/coach.jpg';
import Container from './SelectContainer'

function MainSection() {
  return (
    <div>
      <section
        className="relative min-h-screen flex justify-center items-center"
        style={{ backgroundImage: `url(${coach})`, backgroundSize: 'cover' }}
      >
        
        <Container/>
      </section>
    </div>
  );
}

export default MainSection;


