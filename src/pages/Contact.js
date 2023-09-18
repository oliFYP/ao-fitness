
import React, { useState } from 'react';
import Footer from '../home-components/Footer';
import ContactForm from '../contact-components/ContactForm';
import TopBar from '../privacy-components/topbar';

function Contact() {
  return (
    <div >
     <TopBar/>
     <ContactForm/>
     <Footer/>
    </div>
  );
};

export default Contact;