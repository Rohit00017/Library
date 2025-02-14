import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import About from './About';
import Contact from './Contact';
import UserLogin from './UserLogin';
import AdminLogin from './AdminLogin';
import UserHome from './UserHome';
import Borrowed from './Borrowed';
import Available from './Available';
import AdmHome from './AdmHome';
import AdmBooks from './AdmBooks';
import AdmUsers from './AdmUsers';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/UserHome" element={<UserHome />} />
        <Route path="/Available" element={<Available />} />
        <Route path="/Borrowed" element={<Borrowed />} />
        <Route path="/logout" element={<LandingPage />} />
        <Route path="/AdmHome" element={<AdmHome />} /> 
        <Route path="/Books" element={<AdmBooks />} />
        <Route path="/Users" element={<AdmUsers />} />
      
      </Routes>
    </Router>
  );
}

export default App;
