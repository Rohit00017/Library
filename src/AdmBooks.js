import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function AdmBooks() {

  const navigate = useNavigate(); 

  const [books, setBooks] = useState([
    { id: 1, name: "Sample Book 1", author: "Author 1", count: 10, available: "Available" },
    { id: 2, name: "Sample Book 2", author: "Author 2", count: 5, available: "Not Available" },
  ]);
  

  const [isFormVisible, setIsFormVisible] = useState(false);

  const [newBook, setNewBook] = useState({
    name: '',
    author: '',
    count: '',
    available: 'Available',
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBookWithId = { ...newBook, id: books.length + 1 };
    setBooks([...books, newBookWithId]);
    setNewBook({
      name: '',
      author: '',
      count: '',
      available: 'Available',
    });
    setIsFormVisible(false); 
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-left">
          <a href='/AdmHome'><img src="https://via.placeholder.com/50" alt="Library Logo" className="logo-image" /></a>
        </div>
        <div className="header-center">
          <input type="text" placeholder="Search for books..." className="search-bar" />
          <button className="search-button">🔍</button>
        </div>
        <div className="header-right">
          <span className="welcome-text">Welcome Admin</span>
        </div>
      </header>

      <div className="sidebar">
        <ul>
          <li>
            <button className="sidebar-button" onClick={() => navigate('/AdmHome')}>
              Home
            </button>
          </li>
          <li>
            <button className="sidebar-button" onClick={() => navigate('/Books')}>
              Manage Books
            </button>
          </li>
          <li>
            <button className="sidebar-button" onClick={() => navigate('/Users')}>
              Manage Users
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
        <main>
            <div className="content">
              <div className="table-container">
                <table className="book-table">
                  <thead>
                    <tr>
                      <th>Sl.No</th>
                      <th>Book Name</th>
                      <th>Author</th>
                      <th>No. of Books Left</th>
                      <th>Availability</th>
                    </tr>
                  </thead>
                  <tbody>
                    {books.map((book, index) => (
                      <tr key={book.id}>
                        <td>{index + 1}</td>
                        <td>{book.name}</td>
                        <td>{book.author}</td>
                        <td>{book.count}</td>
                        <td>{book.available}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button className="add-book-btn" onClick={() => setIsFormVisible(true)}>
                Add Book
              </button>

              {isFormVisible && (
                <div className="add-book-form">
                  <h3>Add New Book</h3>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name">Book Name:</label>
                      <br></br>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={newBook.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="author">Author:</label><br></br>
                      <input
                        type="text"
                        id="author"
                        name="author"
                        value={newBook.author}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="count">Number of Books Left:</label><br></br>
                      <input
                        type="number"
                        id="count"
                        name="count"
                        value={newBook.count}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="available">Availability:</label><br></br>
                      <select
                        id="available"
                        name="available"
                        value={newBook.available}
                        onChange={handleInputChange}
                      >
                        <option value="Available">Available</option>
                        <option value="Not Available">Not Available</option>
                      </select>
                    </div>
                    <button type="submit">Add Book</button>
                  </form>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdmBooks;
