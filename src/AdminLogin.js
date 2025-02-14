import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const AdminLogin = () => {
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
          <div className="registration-box">
          <h2>Admin Login</h2><br></br>
          <form>
                <div className="form-group">
                <label htmlFor="adminUserId">Admin ID:</label>
                  <input
                    type="text"
                    id="adminId"
                    placeholder="Enter your username"
                    name="adminId"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    name='admPassword'
                    required
                  />
                </div>
                <button onClick={() => navigate('/AdmHome')} className="btn-login"> {/* Temporary */}
                Login
              </button>
              <button onClick={() => navigate('/UserLogin')} className="user-login-button">User Login</button>
              </form>
        </div>
          
          </div>
        </div>
    );
  };
  
  export default AdminLogin;