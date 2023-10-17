import React, { useState } from 'react';
import Footer from '../home-components/Footer';
import TopBar from '../privacy-components/topbar'
import Mainsection from '../forgotten-components/Mainsection'

function ForgottenPassword() {
  return (
    <div >
     <TopBar/>
     <Mainsection/>
     <Footer/>
    </div>
  );
};

export default ForgottenPassword;