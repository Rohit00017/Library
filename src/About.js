import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-left">
          <img src="https://via.placeholder.com/50" alt="Library Logo" className="logo-image" />
        </div>
        <h1>About Us</h1>
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
      <main className="library-description">
        <p>Welcome to the Library Management System. Here, you can manage your books, track borrowed items, and much more. Our goal is to provide an easy-to-use platform to help you manage your library resources effectively. Explore and enjoy!</p>
      </main>
    </div>
  );
}

export default About;
