import React from 'react';
import Footer from '../home-components/Footer';

import MainSectionP from '../privacy-components/mainsection';
import TopBar from '../privacy-components/topbar'

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