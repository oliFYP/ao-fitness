import React from 'react';
import coach from '../img/coach.jpg';
import Container from './RegisterContainer'

function MainSection() {
 

  return (
    <div>
      <section
         className="relative min-h-screen flex items-center justify-center"
         style={{
           backgroundImage: `url(${coach})`,
           backgroundSize: 'cover',
           overflow: 'hidden',
         }}
      >
        
        <Container/>
      </section>
    </div>
  );
}

export default MainSection;
