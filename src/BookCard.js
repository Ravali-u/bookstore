import React from 'react';

function BookCard({ book, handleBookClick }) {
  return (
    <div className="book-card" onClick={() => handleBookClick(book)}>
      <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
      <h3>{book.volumeInfo.title}</h3>
      <p>{book.volumeInfo.authors?.join(', ')}</p>
    </div>
  );
}

export default BookCard;