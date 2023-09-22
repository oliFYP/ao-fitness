import React from 'react';
import coach from '../img/coach.jpg';
import Container from './RegisterContainer'

function MainSection() {
 

  return (
    <div>
      <section
        className="relative h-screen"
        style={{ backgroundImage: `url(${coach})`, backgroundSize: 'cover' }}
      >
        
        <Container/>
      </section>
    </div>
  );
}

export default MainSection;
