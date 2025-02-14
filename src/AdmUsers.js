import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function AdmUsers(){
    const navigate = useNavigate();
    const [books, setBooks] = useState([
        { id: 1, name: "user1", borrowed_book_name: "book1", date: "2024-12-10", return_date: "2024-12-20", due_amount: 0 },
      ]);
    
      const [isFormVisible, setIsFormVisible] = useState(false);
    
      const [newBook, setNewBook] = useState({
        name: '',
        borrowed_book_name: '',
        date: '',
        return_date: '',
        due_amount: '',
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
          borrowed_book_name: '',
          date: '',
          return_date: '',
          due_amount: '',
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
                <input type="text" placeholder="Search for books..." className="search-bar" aria-label="Search books" />
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
              <main>
                <div className="content">
                  <div className="table-container">
                    <table className="book-table">
                      <thead>
                        <tr>
                          <th>Sl.No</th>
                          <th>Borrower Name</th>
                          <th>Borrowed Book Name</th>
                          <th>Date</th>
                          <th>Return Date</th>
                          <th>Due Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {books.map((book, index) => (
                          <tr key={book.id}>
                            <td>{index + 1}</td>
                            <td>{book.name}</td>
                            <td>{book.borrowed_book_name}</td>
                            <td>{book.date}</td>
                            <td>{book.return_date}</td>
                            <td>{book.due_amount}</td>
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
                      <h3>Add New User</h3>
                      <form onSubmit={handleSubmit}>
                        <div>
                          <label htmlFor="name">Borrower Name:</label><br />
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
                          <label htmlFor="borrowed_book_name">Borrowed Book Name:</label><br />
                          <input
                            type="text"
                            id="borrowed_book_name"
                            name="borrowed_book_name"
                            value={newBook.borrowed_book_name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="date">Date:</label><br />
                          <input
                            type="date"
                            id="date"
                            name="date"
                            value={newBook.date}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="return_date">Return Date:</label><br />
                          <input
                            type="date"
                            id="return_date"
                            name="return_date"
                            value={newBook.return_date}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="due_amount">Due Amount:</label><br />
                          <input
                            type="number"
                            id="due_amount"
                            name="due_amount"
                            value={newBook.due_amount}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <button type="submit">Add User</button>
                      </form>
                    </div>
                  )}
                </div>
              </main>
            </div>
          </div>
      );

}
export default AdmUsers;