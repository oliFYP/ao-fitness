import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import LoginCoach from "./pages/LoginPageCoach";
import Privacy from "./pages/Privacy";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ClientRegister from "./pages/RegisterPage";
import CoachRegister from "./pages/RegisterPageCoach";
import Dashboard from "./pages/Dashboard";
import Protect, { Protected } from "./pages/Protect";
import { AuthContext } from "./Context/AuthContext";
import ForgottenPassword from "./pages/ForgottenPassword";
import AboutLoggedIn from "./pages/AboutLoggedIn";
import ContactLoggedIn from "./pages/ContactLoggedIn";
import PrivacyLoggedIn from "./pages/PrivacyLoggedIn";

function App() {
  return (
    <AuthContext>
      <Router basename="/ao-fitness">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login-Coach" element={<LoginCoach />} />
          <Route path="/forgotten-password" element={<ForgottenPassword />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Client-Register" element={<ClientRegister />} />
          <Route path="/Coach-Register" element={<CoachRegister />} />

          <Route
            path="/Dashboard"
            element={
              <Protected>
                <Dashboard />
              </Protected>
            }
          />
          <Route
            path="/User-About"
            element={
              <Protected>
                <AboutLoggedIn />
              </Protected>
            }
          />
          <Route
            path="/User-Privacy"
            element={
              <Protected>
                <PrivacyLoggedIn />
              </Protected>
            }
          />
          <Route
            path="/User-Contact"
            element={
              <Protected>
                <ContactLoggedIn />
              </Protected>
            }
          />
        </Routes>
      </Router>
    </AuthContext>
  );
}

export default App;
