import React from 'react';

import MainSection from '../home-components/MainSection';
import AboutUs from '../home-components/AboutUs';
import Footer from '../home-components/Footer';
import StartJourney from '../home-components/StartJourney';



function Home({}) {
  return (
    <div>
      <MainSection />
      <StartJourney/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}

export default Home;