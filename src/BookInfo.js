import React from 'react';
import './App.css';

function BookInfo() {
  const book = {
    title: 'Room of the Dead',
    author: 'Frank Tillie',
    genre: 'Mystery, Thriller',
    pages: 320,
    reviews: [
      'A good thriller that grips from the first page. ',
      'It leaves no room to rest between suspense and continuous surprises.',
      'Story of deep ideas and emotions.',
    ],
  };

  return (
    <div className="book-container">
      <h2 className="book-title">{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Pages:</strong> {book.pages}</p>
      <h3>Reviews:</h3>
      <ul>
        {book.reviews.map((review, index) => (
          <li key={index} className="book-review-item">{review}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookInfo;