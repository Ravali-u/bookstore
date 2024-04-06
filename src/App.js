import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import BookList from './BookList';

function App() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response1 = await fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter');
        const data1 = await response1.json();
        const response2 = await fetch('https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes');
        const data2 = await response2.json();
        const combinedData = [...data1.items, ...data2.items];
        setBooks(combinedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`);
      const searchData = await response.json();
      setBooks(searchData.items);
    } catch (error) {
      console.error('Error searching books:', error);
    }
  };

  const handleBookClick = (book) => {
   
    console.log('Clicked book:', book);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Virtual Bookstore</h1>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
      </header>
      <BookList books={books} handleBookClick={handleBookClick} />
    </div>
  );
}

export default App;
