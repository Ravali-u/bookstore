import React from 'react';
import BookCard from './BookCard';

function BookList({ books, handleBookClick }) {
  return (
    <div className="books-container">
      {books.map((book, index) => (
        <BookCard key={index} book={book} handleBookClick={handleBookClick} />
      ))}
    </div>
  );
}

export default BookList;