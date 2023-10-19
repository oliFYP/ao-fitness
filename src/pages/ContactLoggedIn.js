
import React, { useState } from 'react';
import Footer from '../user-dashboard-components/FooterLoggedIn';
import ContactForm from '../contact-components/ContactForm';
import TopBar from '../user-dashboard-components/TopB';

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