import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './App.css';

function Available() {
  const navigate = useNavigate(); 

  // Array of book data
  const books = [
    {
      image: 'https://m.media-amazon.com/images/I/81uot7BFoOL._UF1000,1000_QL80_.jpg',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
    },
    {
      image: 'https://via.placeholder.com/200x250',
      title: '1984',
      author: 'George Orwell',
    },
    {
      image: 'https://via.placeholder.com/200x250',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
    },
    {
      image: 'https://via.placeholder.com/200x250',
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
    },
    {
      image: 'https://m.media-amazon.com/images/I/71f7uziKLCL._UF1000,1000_QL80_.jpg',
      title: 'The Bright Book of Life',
      author: 'Jane Austen',
    },
    {
      image: 'https://m.media-amazon.com/images/I/71f7uziKLCL._UF1000,1000_QL80_.jpg',
      title: 'The Bright Book of Life',
      author: 'Jane Austen',
    },
  ];

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="header-left">
        <div className="header-left">
          <a href='/UserHome'><img src="https://via.placeholder.com/50" alt="Library Logo" className="logo-image" /></a>
        </div>
        </div>
        <div className="header-center">
          <input type="text" placeholder="Search..." className="search-bar" />
          <button className="search-button">🔍</button>
        </div>
        <div className="header-right">
          <span className="welcome-text">Welcome Username</span>
        </div>
      </header>

      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li>
            <button className="sidebar-button" onClick={() => navigate('/UserHome')}>
              Home
            </button>
          </li>
          <li>
            <button className="sidebar-button" onClick={() => navigate('/available')}>
              Available Books
            </button>
          </li>
          <li>
            <button className="sidebar-button" onClick={() => navigate('/borrowed')}>
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

      {/* Main Content */}
      <div className="main-content">
        {/* Books Section */}
        <div className="books-section">
          <h2>Available Books</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {books.map((book, index) => (
              <div key={index} className="book-card">
                <img src={book.image} alt={book.title} className="book-image" />
                <div className="book-details">
                  <h4>{book.title}</h4>
                  <p>by {book.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Available;
