import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const UserLogin = () => {
    const navigate = useNavigate();  
    return (
      <div className="login-page">
        <nav className="navbar">
        <div className="navbar-title">Library Management System</div>
          <ul className="nav-buttons2">
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
  
        <div className="main-content2">
          <div className="image-section">
            <img
              src="https://www.pixel-studios.com/blog/wp-content/uploads/2018/12/012.jpg"
              alt="Library"
              className="library-image"
            />
          </div>
  
          <div className="login-section">
            <div className="login-box">
              <h2 className="login-title">User Login</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter your username"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button onClick={() => navigate('/UserHome')} className="btn-login"> {/* Temporary */}
                Login
              </button>
              </form>
            </div>
            <div className="link-section">
              <a href="/AdminLogin" className="link">
                Admin Login
              </a>
              <span className="divider">|</span>
              <a href="#create-account" className="link">
                Create Account
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default UserLogin;