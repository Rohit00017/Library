import React from 'react';
import UserHome from './UserHome';
import { useNavigate } from 'react-router-dom';

function First() {
  const navigate = useNavigate(); // Initialize the navigation function

  return (
    <div>
      <div className="mycontainer">
        <div className="right">Monday - Saturday, 8AM to 10PM</div>
        <div className="left">Call us now: +91-0000000000</div>
      </div>

      <div className="div1">
        <nav className="nav">
          <h1>Library Management System</h1>
          <ul className="nav-buttons">

  <li>
    <button onClick={() => navigate("/About")} className="nav-button1">About</button>
  </li>
  <li>
    <button onClick={() => navigate("/Contact")} className="nav-button2">Contact</button>
  </li>
</ul>

          <div className="login-buttons">
            <button onClick={() => navigate("/UserLogin")} className="student-login">User Login</button>
            <button onClick={() => navigate("/AdminLogin")} className="admin-login">Admin Login</button>
          </div>
        </nav>
        <div className="background-section"></div>
      </div>
    </div>
  );
}

export default First;
