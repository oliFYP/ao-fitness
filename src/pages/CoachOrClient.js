import React from 'react';
import TopBar from '../privacy-components/topbar';
import Footer from '../home-components/Footer';
import MainSection from '../coach-or-client-component/MainSection';

function CoachOrClient() {
  return (
    <div>
      <TopBar/>
      <MainSection/>
      <Footer/>
    </div>
  );
}

export default CoachOrClient;