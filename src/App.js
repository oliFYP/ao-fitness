
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import LoginCoach from './pages/LoginPageCoach';
import Privacy from './pages/Privacy';
import About from './pages/About';
import Contact from './pages/Contact';

import ClientRegister from './pages/RegisterPage';
import CoachRegister from './pages/RegisterPageCoach';
import Dashboard from './pages/Dashboard';

function App() {
  return (

    <Router basename="/ao-fitness">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login-Coach" element={<LoginCoach />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
   
        <Route path="/Client-Register" element={<ClientRegister />} />
        <Route path="/Coach-Register" element={<CoachRegister />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>

  );
}

export default App;
