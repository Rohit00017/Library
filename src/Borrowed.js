import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Borrowed() {
  const [borrowedBooks, setBorrowedBooks] = useState([
    { id: 1, title: 'Book 1', borrowedDate: '2024-12-01', returnDate: '2024-12-15', dueStatus: 'Due' },
    { id: 2, title: 'Book 2', borrowedDate: '2024-12-05', returnDate: '2024-12-20', dueStatus: 'Returned' }
  ]);

  const navigate = useNavigate(); 

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-left">
          <a href='/UserHome'><img src="https://via.placeholder.com/50" alt="Library Logo" className="logo-image" /></a>
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
          <div>
            <h2>Borrowed Details</h2>
            <table>
              <thead>
                <tr>
                  <th>Sl. No.</th>
                  <th>Name of Book</th>
                  <th>Borrowed Date</th>
                  <th>Return Date</th>
                  <th>Due Status</th>
                </tr>
              </thead>
              <tbody>
                {borrowedBooks.map((book, index) => (
                  <tr key={book.id}>
                    <td>{index + 1}</td>
                    <td>{book.title}</td>
                    <td>{book.borrowedDate}</td>
                    <td>{book.returnDate}</td>
                    <td>{book.dueStatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default Borrowed;
