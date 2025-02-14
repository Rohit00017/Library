import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

function UserHome() {
  const images = [
    "https://www.voicesofruralindia.org/wp-content/uploads/2020/11/ylswjsy7stw-1536x901.jpg",
    "https://img.freepik.com/premium-photo/room-with-bookcase-full-books-lamp_1068983-5199.jpg",
    "https://www.law.georgetown.edu/environmental-law-review/wp-content/uploads/sites/18/2023/10/Photo-in-a-realistic-style_-Inside-the-renowned-New-York-Public-Library-the-vast-shelves-tell-a-different-tale.-Fewer-books-are-seen-and-in-their-pl-1-1-980x552.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate(); // Hook for programmatic navigation

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-left">
          <img src="https://via.placeholder.com/50" alt="Library Logo" className="logo-image" />
        </div>
        <div className="header-center">
          <input type="text" placeholder="Search..." className="search-bar" />
          <button className="search-button">🔍</button>
        </div>
        <div className="header-right">
          <span className="welcome-text">Welcome Username</span>
        </div>
      </header>

      <div className="sidebar">
        <ul>
          <li>
            <button className="sidebar-button" onClick={() => navigate('/UserHome')}>
              Home
            </button>
          </li>
          <li>
            <button className="sidebar-button" onClick={() => navigate('/Available')}>
              Available Books
            </button>
          </li>
          <li>
            <button className="sidebar-button" onClick={() => navigate('/Borrowed')}>
              Borrowed Details
            </button>
          </li>
          <li>
            <button className="sidebar-button" onClick={() => navigate('/logout')}>
              Logout
            </button>
          </li>
        </ul>
      </div>

      <div className="main-content">
        <div className="content-area">
          <div className="image-slider">
            <img
              src={images[currentImageIndex]}
              alt={`Library image ${currentImageIndex + 1}`}
              className="slider-image"
            />
          </div>
          <div className="library-details">
            <h3>About</h3>
            <p>Welcome to the library management system. Here you can manage your books, view borrowed details, and more.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHome;
