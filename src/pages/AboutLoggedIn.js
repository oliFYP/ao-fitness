import React from 'react';

import Footer from '../user-dashboard-components/FooterLoggedIn';

import MainSection from '../about-components/mainsection';
import TopBar from '../user-dashboard-components/TopB';

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