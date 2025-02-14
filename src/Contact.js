import React from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-left">
          <img src="https://via.placeholder.com/50" alt="Library Logo" className="logo-image" />
        </div>
        <h1>Contact Us</h1>
        <nav className="navbar">
          <ul className="nav-buttons">
          <li>
              <button onClick={() => navigate('/')} className="nav-button1">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => navigate('/About')} className="nav-button1">
                About
              </button>
            </li>
            <li>
              <button onClick={() => navigate('/Contact')} className="nav-button2">
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main className="library-contact">
              <p>Address : Public Library, Near Church</p>
                <p>Phone : 0471-234567</p>
      </main>
    </div>
  );
}

export default Contact;
