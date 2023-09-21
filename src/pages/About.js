import React from 'react';

import Footer from '../home-components/Footer';

import MainSection from '../about-components/mainsection';
import TopBar from '../privacy-components/topbar'

function About() {
  return (
    <div>
      <TopBar/>
      <MainSection/>
      <Footer/>
    </div>
  );
}

export default About;