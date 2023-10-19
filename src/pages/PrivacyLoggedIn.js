import React from 'react';
import Footer from '../user-dashboard-components/FooterLoggedIn';

import MainSectionP from '../privacy-components/mainsection';
import TopBar from '../user-dashboard-components/TopB';

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