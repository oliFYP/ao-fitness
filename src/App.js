
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import LoginCoach from './pages/LoginPageCoach';
import Privacy from './pages/Privacy';
import About from './pages/About';
import Contact from './pages/Contact';
import CoachOrClient from './pages/CoachOrClient';

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
        <Route path="/select" element={<CoachOrClient />} />
      </Routes>
    </Router>
  );
}

export default App;
