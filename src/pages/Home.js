import React from 'react';

import MainSection from '../components/MainSection';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import StartJourney from '../components/StartJourney';



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