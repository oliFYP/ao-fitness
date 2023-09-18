import React from 'react';
import Footer from '../components/Footer';

import MainSectionP from '../privacycomponents/mainsectionprivacy';
import TopBar from '../privacycomponents/topbar'

function Privacy() {
  return (
    <div>
      <TopBar/>
      <MainSectionP/>
      <Footer/>
    </div>
  );
}

export default Privacy;